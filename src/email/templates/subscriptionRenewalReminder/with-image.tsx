import {
  Body,
  Font,
  Head,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

import TailwindWrapper from "../_components/tailwindWrapper";

interface Properties {
  title: string;
  name: string;
  imageUrl: string;
  renewalDate: string;
  renewalPrice: string;
  renewalPeriod: string;
  reviewUrl: string;
  renewUrl: string;
  companyName: string;
  faqUrl: string;
  helpUrl: string;
  unsubscribeUrl: string;
}

//custom colors were used only when necessary because not all email clients support variables

export default function SubscriptionRenewalEmail(properties: Properties) {
  return (
    <>
      <Html lang="en">
        <Head>
          <Font
            fontFamily="Inter"
            fallbackFontFamily="sans-serif"
            webFont={{
              url: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Body>
          <TailwindWrapper>
            <div className="flex justify-center">
              <div className="w-[70rem]">
                <div className="px-[5.6rem]">
                  <Section>
                    {properties.imageUrl && (
                      <Img
                        className="mx-auto my-[5rem] block"
                        src={properties.imageUrl}
                        alt="Reminder Image"
                        width={200}
                        height={178}
                      />
                    )}

                    <Text className="mb-[4.5rem] text-center text-[2rem] font-semibold leading-[2.5rem]">
                      {properties.title}
                    </Text>
                    <Text className="mb-[2.5rem] text-[1.5rem] font-semibold">
                      Hi {properties.name},
                    </Text>
                    <Text className="mb-[2.8rem] text-[1.2rem] font-normal leading-[1.3]">
                      We hope you are enjoying your subscription, which will
                      renew soon.
                    </Text>
                  </Section>
                </div>

                <Section className="bg-[#F97316] text-white">
                  <div className="py-[2rem]">
                    <Text className="mb-[.5rem] text-center text-[1.6rem]">
                      Your Renewal Date
                    </Text>
                    <h1 className="text-center text-[3.7rem] font-bold leading-[1.3]">
                      {properties.renewalDate}
                    </h1>
                  </div>
                </Section>

                <div className="px-[5.6rem]">
                  <Section>
                    <Text className="mt-[2.8rem] text-[1.2rem] font-normal leading-[1.3]">
                      Your subscription for{" "}
                      <span className="font-semibold">
                        {properties.renewalPrice}/{properties.renewalPeriod}{" "}
                        features
                      </span>{" "}
                      will automatically renew on {properties.renewalDate}. To
                      avoid being charged, you should cancel at least a day
                      before the renewal date. To learn more or cancel,{" "}
                      <Link
                        href={properties.reviewUrl}
                        className="font-semibold"
                      >
                        <span className="text-[#F97316]">
                          review subscription.
                        </span>
                      </Link>
                    </Text>
                    <Text className="mt-[2.8rem] text-[1.2rem] font-normal leading-[1.3]">
                      To keep your subscription, you can renew your plan for the
                      next month.
                    </Text>
                    <div className="flex justify-center">
                      <Link
                        href={properties.renewUrl}
                        className="mb-[5.6rem] mt-[2rem] rounded-[0.8rem] bg-[#F97316] px-[3.5rem] py-[1rem] text-center text-[1.2rem] text-white"
                      >
                        Renew Subscription
                      </Link>
                    </div>
                  </Section>
                </div>

                <div className="px-[5.6rem]">
                  <Section>
                    <Text className="m-0 text-[1.1rem] font-bold">
                      Regards,
                    </Text>
                    <Text className="mt-[.8rem] text-[1.1rem] font-medium">
                      {properties.companyName}
                    </Text>
                    <Text className="my-[5.6rem] text-[1.2rem] font-normal leading-[1.3]">
                      If you have questions, please visit our{" "}
                      <Link href={properties.faqUrl}>
                        <strong className="font-semibold text-[#F97316]">
                          FAQs
                        </strong>
                      </Link>
                      , or email us at{" "}
                      <Link href={properties.helpUrl}>
                        <span className="text-[#F97316]">
                          help@boilerplate.com
                        </span>
                      </Link>
                      . Our team can answer questions about your subscription
                      status. To unsubscribe from future subscription renewal
                      reminders,{" "}
                      <Link
                        href={properties.unsubscribeUrl}
                        className="font-semibold text-black"
                      >
                        <span className="underline">click here</span>
                      </Link>
                      .
                    </Text>
                  </Section>
                </div>
              </div>
            </div>
          </TailwindWrapper>
        </Body>
      </Html>
    </>
  );
}
