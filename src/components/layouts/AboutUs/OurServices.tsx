"use client";

import { Button } from "~/components/common/Button";

const OurServices = () => {
  return (
    <div className="mx-auto mt-[80px] grid h-[225px] w-[1200px] grid-cols-2 items-center">
      <div className="flex h-full w-[486px] flex-col justify-between">
        <h3 className="h-[34px] text-[28px] font-[700] text-[#F97316]">
          Our Services
        </h3>
        <p className="h-[115px] text-[44px] font-[600] leading-[53px] text-[#525252]">
          Trained to Give You The Best
        </p>
        <Button className="w-[107px] rounded-lg bg-[#F97316] p-[8px_16px] text-[14px] text-[#fff]">
          Contact Us
        </Button>
      </div>

      <div className="h-[110px] w-[500px]">
        <p className="text-[18px] leading-[22px] text-[#525252]">
          Since our founding in, Hng Boilerplate has been dedicated to
          constantly evolving to stay ahead of the curve. Our agile mindset and
          relentless pursuit of innovation ensure that you`re always equipped
          with the most effective tools and strategies.{" "}
        </p>
      </div>
    </div>
  );
};

export default OurServices;
