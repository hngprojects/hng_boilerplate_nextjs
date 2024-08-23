"use client";

import { useTranslations } from "next-intl";
import React from "react";

import CustomButton from "~/components/common/common-button/common-button";

const scrollToForm = () => {
  const formElement = document.querySelector("#waitlist-form");
  if (formElement) {
    formElement.scrollIntoView({ behavior: "smooth" });
  }
};

const WaitlistJoin: React.FC = () => {
  const t = useTranslations("waitlist");

  return (
    <div className="mt-[10px] flex flex-col items-center justify-center text-neutral-dark-2 md:mt-[10px]">
      <div className="mb-[10px] rounded-md bg-slate-200 px-3 text-[20px] font-normal">
        waitlist
      </div>
      <div className="mt-[10px] flex h-auto w-[322px] flex-col items-center justify-center text-center md:mt-[25px] md:w-[1104px] md:gap-[15px]">
        <h1 className="text-[32px] font-bold leading-[38.73px] md:text-[60px] md:leading-[72.61px]">
          {t("hero.title")}{" "}
          <span className="text-primary">{t("hero.titleHighlight")}</span>
        </h1>
        <p className="text-16px leading-bormal mt-[12px] w-[322px] font-normal md:mt-0 md:w-[802px] md:text-[28px]">
          {t("hero.description")}
        </p>
      </div>
      <div className="mt-[20px] h-[54px] w-[322px] text-center font-semibold leading-[28px] md:mt-[30px] md:h-[28px] md:w-[584px]">
        <p className="text-[20px]">
          {t("hero.discount")}{" "}
          <span className="text-primary">{t("hero.discountHighlight")}</span>{" "}
        </p>
      </div>
      <div className="mt-[5px] flex items-center gap-4 p-8 md:mt-[20px]">
        <CustomButton
          className="p-6 text-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          onClick={scrollToForm}
        >
          {t("hero.joinButton")}
        </CustomButton>
      </div>
    </div>
  );
};

export default WaitlistJoin;
