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
  handleHeader: (
    event: React.ChangeEvent<HTMLInputElement>,
    ind: number,
  ) => void;
  handleSubheader: (
    event: React.ChangeEvent<HTMLInputElement>,
    ind: number,
  ) => void;
  header: string;
  subheader: string;
}

const ImageBody: React.FC<SelectModalProperties> = ({
  handleImage,
  handleHeader,
  handleSubheader,
  img,
  index,
  header,
  subheader,
}) => {
  const [_img_, setImg] = useState<string | ArrayBuffer | undefined>(img);
  const [_header_, setHeader] = useState<string | undefined>(header);
  const [_subheader_, setSubheader] = useState<string | undefined>(subheader);

  return (
    <div className="mt-2 h-96 w-full rounded-sm bg-white hover:border hover:border-orange-500 lg:w-4/5">
      <label className="flex flex-col items-center">
        <div className="flex h-48 w-full cursor-pointer items-center justify-center bg-gray-50">
          {_img_ ? (
            <Image
              src={_img_ as string}
              alt="Selected"
              className="h-full w-full object-contain"
              width={192}
              height={192}
            />
          ) : (
            <div className="h-24 w-24">
              <Image
                src="/images/icon.png"
                alt="Selected"
                width={192}
                height={192}
              />
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(event_) => {
            const result = handleImage(event_, index);
            const reader = new FileReader();

            reader.onloadend = () => {
              setImg(reader.result ?? "");
            };
            reader.readAsDataURL(result);
          }}
          className="hidden"
        />
      </label>
      <div className="w-full p-5">
        <input
          type="text"
          value={_header_}
          onChange={(event_) => {
            const value = handleHeader(event_, index);
            setHeader((priv) => value);
          }}
          className="mt-6 w-full border-none text-center text-2xl font-semibold focus:ring-0"
        />
        <input
          type="text"
          value={_subheader_}
          onChange={(event_) => {
            const value = handleSubheader(event_, index);
            setSubheader((priv) => value);
          }}
          className="mt-2 w-full border-none text-center text-gray-600 focus:ring-0"
        />
      </div>
    </div>
  );
};

export default ImageBody;
