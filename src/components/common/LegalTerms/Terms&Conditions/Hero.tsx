"use client";

import { NextPage } from "next";
import Image from "next/image";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-full relative top-[0px] right-[0px] bottom-[0px] left-[0px] bg-default z-[1]">
        <section className="gap-[10px] max-w-full z-[2] text-center py-16 px-12 sm:py-24 sm:px-12 md:py-30 md:px-18 lg:py-36 lg:px-20  xl:px-[252px] xl:py-[102px]">
          <div className="self-stretch relative font-bold md:text-[60px] sm:text-[48px] max-sm:text-[28px] text-default-foreground">
            Terms and Conditions
          </div>
          <div className="self-stretch relative md:text-[28px] max-md:text-[22px] max-sm:text-[18px] text-default-foreground font-[400]">
            Achieve your dreams with us today
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
