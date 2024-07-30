"use client";

import uploadImage from "@/../../public/images/upload-image.png";
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
import { useRef, useState } from "react";

import { Button } from "~/components/common/common-button";

const NewTemplate = () => {
  const fileUploaderReference = useRef<HTMLInputElement | null>(null);
  const [picture, setPicture] = useState<string>("");

  const savePicture = () => {
    if (
      fileUploaderReference.current !== null &&
      fileUploaderReference.current.files !== null
    ) {
      const uploadedFile = fileUploaderReference.current?.files[0];
      const cachedURL = URL?.createObjectURL(uploadedFile);
      setPicture(cachedURL);
    }
  };

  const handleImageUpload = () => {
    if (fileUploaderReference.current !== null) {
      fileUploaderReference.current.click();
    }
  };

  return (
    <div className="h-auto md:flex">
      <div className="m-auto w-full md:w-[512px]">
        <h3>Template name</h3>
        <form className="bg-white p-8">
          <input
            type="text"
            placeholder="Title"
            className="borde-0 h-12 w-full px-4 text-2xl outline-none placeholder:text-2xl"
          />
          <div className="mt-4 flex w-full bg-[#F4F4F4] py-14">
            <input
              onChange={savePicture}
              ref={fileUploaderReference}
              hidden
              type="file"
              name=""
              id=""
            />
            <button onClick={handleImageUpload} className="m-auto">
              <Image src={uploadImage} alt="upload button" />
            </button>
          </div>
          <div className="mt-4">
            <div className="mb-4 flex items-center justify-between gap-2 text-xs text-gray-500">
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
              className="h-52 w-full resize-none border border-border outline-none"
            ></textarea>
            <Image src={picture} alt="ccccc" />
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
