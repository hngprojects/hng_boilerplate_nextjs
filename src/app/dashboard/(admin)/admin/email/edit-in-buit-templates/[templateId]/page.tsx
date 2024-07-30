"use client";

import { Img } from "@react-email/components";
import { motion } from "framer-motion";
import { useState } from "react";

const Page = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex flex-col justify-between sm:flex-row">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Edit Template</h1>
          <p className="text-gray-400">
            Edit the email template to specifically suit your needs and purpose.
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between gap-3 sm:mt-0">
          <button
            className="rounded-md p-2 hover:bg-gray-100"
            aria-label="Preview"
          >
            <span role="img" aria-label="Eye Icon">
              👁️
            </span>
          </button>
          <button
            className="rounded-md p-2 hover:bg-gray-100"
            aria-label="Move Left"
          >
            <span role="img" aria-label="Left Arrow Icon">
              ◀️
            </span>
          </button>
          <button className="rounded-md p-2" aria-label="Move Right">
            <span role="img" aria-label="Right Arrow Icon">
              ▶️
            </span>
          </button>
          <button className="rounded-md bg-[#F97316] px-4 py-2 text-[#FAFAFA]">
            Send
          </button>
          <button
            className="rotate-[90deg] rounded-md p-2 hover:bg-gray-100"
            aria-label="More Options"
          >
            <span role="img" aria-label="Ellipsis Icon" className="rotate-180">
              ...
            </span>
          </button>
        </div>
      </div>
      <div className="py-16">
        <div className="flex items-center justify-center">
          <div className="bg-slate-300 px-9 py-9">Add Logo</div>
        </div>
      </div>
      <div className="flex items-center justify-center">photo img</div>
      <div className="flex flex-col items-center justify-center gap-4 py-16">
        <h1>Welcome to Boilerplate</h1>
        <p>Thanks for signing up</p>
      </div>
      <div className="mx-auto mt-2 flex max-w-prose flex-col items-center justify-center gap-5 rounded-lg border border-[#F97316] px-6 py-12 text-sm shadow-2xl">
        <p className="py-9 text-[16px] text-[#525252]">
          We are thrilled to have you join us. Experience quality and innovation
          like never before. Our product meets your needs and makes your life
          easier.
        </p>
        <div className="flex items-center gap-3">
          <div className="mr-2 flex-shrink-0">
            <Img
              src="https://i.imgur.com/bmprMwh.png"
              alt="Offer Icon"
              className="h-6 w-6"
            />
          </div>
          <span className="text-[#121212]">
            Exclusive Offers:{" "}
            <span className="leading-[19px]">
              Enjoy special promotions and discounts available only to our
              members.
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="mr-2 flex-shrink-0">
            <Img
              src="https://i.imgur.com/bmprMwh.png"
              alt="Offer Icon"
              className="h-6 w-6"
            />
          </div>
          <span className="text-[#121212]">
            Exclusive Offers:{" "}
            <span className="leading-[19.36px] text-[#525252]">
              Enjoy special promotions and discounts available only to our
              members.
            </span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="mr-2 flex-shrink-0">
            <Img
              src="https://i.imgur.com/bmprMwh.png"
              alt="Offer Icon"
              className="h-6 w-6"
            />
          </div>
          <span className="text-[#121212]">
            Exclusive Offers:{" "}
            <span className="leading-[19.36px] text-[#525252]">
              Enjoy special promotions and discounts available only to our
              members.
            </span>
          </span>
        </div>
      </div>
      <div className="my-24 flex items-center justify-center">
        <button
          className="rounded-md bg-[#f97316] px-8 py-3 text-[16px] text-white"
          onClick={togglePopup}
        >
          Learn more about us
        </button>
      </div>
      {isPopupVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="buttonText"
                  className="block text-sm font-medium text-gray-700"
                >
                  Button text
                </label>
                <input
                  type="text"
                  id="buttonText"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm outline-none sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="buttonUrl"
                  className="block text-sm font-medium text-gray-700"
                >
                  Button URL
                </label>
                <input
                  type="text"
                  id="buttonUrl"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm outline-none sm:text-sm"
                />
              </div>
              <div className="flex justify-between">
                <button className="rounded-md bg-[#F97316] px-4 py-2 text-white hover:bg-[#d86414]">
                  Save
                </button>
              </div>
            </div>
            <button
              onClick={closePopup}
              aria-label="Close popup"
              className="absolute bottom-7 right-7 text-gray-500 hover:text-gray-700"
            >
              ✖️
            </button>
          </motion.div>
        </motion.div>
      )}
      <div className="mt-6">
        <p>Regards,</p>
        <p>Boilerplate</p>
      </div>
    </div>
  );
};

export default Page;
