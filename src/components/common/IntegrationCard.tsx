"use client";

import Image from "next/image";
import { useState } from "react";

type CardProps = {
  heading: string;
  description: string;
  logoURL: string;
};
export const TOGGLE_BTN_TEST_ID: string = "toggleBtn";
export const INTEGRATION_CARD_TEST_ID: string = "integrationCard";
export const INTEGRATION_CARD_IMAGE_TEST_ID: string = "integrationCardImage";

export const IntegrationCard = (props: CardProps) => {
  const [isActive, setisActive] = useState<boolean>(false);

  const updateActiveState = () => {
    //Update the backend API to refelect if a service is active or not
  };

  const handleToogle = () => {
    if (isActive) {
      setisActive(false);
    } else {
      setisActive(true);
    }
    updateActiveState();
  };

  return (
    <div
      data-testid={INTEGRATION_CARD_TEST_ID}
      className="w-[341px] h-[159.29px] rounded-lg border-[1px] border-solid border-[#CBD5E1] px-4 py-6 flex flex-col gap-6"
    >
      <div className="w-full flex items-center justify-between">
        <Image
          data-testid={INTEGRATION_CARD_IMAGE_TEST_ID}
          src={props.logoURL}
          width={24}
          height={24}
          alt={props.heading}
          className="w-8 h-8"
        />
        <button
          onClick={handleToogle}
          data-testid={TOGGLE_BTN_TEST_ID}
          className={`w-11 h-[22px] ${isActive ? "bg-[#F97316]" : "bg-[#D0D6D6]"} relative rounded-full`}
        >
          <span
            className={`w-[18px] h-[18px] rounded-full bg-[#F9F9F9] absolute top-[2px] ${isActive ? "right-[2px] " : "left-[2px]"}`}
          ></span>
        </button>
      </div>
      <div className="w-full flex flex-col gap-[6px] text-[#0A0A0A]">
        <h1 className="text-base font-semibold leading-[19.36px]">
          {props.heading}
        </h1>
        <p className="text-xs leading-[14.52px]">{props.description}</p>
      </div>
    </div>
  );
};
