import { Img, Link, Section, Text } from "@react-email/components";

import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";
import Footer from "./Footer";
import Header from "./Header";

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

export default function SubscriptionRenewalEmail(properties: Properties) {
  return (
    <>
      <Header />
      <Tailwindwrapper>
        <div className="flex justify-center">
          <div className="w-[70rem]">
            <div className="px-[5.6rem]">
              <Section>
                <Img
                  className="mx-auto my-[5.6rem] block"
                  src={properties.imageUrl}
                  alt="Reminder Image"
                  width={200}
                  height={178}
                />
                <Text className="mb-[5.6rem] text-center text-[2.4rem] font-semibold text-[#0A0A0A]">
                  {properties.title}
                </Text>
                <Text className="mb-[1.5rem] text-[1.8rem] font-semibold text-[#111]">
                  Hi {properties.name},
                </Text>
                <Text className="mb-[2.8rem] text-[1.6rem] font-normal leading-[1.5]">
                  We hope you are enjoying your subscription, which will renew
                  soon.
                </Text>
              </Section>
            </div>

            <Section className="bg-[#F97316] py-[2.5rem] text-[#FFFFFF]">
              <Text className="mb-[1.5rem] text-center text-[2.4rem] font-medium">
                Your Renewal Date
              </Text>
              <Text className="text-center text-[3.5rem] font-bold leading-[1.3]">
                {properties.renewalDate}
              </Text>
            </Section>

            <div className="px-[5.6rem]">
              <Section>
                <Text className="mt-[2.8rem] text-[1.6rem] font-normal leading-[1.5]">
                  Your subscription for{" "}
                  <span className="font-semibold">
                    {properties.renewalPrice}/{properties.renewalPeriod}{" "}
                    features
                  </span>{" "}
                  will automatically renew on {properties.renewalDate}. To avoid
                  being charged, you should cancel at least a day before the
                  renewal date. To learn more or cancel,{" "}
                  <Link
                    href={properties.reviewUrl}
                    className="font-semibold text-[#F97316]"
                  >
                    review subscription.
                  </Link>
                </Text>
                <Text className="text-[1.6rem] font-normal leading-[1.5]">
                  To keep your subscription, you can renew your plan for the
                  next month.
                </Text>
                <div className="flex justify-center">
                  <Link
                    href={properties.renewUrl}
                    className="mb-[5.6rem] mt-[1.5rem] cursor-pointer rounded-[0.8rem] bg-[#F97316] px-[3.5rem] py-[1rem] text-center text-[1.4rem] text-[#FFFFFF]"
                  >
                    Renew Subscription
                  </Link>
                </div>
              </Section>
            </div>

            <div className="px-[5.6rem]">
              <Section>
                <Text className="m-0 font-medium text-[#111]">Regards,</Text>
                <Text className="mt-0 font-medium text-[#111]">
                  {properties.companyName}
                </Text>
                <Text className="my-[5.6rem] text-[1.6rem] font-normal leading-[1.5]">
                  If you have questions, please visit our{" "}
                  <Link href={properties.faqUrl}>
                    <strong className="font-semibold text-[#F97316]">
                      FAQs
                    </strong>
                  </Link>
                  , or email us at{" "}
                  <Link href={properties.helpUrl}>
                    <span className="text-[#F97316]">help@boilerplate.com</span>
                  </Link>
                  . Our team can answer questions about your subscription
                  status. To unsubscribe from future subscription renewal
                  reminders,{" "}
                  <Link
                    href={properties.unsubscribeUrl}
                    className="font-semibold text-[#000] underline"
                  >
                    click here
                  </Link>
                  .
                </Text>
              </Section>
            </div>
          </div>
        </div>
      </Tailwindwrapper>
      <Footer />
    </>
  );
}
