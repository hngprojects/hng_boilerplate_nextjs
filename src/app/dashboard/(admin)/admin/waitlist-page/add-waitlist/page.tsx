"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";

import { Input } from "~/components/common/input";
import { Button } from "~/components/ui/button";
import camera_icon from "../data/assets/camera.png";

const AddWaitListPage = () => {
  const router = useRouter();
  const handleFormSubmit = () => {
    router.push("new-squeeze-title");
  };
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
    <>
      <div className="mr-auto">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-8 text-neutral-dark-2">
          New Squeeze page
        </h3>
        <h5 className="mt-1 whitespace-nowrap text-sm font-normal leading-4 text-[#64748B]">
          Create New Waitlist Page
        </h5>
        <br />
      </div>
      <div className="mt-2 flex h-40 w-full items-center justify-center bg-[#F4F4F4]">
        <figure className="relative flex flex-col items-center rounded-full border-[#0000001f] p-5 py-6">
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
                <Image src={camera_icon} alt="Camera Icon" />
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
      <div className="mt-3 w-full">
        <div className="flex w-full gap-3">
          <div className="w-full gap-1">
            <label htmlFor="title">Page Title</label>
            <Input
              id="title"
              type="input"
              placeholder="e.g Jonh Doe"
              className="col-span-3 inline-flex h-11 w-full items-start justify-start gap-2 text-black outline-none"
            />
          </div>
          <div className="w-full gap-1">
            <label htmlFor="title">Url slug</label>
            <Input
              id="title"
              type="input"
              placeholder="e.g Jonh Doe"
              className="col-span-3 inline-flex h-11 w-full items-start justify-start gap-2 text-black outline-none"
            />
          </div>
        </div>
        <br />
        <div className="w-full gap-1">
          <label htmlFor="title">Headline text</label>
          <Input
            id="title"
            type="input"
            placeholder="e.g Jonh Doe"
            className="col-span-3 inline-flex h-11 w-full items-start justify-start gap-2 text-black"
          />
        </div>
        <br />
        <div className="w-full gap-1">
          <label htmlFor="title">Sub Headline Text</label>
          <Input
            id="title"
            type="input"
            placeholder="e.g Jonh Doe"
            className="col-span-3 inline-flex h-11 w-full items-start justify-start gap-2 text-black outline-none"
          />
        </div>
        <br />
        <div className="w-full gap-1">
          <label htmlFor="title">Body text</label>
          <textarea
            className="h-36 w-full rounded-md px-4 py-6 outline-[#F97316]"
            placeholder="add product description"
          ></textarea>
        </div>
        <br />
        <div className="mr-full absolute right-4 flex items-center gap-2">
          <button className="h-10 rounded border bg-[#F1F5F9] px-2 text-sm">
            Preview Page
          </button>
          <Button onClick={handleFormSubmit}>Save Page</Button>
        </div>
      </div>
      <br />

      <br />
    </>
  );
};

export default AddWaitListPage;
