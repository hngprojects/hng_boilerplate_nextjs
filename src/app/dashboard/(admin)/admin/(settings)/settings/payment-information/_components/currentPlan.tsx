import Link from "next/link";

import desiredPlan, { highLightMobile, highlights } from "../dataJSON";

const CurrentPlan = () => {
  return (
    <div className="mx-auto w-full max-w-[1047px] px-5 py-3">
      <h2 className="font-Inter text-[24px] font-semibold leading-normal">
        Current plan
      </h2>
      <div className="font-Inter mt-[24px] w-full">
        <div className="flex flex-col gap-2 rounded-[12px] bg-[#FFF8F2] px-4 py-2">
          <h4 className="text-[20px] font-semibold leading-normal text-neutral-dark-2">
            Free
          </h4>
          <p className="text-[13px] leading-[15.6px] text-neutral-dark-2">
            Your account is on a free 90-day trial of our free plan, //
            eslint-disable-next-line no-irregular-whitespace through September
            27th. Upgrade anytime to stay on this plan when your trial ends.
          </p>
          <p className="text-[13px] leading-[15.6px] text-neutral-dark-1">
            $0/month
          </p>
        </div>

        {/* LARGE SCREEN SIZE VIEW */}
        {/* desired plans */}
        <div className="mt-[24px] hidden md:block">
          <div className="hidden justify-start min-[820px]:flex">
            <div className="hidden w-[152px] py-[15px] lg:flex">
              <h4 className="font-Inter hidden text-[16px] font-semibold leading-[19.36px] lg:block">
                Subscribe to your desired plan
              </h4>
            </div>

            <article className="grid w-full grid-cols-1 justify-start gap-2 text-neutral-dark-2 min-[820px]:grid-cols-2 lg:grid-cols-3 min-[1150px]:grid-cols-4">
              {desiredPlan.map((items, index) => {
                const { id, type, amount, desc, buttonText } = items;

                return (
                  <div
                    key={id}
                    className="flex h-[222px] flex-col justify-between rounded-[12px] px-[21px] py-[15px]"
                  >
                    <h5 className="font-Inter text-[25px] font-medium capitalize leading-[30px]">
                      {type}
                    </h5>
                    <h2 className="font-Inter text-[16px] font-semibold leading-[19.36px]">
                      ${amount}{" "}
                      <sub className="text-[13px] font-normal leading-[23.4px] text-neutral-dark-1">
                        /month
                      </sub>
                    </h2>
                    <small className="font-Inter text-[10px] leading-[14px] text-neutral-dark-1 lg:text-[14px] lg:leading-[16.94px]">
                      {desc}
                    </small>
                    {index === 0 ? (
                      <span
                        className={`${buttonText.includes("current") ? "bg-[#FDEEE3] text-neutral-dark-1" : "bg-[#F97316] text-white"} cursor-not-allowed whitespace-nowrap rounded-[6px] py-[8px] text-center capitalize opacity-50`}
                      >
                        {buttonText}
                      </span>
                    ) : (
                      <Link
                        href={`/dashboard/admin/settings/payment-information/${id}`}
                        className={`${buttonText.includes("current") ? "bg-[#FDEEE3] text-neutral-dark-1" : "bg-[#F97316] text-white"} whitespace-nowrap rounded-[6px] py-[8px] text-center capitalize`}
                      >
                        {buttonText}
                      </Link>
                    )}
                  </div>
                );
              })}
            </article>
          </div>

          {/* Highlight */}
          <div className="mt-[24px] flex flex-col rounded-[12px] bg-[#FFF8F2] px-2 lg:flex-row lg:items-start">
            <div className="hidden py-[15px] lg:block">
              <h2 className="font-Inter text-[16px] font-semibold leading-[19.36px]">
                Highlights
              </h2>
            </div>
            <article className="hidden w-full grid-cols-1 justify-start gap-2 !pb-16 text-neutral-dark-2 max-[820px]:mt-[24px] md:grid-cols-2 lg:grid lg:grid-cols-3 min-[1200px]:grid-cols-4">
              {highlights.map((items) => {
                const { id, elArr } = items;
                return (
                  <ul
                    className="flex flex-col rounded-[12px] px-[21px] py-[15px]"
                    key={id}
                  >
                    {elArr.map((item, index) => {
                      return (
                        <li
                          key={index + 1}
                          className="mt-3 list-disc whitespace-nowrap text-[10px] leading-[14px] first-of-type:!mt-0 lg:text-[14px] lg:leading-[16.94px]"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
            </article>
          </div>
        </div>
        {/* LARGE SCREEN SIZE END */}

        {/* MOBILE SCREEN SIZE VIEW */}
        <div className="font-Inter flex w-full flex-col items-center min-[820px]:hidden">
          {highLightMobile.map((items, index) => {
            const { id, type, buttonText, desc, elArr, amount } = items;
            return (
              <div
                className={`${buttonText.includes("current") ? "border-[0.5px] border-solid border-[#F97316B2]" : "bg-[#FFF8F2]"} mt-8 flex w-[70%] flex-col gap-6 rounded-[10px] pb-[30px] pl-[40px] pr-[60px] pt-[20px]`}
                key={id}
              >
                <div className="flex flex-col gap-2">
                  <h4 className="font-Inter text-[16px] font-semibold capitalize leading-[19.2px] text-neutral-dark-2">
                    {type}
                  </h4>
                  <h1 className="text-[20px] leading-[30px] text-neutral-dark-2">
                    ${amount}
                    <sub className="text-[13px] leading-[23.4px] text-neutral-dark-1">
                      /month
                    </sub>
                  </h1>
                  <small className="font-Inter text-[10px] leading-[14px] text-neutral-dark-1 lg:text-[14px] lg:leading-[16px]">
                    {desc}
                  </small>
                </div>

                <ul className="list-inside text-neutral-dark-2">
                  {elArr.map((item, index_) => (
                    <li
                      key={index_ + 1}
                      className="mt-2 list-disc whitespace-nowrap text-[10px] leading-[14px] first-of-type:!mt-0 lg:text-[14px] lg:leading-[16.94px]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {index === 0 ? (
                  <span
                    className={`${buttonText.includes("current") ? "bg-[#FDEEE3] text-neutral-dark-1" : "bg-[#F97316] text-white"} cursor-not-allowed whitespace-nowrap rounded-[6px] py-[8px] text-center capitalize`}
                  >
                    {buttonText}
                  </span>
                ) : (
                  <Link
                    href={`/dashboard/admin/settings/payment-information/${id}`}
                    className={`${buttonText.includes("current") ? "bg-[#FDEEE3] text-neutral-dark-1" : "bg-[#F97316] text-white"} whitespace-nowrap rounded-[6px] py-[8px] text-center capitalize`}
                  >
                    {buttonText}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* MOBILE SCREEN SIZE VIEW END*/}
      </div>
    </div>
  );
};
export default CurrentPlan;
