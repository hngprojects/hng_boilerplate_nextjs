"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import uploadBg from "~/app/dashboard/(admin)/admin/products/edit/[productID]/_components/upload-bg.jpeg";

const ProductMedia = () => {
  const [productImg, setProductImg] = useState<string>("");
  const fileUploaderReference = useRef<HTMLInputElement | null>(null);
  const getUploadedPicUrl = () => {
    if (
      fileUploaderReference.current !== null &&
      fileUploaderReference.current.files !== null
    ) {
      const picURL = URL.createObjectURL(
        fileUploaderReference.current.files[0],
      );
      setProductImg(picURL);
    }
  };

  const triggerFileUploader = () => {
    if (fileUploaderReference.current !== null)
      fileUploaderReference.current.click();
  };

  return (
    <>
      <div className="imgs-uploader flex flex-col items-center justify-center gap-4 px-2 xl:flex-row xl:gap-2">
        <Image
          width={277}
          height={292}
          src={productImg === "" ? uploadBg : productImg}
          alt="product img"
          className="bg-[#F1F5F9]"
        />

        <div
          className="m-0 flex w-[14rem] cursor-pointer justify-center rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] px-1 text-xl font-semibold xl:my-3 xl:h-[11rem] xl:w-fit xl:items-center"
          onClick={triggerFileUploader}
        >
          +
        </div>
        <input
          ref={fileUploaderReference}
          hidden
          type="file"
          name="upload-image"
          id="upload-image"
          onChange={getUploadedPicUrl}
        />
      </div>
    </>
  );
};

export default ProductMedia;
