"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploadProps {
  onUpload?: (fileUrl: string) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const selectedFile = acceptedFiles[0];
      setUploadProgress(0);
      setIsUploading(true);

      // Prepare file for upload
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const xhr = new XMLHttpRequest();
        
        xhr.upload.addEventListener("progress", (event) => {
          if (event.lengthComputable) {
            const progress = Math.round((event.loaded / event.total) * 100);
            setUploadProgress(progress);
          }
        });

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            setIsUploading(false);
            if (xhr.status === 200) {
              const data = JSON.parse(xhr.responseText);
              setUploadedUrl(data.url);
              if (onUpload) {
                onUpload(data.url);
              }
            } else {
              console.error("Upload failed:", xhr.statusText);
            }
          }
        };

        xhr.open("POST", "https://image-upload-ytw8.onrender.com/upload");
        xhr.send(formData);

      } catch (error) {
        setIsUploading(false);
        console.error("Error uploading file:", error);
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".jpeg", ".jpg", ".png", ".gif"], "application/pdf": [".pdf"] },
    multiple: false,
  });

  return (
    <div>
      <div {...getRootProps()} className="cursor-pointer p-5 border-2 border-dashed rounded-lg text-center">
        <input {...getInputProps()} />
        <p>Drag & drop a file here, or click to select a file</p>
      </div>

      {isUploading && (
        <div className="mt-4 w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${uploadProgress}%` }}
          ></div>
          <p className="text-sm text-gray-600 mt-1">
            Uploading... {uploadProgress}%
          </p>
        </div>
      )}

      {uploadedUrl && !isUploading && (
        <div className="mt-4">
          <p className="text-green-600 mb-2">File uploaded successfully!</p>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
            <Image 
              src={uploadedUrl} 
              alt="Uploaded" 
              height={300} 
              width={400} 
              className="max-h-60 object-contain border rounded"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;