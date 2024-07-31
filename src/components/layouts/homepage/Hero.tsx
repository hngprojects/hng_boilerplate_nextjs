"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { A11y, Autoplay, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";
import { HeroBoilerPlate, HeroChat, HeroCheckMark } from "./svgs";
import Switcher from "./switcher";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Link from "next/link";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full text-center sm:text-left lg:w-1/2">
            <h1 className="mb-2 text-4xl font-bold leading-snug lg:text-5xl lg:leading-tight xl:text-6xl">
              Focus on What Matters. We&apos;ve Got the Foundation Covered.
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

  const handleRejectAll = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-[16px] lg:px-[120px]">
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
                Streamline your processes with a boilerplate built for
                efficiency and optimal productivity.
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

      {isVisible && (
        <div className="fixed bottom-0 z-40 flex w-full flex-col bg-[#FAFAFA] px-[24px] py-[20px] md:h-[208px] lg:px-[100px] lg:py-[40px]">
          <div className="flex flex-col items-start justify-normal gap-y-[16px] md:flex-row md:items-end md:justify-between md:gap-x-[20px]">
            <div className="flex flex-col gap-y-[16px]">
              <p className="text-[14px] font-semibold md:text-[20px]">
                We value your privacy
              </p>
              <p className="text-[12px] md:text-[16px]">
                Our website uses cookies to enhance your browsing experience,
                provide
                <br />
                personalized content. By clicking &quot;Accept All&quot; you
                consent to our use of cookies.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap items-start gap-4 md:mt-0 md:flex-row md:items-end">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="order-3 rounded-[6px] border border-[#F97316] bg-[#FAFAFA] px-[16px] py-[8px] text-[14px] text-[#F97316] md:order-1">
                    Cookies Settings
                  </button>
                </DialogTrigger>
                <DialogContent className="w-[350px] rounded-[20px] p-[40px] md:w-[645px]">
                  <div className="flex flex-col gap-y-[5px]">
                    <h2 className="text-[24px] font-bold">Customize cookies</h2>
                    <p className="mt-2 text-sm font-light">
                      Cookies are small text files that are stored on your
                      device when you visit websites. They are used to remember
                      information about you, such as your login details,
                      preferences, and browsing history. Cookies help enhance
                      your actions and preferences over time, ensuring that you
                      don&apos;st have to re-enter information each time you
                      visit a site. Read our{" "}
                      <span className="text-[#F97316] underline">
                        <Link href={"/privacy-policy"}>Privacy Policy</Link>
                      </span>{" "}
                      for more details
                    </p>
                    <div className="flex items-center gap-x-[45px] py-[16px]">
                      <p className="text-[16px] md:text-[18px]">
                        Strictly necessary
                      </p>
                      <ChevronDown />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-[17px] py-[16px]">
                        <p className="text-[16px] md:text-[18px]">
                          Performance cookies
                        </p>
                        <ChevronDown />
                      </div>
                      <Switcher />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-[18px] py-[16px]">
                        <p className="text-[16px] md:text-[18px]">
                          Functionality cookies
                        </p>
                        <ChevronDown />
                      </div>
                      <Switcher />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-[43px] py-[16px]">
                        <p className="text-[16px] md:text-[18px]">
                          Targeting Cookies
                        </p>
                        <ChevronDown />
                      </div>
                      <Switcher />
                    </div>
                    <DialogClose asChild>
                      <div className="flex justify-end">
                        <button
                          className="mt-4 rounded-[6px] bg-[#F97316] px-[16px] py-[8px] text-[#FAFAFA]"
                          onClick={handleRejectAll}
                        >
                          Save & Accept
                        </button>
                      </div>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
              <button
                className="order-2 rounded-[6px] bg-[#F97316] px-[16px] py-[8px] text-[14px] text-[#FAFAFA] md:order-2"
                onClick={handleRejectAll}
              >
                Reject All
              </button>
              <button
                className="order-1 rounded-[6px] bg-[#F97316] px-[16px] py-[8px] text-[14px] text-[#FAFAFA] md:order-3"
                onClick={handleAcceptAll}
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
