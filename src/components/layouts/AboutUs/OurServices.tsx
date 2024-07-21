"use client";

import Image from "next/image";

import { Button } from "~/components/common/Button";
import Eclipse from "../../../../public/AboutUs/Ellipse.png";

const OurServices = () => {
  return (
    <div className="mx-auto mt-[80px] grid h-[307px] grid-cols-1 items-center max-sm:justify-between max-sm:gap-[32px] md:h-[225px] md:w-[1200px] md:grid-cols-2">
      <div className="flex h-[180px] flex-col justify-between gap-[24px] max-sm:items-center md:h-full">
        <h3 className="h-[34px] text-[24px] font-[700] text-primary md:text-[28px]">
          Our Services
        </h3>
        <p className="relative h-[115px] text-center text-[32px] font-[700] leading-[38px] text-[#525252] max-sm:w-[380px] md:text-start md:text-[44px] md:font-[600] md:leading-[53px]">
          Trained to Give You The Best
          <span>
            <Image
              src={Eclipse}
              alt="eclipse"
              width={100}
              height={15}
              className="absolute left-[160px] top-[45px] max-sm:w-[50px] md:left-0 md:top-[50px]"
            />
          </span>
        </p>
        <Button className="w-[107px] rounded-lg bg-primary p-[8px_16px] text-[14px] text-background">
          Contact Us
        </Button>
      </div>

      <div className="mx-auto h-[95px] w-[382px] md:h-[110px] md:w-[500px]">
        <p className="text-[18px] leading-[19px] text-[#525252] max-sm:text-center md:leading-[22px]">
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
