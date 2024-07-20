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

const SubscriptionRenewalFailed: React.FC<
  SubscriptionRenewalFailedProperties
> = (properties) => {
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
    <div className="renewal-with-icon text-neutral-dark-1 box-border flex w-full max-w-full flex-col items-center justify-start gap-[40px] bg-background px-14 pb-[53px] pt-14 text-left font-inter text-4xl font-semibold md:gap-[56px]">
      <Image
        className="renewal-with-icon-image relative h-[142px] w-[142px] shrink-0 overflow-hidden object-contain md:h-[178px] md:w-[178px]"
        loading="lazy"
        alt="Payment Error"
        src={image}
        width={500}
        height={500}
      />
      <div className="renewal-with-icon-title-container flex flex-col items-center justify-center self-stretch text-center">
        <h3 className="renewal-with-icon-title text-neutral-dark-1 relative m-0 self-stretch text-[20px] font-semibold md:text-[20px]">
          {title}
        </h3>
      </div>
      <section className="renewal-with-icon-section flex max-w-full flex-col items-center justify-center gap-[32px] self-stretch text-left text-lg font-normal">
        <div className="renewal-with-icon-greeting flex flex-col items-start justify-start self-stretch">
          <div className="renewal-with-icon-greeting-text text-neutral-dark-2 relative self-stretch text-[16px] font-semibold leading-normal">
            Hi {name},
          </div>
        </div>
        <div className="renewal-with-icon-details flex max-w-full flex-col items-center justify-start gap-[28px] self-stretch text-[14px] text-base md:text-[16px]">
          <div className="renewal-with-icon-details-text text-neutral-dark-2 relative self-stretch font-normal leading-normal">
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
          <div className="renewal-with-icon-reasons text-neutral-dark-1 flex max-w-full flex-col items-start justify-start gap-[16px] self-stretch font-normal">
            <div className="renewal-with-icon-reason flex max-w-full flex-row items-center justify-start gap-[16px] self-stretch">
              <Image
                className="renewal-with-icon-reason-icon relative h-6 w-6"
                loading="lazy"
                alt="Reason Icon"
                src="/images/Star1.svg"
                width={500}
                height={500}
              />
              <div className="renewal-with-icon-reason-text relative inline-block max-w-[calc(100%-40px)] flex-1">
                Your payment card has been blocked by your bank.
              </div>
            </div>
            <div className="renewal-with-icon-reason flex max-w-full flex-row items-center justify-start gap-[16px] self-stretch">
              <Image
                className="renewal-with-icon-reason-icon relative h-6 w-6"
                loading="lazy"
                alt="Reason Icon"
                src="/images/Star1.svg"
                width={500}
                height={500}
              />
              <div className="renewal-with-icon-reason-text relative inline-block max-w-[calc(100%-40px)] flex-1">
                Your payment card has expired.
              </div>
            </div>
            <div className="renewal-with-icon-reason flex max-w-full flex-row items-center justify-start gap-[16px] self-stretch">
              <Image
                className="renewal-with-icon-reason-icon relative h-6 w-6"
                loading="lazy"
                alt="Reason Icon"
                src="/images/Star1.svg"
                width={500}
                height={500}
              />
              <div className="renewal-with-icon-reason-text relative inline-block max-w-[calc(100%-40px)] flex-1">
                You have insufficient funds in your account.
              </div>
            </div>
          </div>
          <div className="renewal-with-icon-update text-neutral-dark-2 relative self-stretch font-normal">
            To keep enjoying your {renewalPeriod} Features, please check your
            bank or update your payment details.
          </div>
        </div>
        <a
          href={updatePaymentLink}
          className="renewal-with-icon-button-link flex self-stretch md:self-center"
        >
          <Button />
        </a>
      </section>
      <div className="renewal-with-icon-regards text-neutral-dark-2 flex flex-col items-start justify-center gap-[8px] self-stretch text-sm">
        <div className="renewal-with-icon-regards-text relative self-stretch font-semibold leading-normal">
          Regards,
        </div>
        <div className="renewal-with-icon-regards-text relative self-stretch font-semibold leading-normal">
          Boilerplate
        </div>
      </div>
      <div className="renewal-with-icon-contact text-neutral-dark-2 relative self-stretch text-[14px] font-normal leading-normal md:text-[16px]">
        <span className="renewal-with-icon-contact-text text-neutral-dark-2 font-normal">
          If you have questions, please visit our{" "}
        </span>
        <span className="renewal-with-icon-faqs-link font-semibold text-orange-400">
          <a href={faqsLink}>FAQs</a>
        </span>
        <span className="renewal-with-icon-contact-text text-neutral-dark-2 font-normal">
          , or email us at{" "}
        </span>
        <span className="renewal-with-icon-email-link text-orange-400">
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </span>
        <span className="renewal-with-icon-contact-text text-neutral-dark-2 font-normal">
          . Our team can answer questions about your subscription status. To
          unsubscribe from future subscription renewal reminders,{" "}
        </span>
        <span className="renewal-with-icon-unsubscribe-link cursor-pointer font-semibold underline">
          <a href={unsubscribeLink}>click here</a>
        </span>
        <span className="renewal-with-icon-contact-text text-neutral-dark-2 font-normal">
          .
        </span>
      </div>
    </div>
  );
};

export default SubscriptionRenewalFailed;
