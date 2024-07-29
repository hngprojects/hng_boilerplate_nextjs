import React from "react";

import CustomButton from "~/components/common/common-button/common-button";

const WaitlistJoin: React.FC = () => {
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center text-neutral-dark-2">
      <div className="flex h-auto w-[322px] flex-col items-center justify-center text-center md:w-[1104px] md:gap-[15px]">
        <h1 className="text-[32px] font-bold leading-[38.73px] md:text-[60px] md:leading-[72.61px]">
          Join the waitlist and get early{" "}
          <span className="text-primary">access!</span>
        </h1>
        <p className="text-16px leading-bormal mt-[12px] w-[322px] font-normal md:mt-[20px] md:w-[802px] md:text-[28px]">
          Transform your remote work meetings into fun and engaging sessions
          with our innovative game-based platform.
        </p>
      </div>
      <div className="mt-[20px] h-[54px] w-[322px] text-center font-semibold leading-[28px] md:mt-[24px] md:h-[28px] md:w-[584px]">
        <p className="text-[20px]">
          Be a part of the first 2300 users for a{" "}
          <span className="text-primary">10% discount</span>{" "}
        </p>
      </div>
      <div className="mt-[24px] flex items-center gap-4 p-8 md:mt-[20px]">
        <CustomButton className="p-4 md:p-5">Join the waitlist</CustomButton>
      </div>
    </div>
  );
};

export default WaitlistJoin;
