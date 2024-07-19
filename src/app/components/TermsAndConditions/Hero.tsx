"use client";

import { NextPage } from "next";
import Image from "next/image";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = () => {
  return (
    // <div className="w-full overflow-hidden flex flex-row items-start justify-center pt-[102px] max-md:pt-[64px] px-5 pb-[103px] relative">
    //   <Image
    //     className="responsive-image relative object-cover hidden max-w-full z-[0] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[324px]"
    //     alt=""
    //     src="/terms&conditions/heroBg.png"
    //     height={324}
    //     width={1440}
    //   />
    //     <Image
    //       className="absolute top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden object-cover h-[200px] sm:h-[250px] md:h-[300px] lg:h-[324px]"
    //       loading="lazy"
    //       alt=""
    //       src="/terms&conditions/hero2.png"
    //       height={324}
    //       width={1440}
    //     />
    //     <div className="absolute w-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-black z-[1] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[324px]" />
    //   {/* <section className="w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
    //   </section> */}
    //   <section className="w-[935px] flex flex-col items-start justify-start gap-[10px] max-w-full z-[2] text-center">
    //     <div className="self-stretch relative font-bold md:text-[60px] max-md:text-[48px] max-sm:text-[28px] text-white">
    //       Terms and Conditions
    //     </div>
    //     <div className="self-stretch relative md:text-[28px] max-md:text-[22px] max-sm:text-[18px] text-white font-[400]">
    //       Achieve your dreams with us today
    //     </div>
    //   </section>
    // </div>
    <div className="w-full h-full overflow-hidden  ">
      <div className="w-full relative top-[0px] right-[0px] bottom-[0px] left-[0px] bg-black z-[1]">
        <section className="gap-[10px] max-w-full z-[2] text-center py-16 px-12 sm:py-24 sm:px-12 md:py-30 md:px-18 lg:py-36 lg:px-20  xl:px-[252px] xl:py-[102px]">
          <div className="self-stretch relative font-bold md:text-[60px] sm:text-[48px] max-sm:text-[28px] text-white">
            Terms and Conditions
          </div>
          <div className="self-stretch relative md:text-[28px] max-md:text-[22px] max-sm:text-[18px] text-white font-[400]">
            Achieve your dreams with us today
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
