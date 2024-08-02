"use client";

import Image from "next/image";
import React, { useState } from "react";

interface SelectModalProperties {
  img: string;
  index: number;
  handleImage: (
    event: React.ChangeEvent<HTMLInputElement>,
    ind: number,
  ) => void;
}

const AddLogo: React.FC<SelectModalProperties> = ({
  handleImage,
  img,
  index,
}) => {
  const [_img_, setImg] = useState<string | ArrayBuffer | undefined>(img);

  return (
    <div
      id="add-logo-mid-con"
      className="h-52 w-full rounded-sm border bg-white p-4 shadow-md hover:border-orange-500 lg:w-4/5"
    >
      <label className="flex flex-col items-center">
        <div className="mb-4 flex h-44 w-48 cursor-pointer items-center justify-center bg-gray-50">
          {_img_ ? (
            <Image
              src={_img_ as string}
              alt="Selected"
              className="h-full w-full object-contain"
              width={192}
              height={192}
            />
          ) : (
            <span className="text-gray-400">Add your logo</span>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(event_) => {
            handleImage(event_, index); // Call handleImage without using its return value
            const file = event_.target.files?.[0];

            if (file) {
              const reader = new FileReader();

              reader.onloadend = () => {
                setImg(reader.result ?? "");
              };
              reader.readAsDataURL(file); // Use the file object directly
            }
          }}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default AddLogo;
