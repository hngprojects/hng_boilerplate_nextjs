"use client";

import Image from "next/image";
import React, { useState } from "react";

const AddLogo: React.FC = () => {
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
    <div className="h-52 w-full rounded-sm border bg-white p-4 shadow-md hover:border-orange-500 md:w-4/5">
      <label className="flex flex-col items-center">
        <div className="mb-4 flex h-44 w-48 cursor-pointer items-center justify-center bg-gray-50">
          {selectedImage ? (
            <Image
              src={selectedImage as string}
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
          onChange={handleImageChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default AddLogo;
