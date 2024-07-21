"use client";

import Image from "next/image";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HeroBoilerPlate, HeroChat, HeroCheckMark } from "./svgs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-2 text-4xl font-bold leading-snug md:text-5xl lg:text-6xl lg:leading-tight">
              {`Focus on What Matters. We've Got the Foundation Covered.`}
            </h1>

            <div className="">
              <Image
                src="/images/hero-line.svg"
                width={100}
                height={100}
                className="w-full"
                alt=""
              />
            </div>

            <p className="mb-8 mt-5 text-lg text-foreground md:mb-12 md:mt-7 md:text-xl">
              Streamline your processes with a boilerplate built for efficiency
              and optimal productivity.
            </p>

            <button className="rounded bg-primary px-8 py-4 text-background">
              Get Started
            </button>
          </div>

          <div className="mt-14 flex w-full justify-end rounded-lg lg:mt-0 lg:w-1/2">
            <div className="relative w-full rounded-lg sm:w-[90%] md:h-[300px] md:w-[95%] lg:h-[526px] lg:w-[418px]">
              <div
                data-testid="hero-checkmark"
                className="absolute top-1/3 z-10 -translate-y-1/2 transform sm:left-[-2.2rem] md:left-[-3.5rem]"
              >
                <HeroCheckMark />
              </div>

              <div
                data-testid="hero-chat"
                className="absolute bottom-[-1.25rem] right-8 z-20"
              >
                <HeroChat />
              </div>

              <div
                data-testid="hero-boilerplate"
                className="absolute bottom-8 z-30 sm:left-[-0.75rem] md:left-[-3.75rem]"
              >
                <HeroBoilerPlate />
              </div>

              <Swiper
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={1}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={4000}
                data-testid="swiper"
              >
                <SwiperSlide>
                  <Image
                    src="/images/hero-image.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="h-[300px] w-full object-cover lg:h-[526px] lg:object-contain"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="h-[300px] w-full object-cover lg:h-[526px] lg:object-contain"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="h-[300px] w-full object-cover lg:h-[526px] lg:object-contain"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="h-[300px] w-full object-cover lg:h-[526px] lg:object-contain"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
