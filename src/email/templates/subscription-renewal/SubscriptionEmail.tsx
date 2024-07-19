import { Button, Img, Link, Section, Text } from "@react-email/components";

import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";

export default function Email() {
  return (
    <Tailwindwrapper>
      <div className="w-[70rem]">
        <Section className="px-[5.6rem]">
          <Img
            className="block my-[5.6rem] mx-auto"
            src="/pana.svg"
            alt="Reminder Image"
            width={200}
            height={178}
          />
          <Text className="text-[#0A0A0A] text-[2.4rem] font-semibold text-center mb-[5.6rem]">
            Subscription Renewal Reminder
          </Text>
          <Text className="text-[#111] text-[1.8rem] font-semibold mb-[1.5rem]">
            Hi John Doe,
          </Text>
          <Text className="text-[1.4rem] leading-[1.5] font-normal mb-[2.8rem]">
            We hope you are enjoying your subscription, which will renew soon.
          </Text>
        </Section>
        <Section className="bg-[#F97316] text-[#FFFFFF] py-[4rem]">
          <Text className="text-[2.4rem] font-medium text-center mb-[1.5rem]">
            Your Renewal Date
          </Text>
          <Text className="text-[3.5rem] font-bold text-center leading-[1.3]">
            17th September, 2024
          </Text>
        </Section>
        <Section className="px-[5.6rem]">
          <Text className="text-[1.4rem] leading-[1.5] font-normal mt-[2.8rem]">
            Your subscription for{" "}
            <span className="font-semibold">$20.89/Bi-monthly features</span>{" "}
            will automatically renew on 17th September, 2024. To avoid being
            charged, you should cancel at least a day before the renewal date.
            To learn more or cancel,{" "}
            <Link href="/" className="font-semibold text-[#F97316]">
              review subscription.
            </Link>
          </Text>
          <Text className="text-[1.4rem] leading-[1.5] font-normal">
            To keep your subscription, you can renew your plan for the next
            month.
          </Text>
          <div className="flex justify-center">
            <Button className="bg-[#F97316] text-[#FFFFFF] text-[1.4rem] text-center cursor-pointer py-[1rem] px-[3.5rem] rounded-[0.8rem] mt-[1.5rem] mb-[5.6rem]">
              Renew Subscription
            </Button>
          </div>
        </Section>
        <Section className="px-[5.6rem]">
          <Text className="text-[#111] font-medium m-0">Regards,</Text>
          <Text className="text-[#111] font-medium mt-0">Boilerplate</Text>
          <Text className="text-[1.4rem] leading-[1.5] font-normal my-[5.6rem]">
            If you have questions, please visit our{" "}
            <Link href="/">
              <strong className="text-[#F97316] font-semibold">FAQs</strong>
            </Link>
            , or email us at{" "}
            <Link href="/">
              <span className="text-[#F97316]">help@boilerplate.com</span>
            </Link>
            . Our team can answer questions about your subscription status. To
            unsubscribe from future subscription renewal reminders,{" "}
            <Link href="/" className="font-semibold text-[#000] underline">
              click here
            </Link>
            .
          </Text>
        </Section>
      </div>
    </Tailwindwrapper>
  );
}
