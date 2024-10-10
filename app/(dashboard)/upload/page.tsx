"use client";

import Wrapper from "@/components/shared/wrapper";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeartFilledIcon } from "@radix-ui/react-icons";

export default function UploadPage() {
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFilesSelected = (files: File[]) => {
    console.log("Selected files:", files);
  };

  return (
    <div className="flex flex-1">
      <Wrapper className="flex flex-col items-center text-center py-16 md:py-20 relative">
        <div className="relative w-full items-center justify-center flex flex-col mt-10 mb-20">
          <span className="font-black text-primary absolute -top-[160px] text-[200px] opacity-[0.25] select-none">
            UPLOAD
          </span>
        </div>

        <div className="my-20 flex items-center justify-between flex-col gap-4 w-full">
          {previews.length > 0 ? (
            previews.map((preview, index) => (
              <Image
                key={index}
                src={preview}
                alt={`preview ${index}`}
                width={300}
                height={300}
              />
            ))
          ) : (
            <ImageDropzone
              onFilesSelected={handleFilesSelected}
              setPreviews={setPreviews}
            />
          )}
          {previews.length > 0 && (
            <Button className="w-max">
              <HeartFilledIcon className="mr-2 w-4 h-4" /> Mint
            </Button>
          )}
        </div>
      </Wrapper>
    </div>
  );
}

const ImageDropzone: React.FC<IDropzone> = ({
  onFilesSelected,
  setPreviews,
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const imagePreviews = acceptedFiles.map((file) =>
        URL.createObjectURL(file)
      );
      setPreviews(imagePreviews);
      onFilesSelected(acceptedFiles);
    },
    [onFilesSelected]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/jpg": [],
    },
    maxSize: 50 * 1024 * 1024, // 50MB in bytes
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className="mx-auto max-w-[854px] w-full bg-primary/50 rounded-3xl flex items-center justify-center flex-col gap-4 aspect-video cursor-pointer border-dashed border-2">
      <Input {...getInputProps()} hidden className="hiddenx" />
      {isDragActive ? (
        <p className="text-base md:text-lg text-foreground">
          Drop the files here ...
        </p>
      ) : (
        <>
          <Upload className="w-14 h-14 opacity-80" />
          <p className="text-base md:text-lg text-foreground">
            Drag &apos;n&apos; drop some files here, or click to select files
          </p>
        </>
      )}
    </div>
  );
};
