"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  prompt: z.string().min(2).max(50),
});

import Wrapper from "@/components/shared/wrapper";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

export default function EnhancePage() {
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFilesSelected = (files: File[]) => {
    console.log("Selected files:", files);
  };

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex flex-1">
      <Wrapper className="flex flex-col items-center text-center py-16 md:py-20 relative">
        <div className="relative w-full items-center justify-center flex flex-col mt-10 mb-20">
          <span className="font-black text-primary absolute -top-[160px] text-[200px] opacity-[0.25]">
            ENHANCE
          </span>
        </div>

        <div className="my-20 flex items-center justify-between w-full">
          <div className="flex flex-col gap-4 max-w-[558px] w-full">
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
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full flex flex-col items-end">
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className="mb-6 w-full">
                      <FormLabel>Prompt</FormLabel>
                      <FormControl className="w-full h-16">
                        <Textarea
                          placeholder="shadcn"
                          className="resize-none text-lg"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-max" variant="outline">
                  Enhance
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="w-[563px] h-[513px]">
              <Image
                src="/svg/placeholder.svg"
                alt="placeholder"
                width={563}
                height={513}
                className="w-full h-full object-cover"
              />
            </div>

            <Button className="w-max">
              <HeartFilledIcon className="mr-2 w-4 h-4" /> Mint
            </Button>
          </div>
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
      className="mx-auto max-w-[854px] w-full bg-primary/50 rounded-3xl flex items-center justify-center flex-col gap-4 aspect-video cursor-pointer border-dashed border-2 p-6 text-center">
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
