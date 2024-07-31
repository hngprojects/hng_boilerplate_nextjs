"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { Button } from "~/components/ui/button";

const AdminSettings = () => {
  const [profileUrl, setProfileUrl] = useState<string>("");
  const fileUploaderReference = useRef<HTMLInputElement | null>(null);
  const handleImageUpload = () => {
    if (fileUploaderReference.current !== null) {
      fileUploaderReference.current.click();
    }
  };
  const displayUploadedImg = async () => {
    if (
      fileUploaderReference.current !== null &&
      fileUploaderReference.current.files !== null
    ) {
      const uploadedFile = fileUploaderReference.current?.files[0];
      const cachedURL = URL?.createObjectURL(uploadedFile);
      setProfileUrl(cachedURL);
    }
  };
  return (
    <>
      <section className="flex w-full max-w-[51.625rem] flex-col gap-6 px-3 py-4 md:px-[2.38rem] md:py-[2.19rem]">
        <div className="w-fullphoto-section flex flex-col gap-4">
          <label
            htmlFor="profile-pic"
            className="text-sm font-medium text-[#0F172A]"
          >
            Your Photo
          </label>
          <div
            className="flex w-full flex-col items-center gap-4 sm:flex-row"
            id="profile-pic"
          >
            <div
              className="relative grid h-[6.75rem] w-[6.75rem] cursor-pointer place-items-center rounded-[50%] border-[1px] border-dashed border-[#CBD5E1] bg-none"
              onClick={handleImageUpload}
            >
              <Image
                width={108}
                height={108}
                src={profileUrl}
                alt=""
                className="absolute left-0 top-0 z-[-1] h-[100%] w-[100%] rounded-[50%]"
              />
              {profileUrl === "" ? (
                <p className="z-1 bg-transparent text-xl font-medium">CN</p>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <p
                className="cursor-pointer text-base font-semibold text-orange-500"
                onClick={handleImageUpload}
              >
                Upload your photo
              </p>
              <p className="text-sm font-normal text-[#525252]">
                Please help your teammates recognize you
              </p>
            </div>
            <input
              type="file"
              id="file"
              ref={fileUploaderReference}
              onChange={displayUploadedImg}
              hidden
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <div className="w-full">
            <label
              htmlFor="user-name"
              className="mb-2 text-sm font-medium text-[#0F172A]"
            >
              Username
            </label>
            <br />
            <input
              type="text"
              name="user-name"
              id="user-name"
              placeholder="Enter username"
              className="w-full rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-3 py-2 text-base font-medium text-[#0F172A] focus:outline-orange-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="pronouns"
              className="mb-2 text-sm font-medium text-[#0F172A]"
            >
              Pronouns
            </label>
            <br />
            <input
              type="text"
              name="pronouns"
              id="pronouns"
              placeholder="Eg. He/Him"
              className="w-full rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-3 py-2 text-base font-medium text-[#0F172A] focus:outline-orange-500"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <div className="w-full">
            <label
              htmlFor="job-title"
              className="mb-2 text-sm font-medium text-[#0F172A]"
            >
              Your job title
            </label>
            <br />
            <input
              type="text"
              name="job-title"
              id="job-title"
              placeholder="Enter job title"
              className="w-full rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-3 py-2 text-base font-medium text-[#0F172A] focus:outline-orange-500"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="department"
              className="mb-2 text-sm font-medium text-[#0F172A]"
            >
              Department or team
            </label>
            <br />
            <input
              type="text"
              name="department"
              id="department"
              placeholder="Enter department or team"
              className="w-full rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-3 py-2 text-base font-medium text-[#0F172A] focus:outline-orange-500"
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium text-[#0F172A]"
          >
            Your email address
          </label>
          <br />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="w-full rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-3 py-2 text-base font-medium text-[#0F172A] focus:outline-orange-500"
          />
        </div>
        <div className="w-full">
          <label
            htmlFor="bio"
            className="mb-2 text-sm font-medium text-[#0F172A]"
          >
            Bio
          </label>
          <br />
          <textarea
            rows={3}
            name="bio"
            id="bio"
            placeholder="Type your bio here"
            className="w-full rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-3 py-2 text-base font-medium text-[#0F172A] focus:outline-orange-500"
          />
          <p className="text-sm font-normal text-[#64748B]">
            Maximum of 64 characters
          </p>
        </div>
        <div className="mt-[-0.75rem] flex justify-end gap-3">
          <Button className="border-[1px] border-solid border-[#E2E8F0] bg-white text-sm font-normal text-[#0F172A]">
            Cancel
          </Button>
          <Button className="text-sm font-normal">Save Changes</Button>
        </div>
      </section>
    </>
  );
};

export default AdminSettings;
