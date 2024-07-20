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
    <div className="hero bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10">
        <div className="hero-content">
          <div className="hero-left">
            <h1>
              {`Focus on What Matters. We've Got the Foundation Covered`}.
            </h1>

            <div>
              <HeroLine />
            </div>

            <p className="text-foreground">
              Streamline your processes with a boilerplate built for efficiency
              and optimal productivity.
            </p>

            <button className="get-started bg-primary text-background">
              Get Started
            </button>
          </div>

          <div className="hero-right">
            <div className="image-container">
              <div data-testid="hero-checkmark" className="hero-checkmark">
                <HeroCheckMark />
              </div>

              <div data-testid="hero-chat" className="hero-chat">
                <HeroChat />
              </div>

              <div data-testid="hero-boilerplate" className="hero-boilerplate">
                <HeroBoilerPlate />
              </div>

              <Swiper
                modules={[Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={1}
                slidesPerView={1}
                // onSwiper={(swiper) => console.log("")}
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
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/images/hero-image.svg"
                    alt="Hero Image"
                    width={100}
                    height={100}
                    unoptimized
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
