"use client";

import Image from "next/image";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroBoilerPlate, HeroChat, HeroCheckMark, HeroLine } from "./svgs";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Hero = () => {
  return (
    <div className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-2 leading-snug md:leading-tight">
              Focus on What Matters. We've Got the Foundation Covered.
            </h1>

            <div>
              <HeroLine />
            </div>

            <p className="text-lg md:text-xl text-foreground mt-7 mb-12">
              Streamline your processes with a boilerplate built for efficiency
              and optimal productivity.
            </p>

            <button className="px-8 py-4 bg-primary text-background rounded">
              Get Started
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end mt-14 lg:mt-0 rounded-lg">
            <div className="bg-primary relative md:h-[300px] lg:h-[526px] lg:w-[418px] w-[90%] md:w-[95%] rounded-lg">
              <div data-testid="hero-checkmark" className="absolute left-[-3.5rem] top-1/3 transform -translate-y-1/2 z-10">
                <HeroCheckMark />
              </div>

              <div data-testid="hero-chat" className="absolute right-8 bottom-[-1.25rem] z-20">
                <HeroChat />
              </div>

              <div data-testid="hero-boilerplate" className="absolute left-[-3.75rem] bottom-8 z-30">
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
                    className="lg:object-contain w-full h-[300px] lg:h-[526px] object-cover"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="lg:object-contain w-full h-[300px] lg:h-[526px] object-cover"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="lg:object-contain w-full h-[300px] lg:h-[526px] object-cover"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                    className="lg:object-contain w-full h-[300px] lg:h-[526px] object-cover"
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
