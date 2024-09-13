"use client";

import React from "react";

import CustomButton from "~/components/common/common-button/common-button";

const scrollToForm = () => {
  const formElement = document.querySelector("#waitlist-form");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth" });
  }
};

const WaitlistJoin: React.FC = () => {
  return (
    <div className="mt-[10px] flex flex-col items-center justify-center text-neutral-dark-2 md:mt-[10px]">
      <div className="mb-[10px] rounded-md bg-[#F1F1F1] px-3 text-[20px] font-normal leading-6">
        waitlist
      </div>
      <div className="mt-[10px] flex h-auto w-[322px] flex-col items-center justify-center text-center md:mt-[25px] md:w-[700px] md:gap-[15px] lg:w-[1004px]">
        <h1 className="text-3xl font-bold leading-normal md:text-3xl md:leading-[72.61px] lg:text-5xl">
          Join the waitlist and get early{" "}
          <span className="text-primary">access!</span>
        </h1>
        <p className="mt-[12px] w-[322px] text-lg font-normal leading-6 md:mt-0 md:w-[802px] md:text-2xl md:leading-9 lg:text-2xl">
          Transform your remote work meetings into fun and engaging sessions
          with our innovative game-based platform.
        </p>
      </div>
      <div className="mt-[20px] h-[54px] w-[322px] text-center font-semibold leading-[28px] md:mt-[30px] md:h-[28px] md:w-[584px]">
        <p className="text-lg font-bold leading-6 text-[#525252] md:font-medium md:leading-7">
          Be a part of the first 2300 users for a{" "}
          <span className="text-primary">10% discount</span>{" "}
        </p>
      </div>
      <div className="mt-[5px] flex items-center gap-4 p-8 md:mt-[20px]">
        <CustomButton
          className="p-6 text-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          onClick={scrollToForm}
        >
          Join the waitlist
        </CustomButton>
      </div>
    </div>
  );
};

export default WaitlistJoin;
