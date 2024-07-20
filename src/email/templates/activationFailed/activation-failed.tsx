import {
  Button,
  Head,
  Heading,
  Img,
  Link,
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
        <Text className="text-center font-[600] text-[#0A0A0A] sm:text-[20px] sm:leading-[24.2px] xl:text-[24px] xl:leading-[29.05px]">
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
          <Text className="font-[400] leading-[19.36px] text-[#111111] sm:text-[14px] sm:leading-[16.94px] xl:text-[16px]">
            Don’t worry, you can easily request a new activation link by
            clicking the button below:
          </Text>
          <Section className="mb-[56px] mt-[28px] grid place-content-center">
            <Button className="flex h-[44px] items-center justify-center rounded-[8px] bg-[#F97316] px-[40px]">
              <Text className="text-center font-[500] leading-[19.36px] text-[#ffffff] sm:text-[10px] xl:text-[16px]">
                Send Another Activation Link
              </Text>
            </Button>
          </Section>
          <Section className="sm:mb-[40px] xl:mb-[56px]">
            <Text className="text-[14px] font-[550] text-[#111111] sm:leading-[16.94px] xl:leading-[20.94px]">
              Regards,
              <br />
              Boilerplate
            </Text>
          </Section>
        </Section>

        <Section className="bg-[#E1D6D666] px-[48px] py-[32px]">
          <div className="flex-column mb-[30px] flex items-center justify-center gap-x-[34px]">
            <Img
              src="https://i.postimg.cc/d3vHzssk/Social-Icons.png"
              alt="twitter"
            />
            <Img
              src="https://i.postimg.cc/NfsCDjCZ/Social-Icons-1.png"
              alt="insta"
            />
            <Img
              src="https://i.postimg.cc/htwCKb4q/Social-Icons-2.png"
              alt="tiktok"
            />
            <Img
              src="https://i.postimg.cc/VNCKvr50/Social-Icons-3.png"
              alt="reddit"
            />
            <Img
              src="https://i.postimg.cc/mkbjmmj7/Social-Icons-4.png"
              alt="linkedIn"
            />
          </div>
          <Section className="mb-[60px] flex flex-row">
            <Text className="text-[14px] font-[400] leading-[16.94px] text-[#5B5B5D]">
              Thank you for choosing Boilerplace.com Need help?{" "}
              <Link
                href="https://example.com"
                className="text-[14px] font-[600] leading-[16.94px] text-[#111111]"
              >
                {" "}
                Contact our customer support
              </Link>
            </Text>
          </Section>
          <Section>
            <Text className="text-[14px] font-[400] leading-[20px] text-[#5B5B5D]">
              You are receiving this email because you signed op at
              Boilerplate.com. Want to change how you recieve these emails?
              <br />
              You can{" "}
              <Link
                href="https://example.com"
                className="text-[14px] font-[600] leading-[24px] text-[#5B5B5D]"
              >
                update your preferences
              </Link>{" "}
              or{" "}
              <Link
                href="https://example.com"
                className="text-[14px] font-[600] leading-[24px] text-[#5B5B5D]"
              >
                {" "}
                unsubscribe from this list.
              </Link>
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
