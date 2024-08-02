"use client";

import Image from "next/image";
import React, { useState } from "react";

interface SelectModalProperties {
  img: string;
  index: number;
  handleImage: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => File | undefined;
  handleHeader: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => string;
  handleSubheader: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => string;
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
  const [imgSource, setImgSource] = useState<string | ArrayBuffer | undefined>(
    img,
  );
  const [headerText, setHeaderText] = useState<string | undefined>(header);
  const [subheaderText, setSubheaderText] = useState<string | undefined>(
    subheader,
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = handleImage(event, index);
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImgSource(reader.result ?? "");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-2 h-96 w-full rounded-sm bg-white hover:border hover:border-orange-500 lg:w-4/5">
      <label className="flex flex-col items-center">
        <div className="flex h-48 w-full cursor-pointer items-center justify-center bg-gray-50">
          {imgSource ? (
            <Image
              src={imgSource as string}
              alt="Selected"
              className="h-full w-full object-contain"
              width={192}
              height={192}
            />
          ) : (
            <div className="h-24 w-24">
              <Image
                src="/images/icon.png"
                alt="Placeholder"
                width={192}
                height={192}
              />
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <div className="w-full p-5">
        <input
          type="text"
          value={headerText}
          onChange={(event) => {
            const value = handleHeader(event, index);
            setHeaderText(value);
          }}
          className="mt-6 w-full border-none text-center text-2xl font-semibold focus:ring-0"
        />
        <input
          type="text"
          value={subheaderText}
          onChange={(event) => {
            const value = handleSubheader(event, index);
            setSubheaderText(value);
          }}
          className="mt-2 w-full border-none text-center text-gray-600 focus:ring-0"
        />
      </div>
    </div>
  );
};

export default ImageBody;
