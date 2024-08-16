"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const OurServices = () => {
  const t = useTranslations("ourServices");
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="mb-10 w-full md:pr-10 lg:w-3/5 lg:pr-20">
          <h3 className="mb-2 text-lg font-[600] text-primary sm:text-xl">
            {t("title")}
          </h3>

          <p className="relative w-full text-[30px] font-[600] leading-[34px] text-neutral-600 sm:w-[400px] sm:text-[36px] sm:leading-[42px] md:w-[400px] md:text-[40px] md:leading-[50px]">
            {t("description")}
            <span>
              <Image
                src="/images/about-us/ellipse.svg"
                alt="eclipse"
                width={100}
                height={15}
                className="absolute left-[80px] top-[35px] hidden max-sm:w-[50px] sm:top-[40px] sm:flex md:left-[90px] md:top-[45px]"
              />
            </span>
          </p>
        </div>

        <div className="items-start lg:w-2/3">
          <p className="text-[16px] leading-[30px] text-neutral-600 sm:text-[18px] sm:leading-[32px] md:leading-[35px]">
            {t("details")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
