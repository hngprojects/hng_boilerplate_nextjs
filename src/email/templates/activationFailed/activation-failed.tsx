import {
  Button,
  Head,
  Heading,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";

interface IProperties {
  name: string;
  title: string;
  image: string;
}

export default function Email(properties: IProperties) {
  const { name, title, image } = properties;
  return (
    <Section>
      <Preview>{`Welcome ${name}`}</Preview>
      <Tailwindwrapper>
        <Head />
        <div className="flex h-[108px] w-full items-center justify-center bg-[#E1D6D666]">
          <Img src="https://i.postimg.cc/Hx58S7C2/Logo.png" alt="img" />
          <Heading className="h-[29px] w-[132px] px-[10px] text-[24px] font-[600] leading-[29.05px] text-[#121A26]">
            Boilerplate.
          </Heading>
        </div>
        <Section className="Xl:mt-[56px] flex items-center justify-center sm:mt-[48px]">
          <Img src={image} alt="img" />
        </Section>
        <Text className="text-center font-[600] text-[#0A0A0A] sm:text-[20px] sm:leading-[24.2px] lg:text-[24px] lg:leading-[29.05px]">
          {title}
        </Text>

        <Section className="pl-[56px] pr-[56px] sm:mt-[40px] xl:mt-[56px]">
          <Text className="mb-[32px] font-[600] text-[#111111] sm:text-[16px] sm:leading-[19.36px] xl:text-[18px] xl:leading-[21.78px]">
            Hi {name},
          </Text>
          <Text className="mb-[28px] font-[400] text-[#111111] sm:text-[14px] sm:leading-[16.94px] xl:text-[16px] xl:leading-[19.36px]">
            We noticed that your account activation has expired. For your
            security, activation links are only valid for a specific time period
          </Text>
          <Text className="font-[400] leading-[19.36px] text-[#111111] sm:text-[14px] sm:leading-[16.94px] lg:text-[16px]">
            Don’t worry, you can easily request a new activation link by
            clicking the button below:
          </Text>
          <Section className="mb-[56px] mt-[28px] grid place-content-center">
            <Button className="flex h-[44px] items-center justify-center rounded-[8px] bg-[#F97316] px-[40px]">
              <Text className="text-center font-[500] leading-[19.36px] text-[#ffffff] sm:text-[14px] md:text-[14px] lg:text-[16px]">
                Send Another Activation Link
              </Text>
            </Button>
          </Section>
          <Section className="sm:mb-[40px] xl:mb-[56px]">
            <Text className="text-[14px] font-[550] text-[#111111] sm:leading-[16.94px] lg:leading-[20.94px]">
              Regards,
              <br />
              Boilerplate
            </Text>
          </Section>
        </Section>
      </Tailwindwrapper>
    </Section>
  );
}

Email.PreviewProps = {
  name: "John Doe",
  title: "Activation Link Expired",
  image: "https://i.postimg.cc/1XY1dBhq/404-page-not-found-1-24-1.jpg",
} satisfies IProperties;
