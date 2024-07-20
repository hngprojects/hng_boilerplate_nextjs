"use client";

import Image from "next/image";
import { useState } from "react";

type CardProperties = {
  heading: string;
  description: string;
  logoURL: string;
  isActive: boolean;
};
export const TOGGLE_BTN_TEST_ID: string = "toggleBtn";
export const INTEGRATION_CARD_TEST_ID: string = "integrationCard";
export const IntegrationCard = (properties: CardProperties) => {
  const [isActive, setisActive] = useState<boolean>(properties.isActive);
  const handleToogle = () => {
    if (isActive) {
      setisActive(false);
    } else {
      setisActive(true);
    }
  };

  return (
    <div
      data-testid={INTEGRATION_CARD_TEST_ID}
      className="flex h-[159.29px] w-full max-w-[341px] flex-col gap-6 rounded-lg border-[1px] border-border px-4 py-6 text-foreground"
    >
      <div className="flex w-full items-center justify-between">
        <Image
          src={properties.logoURL}
          width={40}
          height={40}
          alt={properties.heading}
          className="h-8 w-8"
        />
        <button
          onClick={handleToogle}
          data-testid={TOGGLE_BTN_TEST_ID}
          className={`h-[22px] w-11 ${isActive ? "bg-[#F97316]" : "bg-[#D0D6D6]"} relative rounded-full`}
        >
          <span
            className={`absolute top-[2px] h-[18px] w-[18px] rounded-full bg-[#F9F9F9] ${isActive ? "right-[2px]" : "left-[2px]"}`}
          ></span>
        </button>
      </div>
      <div className="flex w-full flex-col gap-[6px]">
        <h1 className="text-base font-semibold leading-[19.36px]">
          {properties.heading}
        </h1>
        <p className="text-xs leading-[14.52px]">{properties.description}</p>
      </div>
    </div>
  );
};
