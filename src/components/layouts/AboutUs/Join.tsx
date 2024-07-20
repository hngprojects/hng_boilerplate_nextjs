"use client";

import { Button } from "~/components/common/Button";

const Join = () => {
  return (
    <div className="mx-auto mb-[80px] flex h-[185px] w-[948px] flex-col items-center justify-between">
      <h3 className="text-center text-[44px] font-[600] text-[#525252]">
        Join Our Team
      </h3>
      <p className="w-[729px] text-center text-[18px] leading-[22px] text-[#525252]">
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
