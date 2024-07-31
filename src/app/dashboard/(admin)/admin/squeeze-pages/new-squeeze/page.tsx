"use client"
import Image from "next/image";
import { Input } from "~/components/common/input";
import { useRouter } from 'next/navigation'
import { Button } from "~/components/ui/button";
import camera_icon from "../assets/camera_icon.png";

const NewSqueezePage = () => {
  const router = useRouter()
  const handleFormSubmit = () => {
   router.push("new-squeeze-title")
  };

  return (
    <div>
      <div className="mr-auto">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-8 text-neutral-dark-2">
          New Squeeze page
        </h3>
        <h5 className="whitespace-nowrap text-base font-normal leading-4 text-neutral-dark-2">
          create new squeeze page
        </h5>
        <br />
      </div>
      <div className="my-2 flex h-40 w-full items-center justify-center bg-[#F4F4F4]">
        <figure className="relative flex flex-col items-center rounded-full border-2 border-dashed border-[#0000001f] p-5 py-6">
          <span className="">
            <Image src={camera_icon} alt="" className="" />
          </span>
          <span className="absolute right-1 top-1 rounded-full bg-[#F97316] px-1 text-xs text-white">
            +
          </span>

          <label
            htmlFor="profileUpload"
            className="leading-0 cursor-pointer text-sm"
          >
            upload
          </label>
          <input
            type="file"
            accept="img/jpg, img/png"
            className="hidden"
            id="profileUpload"
          />
        </figure>
      </div>
      <div className="w-full">
        <div className="flex w-full gap-3">
          <div className="w-full">
            <label htmlFor="title">Page Title</label>
            <Input
              id="title"
              type="input"
              placeholder="e.g Jonh Doe"
              className="col-span-3 text-black inline-flex h-11 w-full items-start justify-start gap-2 outline-none"
            />
          </div>
          <div className="w-full">
            <label htmlFor="title">Url slug</label>
            <Input
              id="title"
              type="input"
              placeholder="e.g Jonh Doe"
              className="col-span-3 text-black inline-flex h-11 w-full items-start justify-start gap-2 outline-none"
            />
          </div>
        </div>
        <br />
        <div className="w-full">
          <label htmlFor="title">Headline text</label>
          <Input
            id="title"
            type="input"
            placeholder="e.g Jonh Doe"
            className="col-span-3 text-black inline-flex h-11 w-full items-start justify-start gap-2"
          />
        </div>
        <br />
        <div className="w-full">
          <label htmlFor="title">Sub Headline Text</label>
          <Input
            id="title"
            type="input"
            placeholder="e.g Jonh Doe"
            className="col-span-3 inline-flex text-black h-11 w-full items-start justify-start gap-2 outline-none"
          />
        </div>
        <br />
        <div className="w-full">
          <label htmlFor="title">Body text</label>
          <textarea
            className="h-36 w-full px-4 py-6 outline-[#F97316]"
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
    </div>
  );
};

export default NewSqueezePage;
