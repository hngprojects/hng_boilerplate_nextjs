"use client";

import Image from "next/image";
import React, { useState } from "react";

import check from "../../../public/public/check.svg";
import icon from "../../../public/public/icon.svg";
import CustomButton from "./Button/button";

const PriceCard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const upgradePlan = async (plan: string) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(`Upgrading to ${plan} plan`);
    } catch (error) {
      console.error("Error upgrading plan:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="pb-24">
        <div className="mt-4">
          <h1 className="ml-5 font-sans text-2xl font-semibold">
            Current Plan
          </h1>

          <section className="rounded- mt-6 flex items-center self-stretch bg-[#FFF8F2] pb-[1.375rem] pl-[1.0625rem] pr-[5.875rem] pt-[1.5rem]">
            <div className="flex flex-col items-start gap-2 self-stretch">
              <p className="font-sans text-xl font-semibold">Free</p>

              <p className="font-sans text-sm font-normal">
                Your account is on a free 90-day trial of our free plan, through
                September 27th. Upgrade anytime to stay on this plan when your
                trial ends.
              </p>

              <p className="font-sans text-sm font-normal text-neutral-dark-2">
                $0/month
              </p>
            </div>
          </section>
        </div>

        {/* The plans */}
        <div className="lg: my-6 flex w-full flex-col items-start justify-start overflow-x-scroll pb-12 lg:overflow-hidden">
          <div className="flex items-start justify-start">
            <p className="ml-6 w-40 font-sans text-base font-semibold leading-normal">
              Subscribe to your desired plan
            </p>

            {/* The price cards */}
            <div className="lg:gap-18 inline-flex items-center gap-2 xl:gap-20 2xl:gap-36">
              {/* Free */}
              <div className="flex h-56 w-52 flex-1 flex-col items-start justify-start gap-7 rounded-xl px-6 py-4">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <p className="font-sans text-base font-semibold leading-5">
                    Free
                  </p>

                  <p className="font-sans text-2xl font-medium leading-relaxed">
                    $0
                    <span className="font-sans text-[0.8125rem] font-normal leading-normal text-neutral-dark-1">
                      /month
                    </span>
                  </p>

                  <p className="h-16 font-sans text-sm font-normal leading-normal">
                    The essential to provide your best work for clients.
                  </p>
                </div>

                <CustomButton
                  variant="primary"
                  size="lg"
                  onClick={() => upgradePlan("Free")}
                  isDisabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Get Free"}
                </CustomButton>

                <ul className="z-10 mt-12 flex h-[5.6875rem] w-40 list-disc flex-col items-start gap-4">
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    10 Projects
                  </li>
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    Up to 10 subscribers
                  </li>
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    Advanced analytics
                  </li>
                </ul>
              </div>

              {/* Basic */}
              <div className="flex h-56 w-52 flex-1 flex-col items-start justify-start gap-6 rounded-xl px-[1.3125rem] py-[0.935rem]">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <p className="font-sans text-base font-semibold leading-5">
                    Basic
                  </p>

                  <p className="font-sans text-2xl font-medium leading-7">
                    $20
                    <span className="font-sans text-[0.8125rem] font-normal leading-normal text-[#525252]">
                      /month
                    </span>
                  </p>

                  <p className="h-16 font-sans text-sm font-normal leading-normal">
                    Ideal for growing needs who want more features.
                  </p>
                </div>

                <CustomButton
                  variant="primary"
                  size="lg"
                  onClick={() => upgradePlan("Basic")}
                  isDisabled={isLoading}
                  ariaLabel="upgrade-button-1"
                >
                  {isLoading ? "Loading..." : "Upgrade"}
                </CustomButton>

                <ul className="z-10 mt-12 flex h-[5.6875rem] w-[9.1875rem] list-disc flex-col items-start gap-4">
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    100 Projects
                  </li>
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    Up to 50 subscribers
                  </li>
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    Advanced analytics
                  </li>

                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    24-hour support
                  </li>
                </ul>
              </div>

              {/* Advanced */}
              <div className="flex h-[13.875rem] w-[12.625rem] flex-1 flex-col items-start justify-start gap-6 rounded-xl px-6 py-4">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <p className="font-sans text-base font-semibold leading-5">
                    Advanced
                  </p>

                  <p className="font-sans text-2xl font-medium leading-relaxed">
                    $50
                    <span className="font-sans text-[0.8125rem] font-normal leading-normal text-[#525252]">
                      /month
                    </span>
                  </p>

                  <p className="h-16 w-32 font-sans text-sm font-normal leading-normal">
                    Designed for power users and maximum functionalities.
                  </p>
                </div>

                <CustomButton
                  variant="primary"
                  size="lg"
                  onClick={() => upgradePlan("Advanced")}
                  isDisabled={isLoading}
                  ariaLabel="upgrade-button-2"
                >
                  {isLoading ? "Loading..." : "Upgrade"}
                </CustomButton>

                <ul className="z-10 mt-12 flex h-24 w-36 list-disc flex-col items-start gap-4">
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    200 Projects
                  </li>
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    Up to 100 subscribers
                  </li>
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    Advanced analytics
                  </li>

                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    24-hour support
                  </li>

                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    Marketing advisor
                  </li>
                </ul>
              </div>

              {/* Premium */}
              <div className="flex h-[13.875rem] w-[12.625rem] flex-1 flex-col items-start justify-start gap-5 rounded-xl px-6 py-4">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <p className="font-sans text-base font-semibold leading-5">
                    Premium
                  </p>

                  <p className="font-sans text-2xl font-medium leading-relaxed">
                    $100
                    <span className="font-sans text-[0.8125rem] font-normal leading-normal text-[#525252]">
                      /month
                    </span>
                  </p>

                  <p className="h-16 font-sans text-sm font-normal leading-normal">
                    Perfect for users who want more features.
                  </p>
                </div>

                <CustomButton
                  variant="primary"
                  size="lg"
                  onClick={() => upgradePlan("Premium")}
                  isDisabled={isLoading}
                  ariaLabel="upgrade-button-3"
                >
                  {isLoading ? "Loading..." : "Upgrade"}
                </CustomButton>

                <ul className="z-10 mt-12 flex h-24 w-40 list-disc flex-col items-start gap-4">
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    300 Projects
                  </li>
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    Up to 500 subscribers
                  </li>
                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    Advanced analytics
                  </li>

                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    24-hour support
                  </li>

                  <li className="font-sans text-sm font-normal leading-normal text-neutral-dark-2">
                    Marketing advisor
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Features */}
          <div className="mt-7 flex h-96 w-[1000px] flex-row items-start justify-start self-stretch rounded-xl bg-[#FFF8F2] pb-24 pl-4 pr-3 pt-5 lg:w-full">
            {/* The content div */}
            <div className="flex h-48 w-full flex-row items-start justify-start gap-16">
              <p className="mr-14 font-sans text-base font-semibold leading-normal">
                Highlights
              </p>
            </div>
          </div>
        </div>

        {/* Compare Toggle */}
        <button
          className="mx-auto flex w-48 cursor-pointer items-center justify-center gap-1 text-neutral-dark-2"
          onClick={toggleVisibility}
        >
          <p className="font-sans text-base font-semibold leading-normal">
            Compare all features
          </p>
          <Image
            src={icon}
            alt="down arrow"
            width={10}
            height={10}
            className={`transition-transform duration-300 ${isVisible ? "rotate-180" : ""}`}
          />
        </button>

        {/* The Tables */}
        {/* First Table */}
        {isVisible && (
          <>
            <div className="grid grid-cols-5 grid-rows-5">
              <div className="col-span-5 flex h-20 w-full items-center gap-3 bg-[#FFF8F2] pb-7 pl-3 pr-10 pt-7">
                <p className="font-sans text-base font-bold leading-normal text-neutral-dark-2">
                  Project Management
                </p>
              </div>
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Project
              </div>

              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Up to 5
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Up to 5
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Up to 5
              </div>
              <div className="flex items-center border-y pr-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Unlimited
              </div>
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                File Upload
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                10gb
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                20gb
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                50gb
              </div>
              <div className="flex items-center border-y pr-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Unlimited
              </div>
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                User Account
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                1
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                10
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                50
              </div>
              <div className="flex items-center border-y pr-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Unlimited
              </div>

              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Teams
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                1
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Unlimited
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Unlimited
              </div>
              <div className="flex items-center border-y pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Unlimited
              </div>
            </div>

            <div className="grid grid-cols-5 grid-rows-5">
              <div className="col-span-5 flex h-20 w-full items-center gap-3 bg-[#FFF8F2] pb-7 pl-3 pr-10 pt-7">
                <p className="font-sans text-base font-bold leading-normal text-neutral-dark-2">
                  Sharing and collaboration
                </p>
              </div>
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Integration
              </div>

              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              {/* Second row */}
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Guest Access
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              {/* Third row */}
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Page Analysis
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              {/* Fourth row */}
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Task Mangement
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
            </div>

            <div className="grid grid-cols-5 grid-rows-4">
              <div className="col-span-5 flex h-20 w-full items-center gap-3 bg-[#FFF8F2] pb-7 pl-3 pr-10 pt-7">
                <p className="font-sans text-base font-bold leading-normal text-neutral-dark-2">
                  Management and security
                </p>
              </div>
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Team Security
              </div>

              <div className="flex items-center justify-center border-y"></div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              {/* Second row */}
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Data Backup
              </div>
              <div className="flex items-center justify-center border-y"></div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              {/* Third row */}
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                HIPAA Compliance
              </div>
              <div className="flex items-center justify-center border-y"></div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
            </div>

            <div className="grid grid-cols-5 grid-rows-3">
              <div className="col-span-5 flex h-20 w-full items-center gap-3 bg-[#FFF8F2] pb-7 pl-3 pr-10 pt-7">
                <p className="font-sans text-base font-bold leading-normal text-neutral-dark-2">
                  Support
                </p>
              </div>
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Priority Support
              </div>

              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              {/* Second row */}
              <div className="flex items-center border-y border-l pl-2 font-sans text-sm font-normal leading-5 text-neutral-dark-2 sm:text-base">
                Customer Support
              </div>
              <div className="flex items-center justify-center border-y"></div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
              <div className="flex items-center justify-center border-y sm:justify-start">
                <Image src={check} alt="checkmark" width={20} />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PriceCard;
