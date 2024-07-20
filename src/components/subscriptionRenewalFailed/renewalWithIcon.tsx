import Image from "next/image";
import React from "react";

import Button from "../common/Button";
import { RenewalWithIconSchema } from "./zodSchema";

interface RenewalWithIconProperties {
  title: string;
  name: string;
  image: string;
  renewalPeriod: string;
  updatePaymentLink: string;
  faqsLink: string;
  supportEmail: string;
  unsubscribeLink: string;
}

const RenewalWithIcon: React.FC<RenewalWithIconProperties> = (properties) => {
  const result = RenewalWithIconSchema.safeParse(properties);
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
    <div className="renewal-with-icon">
      <Image
        className="renewal-with-icon-image"
        loading="lazy"
        alt="Payment Error"
        src={image}
        width={500}
        height={500}
      />
      <div className="renewal-with-icon-title-container">
        <h3 className="renewal-with-icon-title">{title}</h3>
      </div>
      <section className="renewal-with-icon-section">
        <div className="renewal-with-icon-greeting">
          <div className="renewal-with-icon-greeting-text">Hi {name},</div>
        </div>
        <div className="renewal-with-icon-details">
          <div className="renewal-with-icon-details-text">
            <span>
              We are having some trouble processing your subscription renewal
              payment for your{" "}
            </span>
            <span className="renewal-with-icon-period">
              {renewalPeriod} Features
            </span>
            <span>
              . This could be because of either of the following reasons:
            </span>
          </div>
          <div className="renewal-with-icon-reasons">
            <div className="renewal-with-icon-reason">
              <Image
                className="renewal-with-icon-reason-icon"
                loading="lazy"
                alt="Reason Icon"
                src="/images/Star1.svg"
                width={500}
                height={500}
              />
              <div className="renewal-with-icon-reason-text">
                Your payment card has been blocked by your bank.
              </div>
            </div>
            <div className="renewal-with-icon-reason">
              <Image
                className="renewal-with-icon-reason-icon"
                loading="lazy"
                alt="Reason Icon"
                src="/images/Star1.svg"
                width={500}
                height={500}
              />
              <div className="renewal-with-icon-reason-text">
                Your payment card has expired.
              </div>
            </div>
            <div className="renewal-with-icon-reason">
              <Image
                className="renewal-with-icon-reason-icon"
                loading="lazy"
                alt="Reason Icon"
                src="/images/Star1.svg"
                width={500}
                height={500}
              />
              <div className="renewal-with-icon-reason-text">
                You have insufficient funds in your account.
              </div>
            </div>
          </div>
          <div className="renewal-with-icon-update">
            To keep enjoying your {renewalPeriod} Features, please check your
            bank or update your payment details{" "}
            <a
              href={updatePaymentLink}
              className="renewal-with-icon-update-link"
            >
              here
            </a>
            .
          </div>
        </div>
        <a href={updatePaymentLink} className="renewal-with-icon-button-link">
          <Button />
        </a>
      </section>
      <div className="renewal-with-icon-regards">
        <div className="renewal-with-icon-regards-text">Regards,</div>
        <div className="renewal-with-icon-regards-text">Boilerplate</div>
      </div>
      <div className="renewal-with-icon-contact">
        <span className="renewal-with-icon-contact-text">
          If you have questions, please visit our{" "}
        </span>
        <span className="renewal-with-icon-faqs-link">
          <a href={faqsLink}>FAQs</a>
        </span>
        <span className="renewal-with-icon-contact-text">
          , or email us at{" "}
        </span>
        <span className="renewal-with-icon-email-link">
          <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
        </span>
        <span className="renewal-with-icon-contact-text">
          . Our team can answer questions about your subscription status. To
          unsubscribe from future subscription renewal reminders,{" "}
        </span>
        <span className="renewal-with-icon-unsubscribe-link">
          <a href={unsubscribeLink}>click here</a>
        </span>
        <span className="renewal-with-icon-contact-text">.</span>
      </div>
    </div>
  );
};

export default RenewalWithIcon;
