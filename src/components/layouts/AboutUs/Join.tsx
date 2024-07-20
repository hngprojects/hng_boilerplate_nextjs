"use client";

import { Button } from "~/components/common/Button";

const Join = () => {
  return (
    <div className="mx-auto mb-[80px] flex h-[185px] flex-col items-center justify-between md:w-[948px]">
      <h3 className="text-center text-[32px] font-[700] text-[#525252] md:text-[44px] md:font-[600]">
        Join Our Team
      </h3>
      <p className="w-[381px] text-center text-[16px] leading-[19px] text-[#525252] md:w-[729px] md:text-[18px] md:leading-[22px]">
        Interested in joining out team? View our Job Listing page for openings
        and apply with an equal chance of working with us!
      </p>
      <Button className="flex h-[40px] w-[80px] items-center justify-center rounded-[6px] bg-[#F97316] p-[16px_8px] text-[#fff]">
        Join us
      </Button>
    </div>
  );
};

export default Join;
