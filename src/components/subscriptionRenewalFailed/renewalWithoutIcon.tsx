import React from "react";
import Button from "../common/Button";

export default function RenewalWithoutIcon() {
  return (
    <div>
      <div className="w-full bg-white max-w-full flex flex-col items-center justify-start pt-14 px-14 pb-[53px] box-border gap-[40px] md:gap-[56px] leading-[normal] tracking-[normal] text-left text-4xl text-[#0A0A0A] font-semibold">
        <div className="self-stretch flex flex-col items-center justify-center text-center">
          <h3 className="m-0 self-stretch relative text-[20px] md:text-[20px] text-[#0A0A0A] font-semibold leading-normal mq450:text-lgi">
            Subscription Renewal Failed
          </h3>
        </div>
        <section className="self-stretch flex flex-col items-center justify-center gap-[32px] max-w-full text-left text-lg text-gray-100 font-body-medium-small mq675:gap-[16px]">
          <div className="self-stretch flex flex-col items-start justify-start mq675:gap-[16px]">
            <div className="self-stretch relative text-[#111111] text-[16px] leading-normal font-semibold">
              Hi John Doe,
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[28px] text-[14px] md:text-[16px] max-w-full text-base">
            <div className="self-stretch relative text-[#111111] font-normal leading-normal ">
              <span>We are having some trouble processing your subscription renewal payment for your </span>
              <span className="font-semibold">Bi-monthly Features</span>
              <span className="font-normal">
                . This could be because of either of the following reasons:
              </span>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full font-normal text-[#0A0A0A]">
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/images/Star1.svg"
                />
                <div className="flex-1 relative inline-block max-w-[calc(100%_-_40px)]">
                  Your payment card has been blocked by your bank.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/images/Star1.svg"
                />
                <div className="flex-1 relative inline-block max-w-[calc(100%_-_40px)]">
                  Your payment card has expired.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full">
                <img
                  className="h-6 w-6 relative"
                  loading="lazy"
                  alt=""
                  src="/images/Star1.svg"
                />
                <div className="flex-1 relative inline-block max-w-[calc(100%_-_40px)]">
                  You have insufficient funds in your account.
                </div>
              </div>
            </div>
            <div className="self-stretch relative font-normal text-[#111111]">
              To keep enjoying your Bi-monthly Features, please check your bank
              or update your payment details.
            </div>
          </div>

          <Button />

        </section>
        <div className="self-stretch flex flex-col items-start justify-center gap-[8px] text-sm text-[#111111]">
          <div className="self-stretch relative leading-normal font-medium">Regards,</div>
          <div className="self-stretch relative leading-normal font-medium">Boilerplate</div>
        </div>
        <div className="self-stretch relative text-[14px] md:text-[16px] leading-normal font-normal text-[#111111]">
          <span className="font-body-medium-small text-[#111111]">If you have questions, please visit our </span>
          <span className="font-semibold font-body-medium-small text-[#F97316]">
            FAQs
          </span>
          <span className="font-body-medium-small">
            <span className="text-[#111111]">, or email us at </span>
            <span className="text-[#F97316]">
              help@boilerplate.com
            </span>
            <span>. Our team can answer questions about your subscription status. To unsubscribe from future subscription renewal reminders, </span>
          </span>
          <span>
            <span className="underline cursor-pointer font-semibold">
              click here
            </span>
            <span className="font-normal">.</span>
          </span>
        </div>
      </div>
    </div>
  );
}
