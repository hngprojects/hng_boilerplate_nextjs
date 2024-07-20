"use client";

import { NextPage } from "next";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = () => {
  return (
    <div className="h-full w-full overflow-hidden">
      <div className="relative bottom-[0px] left-[0px] right-[0px] top-[0px] z-[1] w-full bg-neutral-dark-2">
        <section className="md:py-30 md:px-18 z-[2] max-w-full gap-[10px] px-12 py-16 text-center sm:px-12 sm:py-24 lg:px-20 lg:py-36 xl:px-[252px] xl:py-[102px]">
          <div className="relative self-stretch font-bold text-default-foreground max-sm:text-[28px] sm:text-[48px] md:text-[60px]">
            Terms and Conditions
          </div>
          <div className="relative self-stretch font-[400] text-default-foreground max-md:text-[22px] max-sm:text-[18px] md:text-[28px]">
            Achieve your dreams with us today
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
