"use client";

import React, { useRef, useState } from "react";
import { IKImage, ImageKitProvider, IKUpload, IKVideo } from "imagekitio-next";
import config from "@/lib/config";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface UploadResponse {
  filePath: string;
  // Add any other expected properties here
}

const authUrl = config.env.apiEndpoint;
const {
  env: {
    imageKit: { publicKey, urlEndpoint },
  },
} = config;

const authenticator = async () => {
  try {
    const response = await fetch(`${authUrl}/api/auth/imageKit`);

    if (!response.ok) {
      const textError = await response.text();
      throw new Error(`Request failed with status: ${response.status}: ${textError}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication returned error: ${error}`);
  }
};

export interface Props {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dart" | "light";
  onFileChange: (filePath: string) => void;
}

const FileUpload = ({ type, accept, placeholder, folder, variant, onFileChange }: Props) => {
  const ikUploadRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const style = {
    button: variant === "dart" ? "bg-dark-300" : "bg-light-600",
    placeholder: variant === "dart" ? "text-light-100" : "text-slate-500",
    text: variant === "dart" ? "text-light-100" : "text-dark-400",
  };

  const onSuccess = (res:UploadResponse) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: `${type} upload successful`,
      description: `Your ${type} has been uploaded successfully.`,
    });
  };

  const onError = () => {
    toast({
      title: `${type} upload failed`,
      description: `Your ${type} could not be uploaded. Please try again.`,
      variant: "destructive",
    });
  };

  const onValidate = (file: File) => {
    const maxSize = type === "image" ? 20 * 1024 * 1024 : 50 * 1024 * 1024;
    if (file.size > maxSize) {
      toast({
        title: "File size too large",
        description: `Please upload a file that is less than ${maxSize / (1024 * 1024)}MB in size.`,
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint} authenticator={authenticator}>
      <IKUpload
        className="hidden"
        ref={ikUploadRef}
        onSuccess={onSuccess}
        onError={onError}
        useUniqueFileName={true}
        validateFile={onValidate}
        onUploadStart={() => setProgress(0)}
        onUploadProgress={({ loaded, total }) => {
            const percent = Math.round((loaded / total) * 100);

            // Simulate a slower progress update
            if (percent < 100) {
                setTimeout(() => setProgress(percent), 100);
                
            } else {
                setProgress(100);
            }
        }}
        folder={folder}
        accept={accept}
      />

      <Button
        onClick={(e) => {
          e.preventDefault();
          ikUploadRef.current?.click();
        }}
        className={cn("upload-btn", style.button)}
      >
        <Image src={`/icons/upload.svg`} alt="upload-icon" width={20} height={20} className="object-contain" />
        <p className={cn("text-base", style.placeholder)}>{placeholder}</p>
        {file && <p className={cn("upload-filename", style.text)}>{file.filePath}</p>}
      </Button>

      {progress > 0 && progress !== 100 && (
        <div className="w-full rounded-full bg-green-200">
          <div className="progress bg-green-500 text-white text-xs font-bold p-1 text-center" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}

      {file &&
        (type === "image" ? (
          <IKImage alt={file.filePath} height={300} width={500} path={file.filePath} />
        ) : (
          <IKVideo path={file.filePath} controls className="h-96 w-full rounded-xl" />
        ))}
    </ImageKitProvider>
  );
};

export default FileUpload;
