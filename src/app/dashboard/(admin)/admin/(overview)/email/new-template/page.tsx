"use client";

import {
  AlignCenter,
  AlignLeft,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  ItalicIcon,
  Link,
  ListOrdered,
  Pen,
  StrikethroughIcon,
} from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

import { Button } from "~/components/common/common-button";
import uploadImage from "../_components/assets/upload-image.png";

const NewTemplate = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>();
  const fileInputReference = useRef<HTMLInputElement>(null);

  const handleImageClick = (): void => {
    fileInputReference.current?.click();
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
        const result = event.target?.result;
        if (typeof result === "string") {
          setSelectedImage(result);
        }
      });
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto my-0 w-full py-2 md:w-[685px]">
        <form className="px-4 py-8">
          <input
            type="text"
            placeholder="Add Title"
            className="h-8 w-full border-0 text-lg font-bold outline-none placeholder:text-lg placeholder:font-bold placeholder:text-[#0A0A0A]"
          />

          <input
            type="text"
            placeholder="Add Description"
            className="w-full border-0 text-xs outline-none placeholder:text-xs"
          />

          <input
            type="text"
            placeholder="Add Type"
            className="w-full border-0 text-xs outline-none placeholder:text-xs"
          />
          <div className="mt-4 flex w-full bg-[#F4F4F4] py-14">
            <figure className="relative m-auto flex flex-col items-center rounded-full border-[#0000001f] p-5 py-6">
              <div onClick={handleImageClick} className="cursor-pointer">
                {selectedImage ? (
                  <Image
                    src={selectedImage}
                    alt="Uploaded Image"
                    width={150}
                    height={100}
                    className="rounded-md object-cover"
                  />
                ) : (
                  <span className="">
                    <Image src={uploadImage} alt="Camera Icon" />
                  </span>
                )}
              </div>

              <label
                htmlFor="profileUpload"
                className="leading-0 mt-2 cursor-pointer text-sm"
                onClick={handleImageClick}
              >
                {selectedImage ? "Change Image" : "Upload"}
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="profileUpload"
                ref={fileInputReference}
                onChange={handleFileChange}
              />
            </figure>
          </div>
          <div className="mt-4">
            <div className="mb-4 flex items-center gap-4 text-xs text-gray-500">
              <Bold />
              <ItalicIcon />
              <StrikethroughIcon /> |
              <Heading1 />
              <Heading2 />
              <Heading3 /> |
              <Pen />
              <Code />
              <Link />
              <AlignLeft />
              <AlignCenter />
              <ListOrdered /> |
            </div>
            <textarea
              name=""
              id=""
              className="h-52 w-full resize-none border border-border px-4 py-4 outline-none"
            ></textarea>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button className="inline-flex h-10 items-center justify-center bg-primary">
              Save Template
            </Button>
            <Button className="inline-flex h-10 items-center justify-center bg-background text-black">
              Clear
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTemplate;
