"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageBody: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | undefined
  >();
  const [title, setTitle] = useState("Welcome to Boilerplate!");
  const [description, setDescription] = useState("Thanks for signing up");

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

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescription(event.target.value);
  };

  return (
    <div className="mt-2 h-96 w-full rounded-sm bg-white hover:border hover:border-orange-500 lg:w-4/5">
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
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="mt-6 w-full border-none text-center text-2xl font-semibold focus:ring-0"
        />
        <input
          type="text"
          value={description}
          onChange={handleDescriptionChange}
          className="mt-2 w-full border-none text-center text-gray-600 focus:ring-0"
        />
      </div>
    </div>
  );
};

export default ImageBody;
