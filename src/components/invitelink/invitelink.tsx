"use client";

import { useEffect, useState } from "react";

export default function InviteLink() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    if (isEnabled) {
      fetchLink();
    }
  }, [isEnabled]);

  const fetchLink = async () => {
    const response = await fetch("https://dummyjson.com/c/cbbb-72ae-4ab0-b987");
    const data = await response.json();
    const randomNumber = Math.floor(Math.random() * data?.length);
    setLink(data[randomNumber].url);
  };

  const handleToggle = () => {
    setIsEnabled(!isEnabled);
    if (isEnabled) {
      setLink("");
    } else {
      fetchLink();
    }
  };

  const handleCopy = () => {
    if (link) {
      navigator.clipboard.writeText(link).then(() => {
        setIsCopied(true);

        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      });
    }
  };

  const handleRefresh = async () => {
    await fetchLink();
  };

  return (
    <div className=" mx-auto flex w-[894px] flex-col items-center  gap-30">
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <p className="text-lg font-bond"> Invite Link</p>
          <p className="text-sm mt-[8px]">
            {" "}
            This provides a unique URL that allows anyone to join your workspace
          </p>{" "}
        </div>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={isEnabled}
            onChange={handleToggle}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none  dark:peer-focus:ring-[#F97316] rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F97316]"></div>
        </label>
      </div>
      {isEnabled && (
        <div className="flex  w-full px-[8px] py-[16px] items-center justify-between ">
          <div className="flex border-[1px] rounded-md justify-between flex-shrink-0 border-slate-300">
            <input
              type="text"
              value={link}
              readOnly
              className="flex w-[703px] outline-0 border-0 hover:outline-0 hover:border-0 focus:outline-0 focus:border-0"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => handleRefresh()}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14 1.33337V5.33337H10"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 8.00003C2.00105 6.84224 2.33707 5.70948 2.9675 4.73839C3.59794 3.76729 4.49588 2.99934 5.55301 2.52715C6.61013 2.05497 7.7813 1.89873 8.92524 2.07727C10.0692 2.2558 11.137 2.7615 12 3.53336L14 5.33336"
                stroke="#141414"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 14.6666V10.6666H6"
                stroke="#141414"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 8C13.9989 9.15779 13.6629 10.2905 13.0325 11.2616C12.4021 12.2327 11.5041 13.0007 10.447 13.4729C9.38987 13.9451 8.2187 14.1013 7.07476 13.9228C5.93082 13.7442 4.86297 13.2385 4 12.4667L2 10.6667"
                stroke="#141414"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <button
            className="flex w-[105px] gap-[4px] px-[8px] py-[8px] rounded-xl items-start text-[#ffffff] bg-[#F97316]"
            onClick={handleCopy}
            disabled={!link}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
            >
              <g clipPath="url(#clip0_8556_154)">
                <path
                  d="M13.8333 6H7.83333C7.09695 6 6.5 6.59695 6.5 7.33333V13.3333C6.5 14.0697 7.09695 14.6667 7.83333 14.6667H13.8333C14.5697 14.6667 15.1667 14.0697 15.1667 13.3333V7.33333C15.1667 6.59695 14.5697 6 13.8333 6Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.8335 10H3.16683C2.81321 10 2.47407 9.85956 2.22402 9.60952C1.97397 9.35947 1.8335 9.02033 1.8335 8.66671V2.66671C1.8335 2.31309 1.97397 1.97395 2.22402 1.7239C2.47407 1.47385 2.81321 1.33337 3.16683 1.33337H9.16683C9.52045 1.33337 9.85959 1.47385 10.1096 1.7239C10.3597 1.97395 10.5002 2.31309 10.5002 2.66671V3.33337"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_8556_154">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>{" "}
            {isCopied ? "Copied!" : "CopyLink"}
          </button>
        </div>
      )}
    </div>
  );
}
