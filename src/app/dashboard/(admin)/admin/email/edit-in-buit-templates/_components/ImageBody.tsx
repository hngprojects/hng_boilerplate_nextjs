"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageBody: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | undefined
  >();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result ?? undefined);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mt-4 h-96 w-full rounded-sm border bg-white shadow-md hover:border-orange-500 md:w-3/5">
      <label className="flex flex-col items-center">
        <div className="flex h-48 w-full cursor-pointer items-center justify-center bg-gray-50">
          {selectedImage ? (
            <Image
              src={selectedImage as string}
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
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
      <div className="w-full p-5">
        <h1 className="mt-6 text-center text-2xl font-semibold">
          Welcome to Boilerplate!
        </h1>
        <p className="text-center text-gray-600">Thanks for signing up</p>
      </div>
    </div>
  );
};

export default ImageBody;
