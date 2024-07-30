"use client";

import Image from "next/image";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Dialog, DialogContent } from "~/components/ui/dialog";

import { HeroBoilerPlate, HeroChat, HeroCheckMark } from "./svgs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Link from "next/link";

const Hero = () => {
  return (
    <>
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full text-center sm:text-left lg:w-1/2">
            <h1 className="mb-2 text-4xl font-bold leading-snug lg:text-5xl lg:leading-tight xl:text-6xl">
              {`Focus on What Matters. We've Got the Foundation Covered.`}
            </h1>

            <div className="">
              <Image
                src="/images/hero-line.svg"
                width={100}
                height={100}
                className="h-[50px] w-full"
                alt=""
              />
            </div>

            <p className="mb-8 mt-5 text-lg text-foreground md:mb-12 md:mt-7 md:text-xl">
              Streamline your processes with a boilerplate built for efficiency
              and optimal productivity.
            </p>

            <Link
              href="/register"
              className="rounded bg-primary px-8 py-4 text-background"
              data-testid="get-started"
            >
              Get Started
            </Link>
          </div>

          <div className="mt-14 flex w-full justify-end rounded-lg lg:mt-0 lg:w-1/2">
            <div className="relative w-full rounded-lg bg-subtle sm:w-[90%] md:h-[300px] md:w-[95%] lg:h-[526px] lg:w-[418px]">
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
                    src="/images/hero-image2.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="h-[300px] w-full object-cover lg:h-[526px] lg:object-contain"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image3.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="h-[300px] w-full object-cover lg:h-[526px] lg:object-contain"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image4.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="h-[300px] w-full object-cover lg:h-[526px] lg:object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/hero-image5.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="h-[300px] w-full object-cover lg:h-[526px] lg:object-contain"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/hero-image6.svg"
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
    <div className="fixed flex flex-col bottom-0 px-5 md:px-10 py-[20px] md:py-[40px] h-[200px] md:h-[208px] bg-[#FAFAFA] w-full z-40">
      <div className="block md:flex items-end justify-between gap-x-[20px] gap-y-[16px] md:justify-between">
      <div className="flex flex-col gap-y-[16px]">
      <p className="font-semibold text-[14px] md:text-[20px]">We value your privacy</p>
        <p className="text-[12px] md:text-[16px]">Our website uses cookies to enhance your browsing experience, provide<br /> personalized content. By clicking "Accept All" you consent to our use of cookies.</p>
        </div>
        <div className="flex flex-wrap gap-x-[36px] gap-y-[8px] text-[14px] mt-[16px] md:mt-0">
          <button className="text-[14px] rounded-[6px] px-[16px] py-[8px] border border-[#F97316] bg-[#FAFAFA] text-[#F97316]">Cookies Settings</button>
          <button className="text-[14px] rounded-[6px] px-[16px] py-[8px] bg-[#F97316] text-[#FAFAFA]">Reject All</button>
          <button className="text-[14px] rounded-[6px] px-[16px] py-[8px] bg-[#F97316] text-[#FAFAFA]">Accept All Cookies</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hero;
