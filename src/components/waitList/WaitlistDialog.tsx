"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const WaitlistDialog: React.FC = () => {
  const t = useTranslations("waitlist.features");

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-[20px] flex flex-col items-center justify-center gap-[20px] text-neutral-dark-2 md:mt-[60px] md:flex-row md:gap-[57px]">
        <div className="flex w-[320px] shrink-0 flex-col items-start rounded-[8px] border-[1px] border-neutral-dark-1 p-[24px] transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
          <div className="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-full bg-primary">
            <Image
              src="/images/WaitList/Vector.svg"
              alt="Vector"
              width="25"
              height="25"
            />
          </div>
          <h1 className="mt-[12px] text-[18px] font-semibold leading-[28px]">
            {t("customization.title")}
          </h1>
          <p className="w-[252px] text-[14px] font-normal leading-[20px]">
            {t("customization.description")}
          </p>
        </div>
        <div className="flex w-[320px] shrink-0 flex-col items-start rounded-[8px] border-[1px] border-neutral-dark-1 p-[24px] transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
          <div className="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-full bg-primary">
            <Image
              src="/images/WaitList/pie-chart2.svg"
              alt="Pie-Chart"
              width="30"
              height="30"
            />
          </div>
          <h1 className="mt-[12px] text-[18px] font-semibold leading-[28px]">
            {t("scalable.title")}
          </h1>
          <p className="w-[252px] text-[14px] font-normal leading-[20px]">
            {t("scalable.description")}
          </p>
        </div>
        <div className="flex w-[320px] shrink-0 flex-col items-start rounded-[8px] border-[1px] border-neutral-dark-1 p-[24px] transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg">
          <div className="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-full bg-primary">
            <Image
              src="/images/WaitList/activity 2.svg"
              alt="activity"
              width="30"
              height="36"
            />
          </div>
          <h1 className="mt-[12px] text-[18px] font-semibold leading-[28px]">
            {t("prebuilt.title")}
          </h1>
          <p className="w-[252px] text-[14px] font-normal leading-[20px]">
            {t("prebuilt.description")}
          </p>
        </div>
      </div>
      <div className="mt-[24px] flex h-[72px] w-fit items-center justify-around gap-4 rounded-[12px] border-[1px] border-primary px-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex gap-[-16px]">
          <div className="boorder-white h-[40px] w-[40px] rounded-full border-[1px] bg-slate-200"></div>
          <div className="boorder-white ml-[-16px] h-[40px] w-[40px] rounded-full border-[1px] bg-pink-300"></div>
          <div className="boorder-white ml-[-16px] h-[40px] w-[40px] rounded-full border-[1px] bg-pink-100"></div>
          <div className="boorder-white ml-[-16px] h-[40px] w-[40px] rounded-full border-[1px] bg-gray-300"></div>
        </div>
        <div>
          <p className="text-[12px] text-neutral-dark-1">
            {t("teamSupport.title")}
          </p>
          <h1 className="text-[16px] font-bold">
            {t("teamSupport.description")}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WaitlistDialog;
