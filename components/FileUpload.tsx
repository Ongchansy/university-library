"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploadProps {
  onUpload?: (fileUrl: string) => void; // Pass fileUrl instead of File object
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      if (acceptedFiles.length === 0) return;

      const selectedFile = acceptedFiles[0];


      // Prepare file for upload
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("https://image-upload-ytw8.onrender.com/upload", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(`Upload failed: ${response.statusText}`);
        }

        const data = await response.json(); // Get uploaded file URL
        setUploadedUrl(data.url);

        if (onUpload) {
          onUpload(data.url); // Send URL to parent component (BookForm)
        }

      } catch (error) {
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

      {uploadedUrl && (
        <div className="mt-4">
          <p>File uploaded successfully!</p>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
            <Image src={uploadedUrl} alt="Uploaded" height={300} width={400} />
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
