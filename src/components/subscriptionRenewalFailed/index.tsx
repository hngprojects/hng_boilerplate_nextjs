import Image from "next/image";
import React from "react";

import Button from "../common/Button";
import { SubscriptionRenewalFailedSchema } from "./zodSchema";

interface SubscriptionRenewalFailedProperties {
  title: string;
  name: string;
  image: string;
  renewalPeriod: string;
  updatePaymentLink: string;
  faqsLink: string;
  supportEmail: string;
  unsubscribeLink: string;
}

const SubscriptionRenewalFailed: React.FC<SubscriptionRenewalFailedProperties> = (properties) => {
  const result = SubscriptionRenewalFailedSchema.safeParse(properties);
  if (!result.success) {
    console.error("Invalid props:", result.error.format());
    return;
  }

  const {
    title,
    name,
    image,
    renewalPeriod,
    updatePaymentLink,
    faqsLink,
    supportEmail,
    unsubscribeLink,
  } = result.data;

  return (
    <div className="renewal-with-icon w-full bg-white max-w-full flex flex-col items-center justify-start pt-14 px-14 pb-[53px] box-border gap-[40px] md:gap-[56px] text-left text-4xl text-[#0A0A0A] font-inter font-semibold">
      <Image
        className="renewal-with-icon-image w-[142px] h-[142px] md:w-[178px] md:h-[178px] relative overflow-hidden shrink-0 object-contain"
        loading="lazy"
        alt="Payment Error"
        src={image}
        width={500}
        height={500}
      />
      <div className="renewal-with-icon-title-container self-stretch flex flex-col items-center justify-center text-center">
        <h3 className="renewal-with-icon-title m-0 self-stretch relative text-[20px] md:text-[20px] text-[#0A0A0A] font-semibold">
          {title}
        </h3>
      </div>
      <section className="renewal-with-icon-section self-stretch flex flex-col items-center justify-center gap-[32px] max-w-full text-left text-lg text-gray-100 font-normal">
        <div className="renewal-with-icon-greeting self-stretch flex flex-col items-start justify-start">
          <div className="renewal-with-icon-greeting-text self-stretch relative text-[#111111] text-[16px] leading-normal font-semibold">
            Hi {name},
          </div>
        </div>
        <div className="renewal-with-icon-details self-stretch flex flex-col items-center justify-start gap-[28px] text-[14px] md:text-[16px] max-w-full text-base">
          <div className="renewal-with-icon-details-text self-stretch relative text-[#111111] font-normal leading-normal">
            <span>
              We are having some trouble processing your subscription renewal
              payment for your{" "}
            </span>
            <span className="renewal-with-icon-period font-semibold">
              {renewalPeriod} Features
            </span>
            <span>
              . This could be because of either of the following reasons:
            </span>
          </div>
          <div className="renewal-with-icon-reasons self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full font-normal text-[#0A0A0A]">
            <div className="renewal-with-icon-reason self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full">
              <Image
                className="renewal-with-icon-reason-icon h-6 w-6 relative"
                loading="lazy"
                alt="Reason Icon"
                src="/images/Star1.svg"
                width={500}
                height={500}
              />
              <div className="renewal-with-icon-reason-text flex-1 relative inline-block max-w-[calc(100%-40px)]">
                Your payment card has been blocked by your bank.
              </div>
            </div>
            <div className="renewal-with-icon-reason self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full">
              <Image
                className="renewal-with-icon-reason-icon h-6 w-6 relative"
                loading="lazy"
                alt="Reason Icon"
                src="/images/Star1.svg"
                width={500}
                height={500}
              />
              <div className="renewal-with-icon-reason-text flex-1 relative inline-block max-w-[calc(100%-40px)]">
                Your payment card has expired.
              </div>
            </div>
            <div className="renewal-with-icon-reason self-stretch flex flex-row items-center justify-start gap-[16px] max-w-full">
              <Image
                className="renewal-with-icon-reason-icon h-6 w-6 relative"
                loading="lazy"
                alt="Reason Icon"
                src="/images/Star1.svg"
                width={500}
                height={500}
              />
              <div className="renewal-with-icon-reason-text flex-1 relative inline-block max-w-[calc(100%-40px)]">
                You have insufficient funds in your account.
              </div>
            </div>
          </div>
          <div className="renewal-with-icon-update self-stretch relative font-normal text-[#111111]">
            To keep enjoying your {renewalPeriod} Features, please check your
            bank or update your payment details{" "}
            <a
              href={updatePaymentLink}
              className="renewal-with-icon-update-link text-[#F97316] underline"
            >
              here
            </a>
            .
          </div>
        </div>
        <a
          href={updatePaymentLink}
          className="renewal-with-icon-button-link flex self-stretch md:self-center"
        >
          <Button />
        </a>
      </section>
      <div className="renewal-with-icon-regards self-stretch flex flex-col items-start justify-center gap-[8px] text-sm text-[#111111]">
        <div className="renewal-with-icon-regards-text self-stretch relative leading-normal font-semibold">
          Regards,
        </div>
        <div className="renewal-with-icon-regards-text self-stretch relative leading-normal font-semibold">
          Boilerplate
        </div>
      </div>
      <div className="renewal-with-icon-contact self-stretch relative text-[14px] md:text-[16px] leading-normal font-normal text-[#111111]">
        <span className="renewal-with-icon-contact-text font-normal text-[#111111]">
          If you have questions, please visit our{" "}
        </span>
        <span className="renewal-with-icon-faqs-link font-semibold text-[#F97316]">
          <a href={faqsLink}>FAQs</a>
        </span>
        <span className="renewal-with-icon-contact-text font-normal text-[#111111]">
          , or email us at{" "}
        </span>
        <span className="renewal-with-icon-email-link text-[#F97316]">
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </span>
        <span className="renewal-with-icon-contact-text font-normal text-[#111111]">
          . Our team can answer questions about your subscription status. To
          unsubscribe from future subscription renewal reminders,{" "}
        </span>
        <span className="renewal-with-icon-unsubscribe-link underline cursor-pointer font-semibold">
          <a href={unsubscribeLink}>click here</a>
        </span>
        <span className="renewal-with-icon-contact-text font-normal text-[#111111]">
          .
        </span>
      </div>
    </div>
  );
};

export default SubscriptionRenewalFailed;
