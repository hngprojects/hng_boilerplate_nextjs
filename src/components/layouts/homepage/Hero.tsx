"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HeroBoilerPlate, HeroChat, HeroCheckMark } from "./svgs";

const Hero = () => {
  const t = useTranslations("hero");

  //

  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full text-center sm:text-left lg:w-1/2">
            <h1 className="mb-2 text-4xl font-bold leading-snug lg:mr-20 lg:text-[50px] lg:leading-tight">
              {t("headline")}
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
              {t("description")}
            </p>

            <Link
              href="/register"
              className="rounded bg-primary px-8 py-4 text-background hover:bg-destructive"
              data-testid="get-started"
            >
              {t("cta")}
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
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}
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
  );
};

export default Hero;
