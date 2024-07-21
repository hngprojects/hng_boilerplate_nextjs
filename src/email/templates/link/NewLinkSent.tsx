"use client";

import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Img,
  Section,
} from "@react-email/components";
import React from "react";

import TailwindWrapper from "../_components/tailwindWrapper";

type NewLinkSentProperties = {
  title: string;
  name: string;
  image: string;
  activationLink: string;
};
const NewLinkSent: React.FC<NewLinkSentProperties> = ({
  title,
  name,
  image,
  activationLink,
}) => {
  return (
    <TailwindWrapper>
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://rsms.me/inter/font-files/Inter-Regular.woff2?v=4.0",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://rsms.me/inter/font-files/Inter-Medium.woff2?v=4.0",
            format: "woff2",
          }}
          fontWeight={500}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://rsms.me/inter/font-files/Inter-SemiBold.woff2?v=4.0",
            format: "woff2",
          }}
          fontWeight={600}
          fontStyle="normal"
        />
      </Head>
      <Body>
        <Container className="mx-auto my-auto flex items-center justify-center p-5">
          <div className="flex flex-col gap-10 sm:gap-14">
            <div>
              <Img
                src={image}
                alt="Email header"
                className="mx-auto hidden max-w-full lg:block"
                width={298.73}
                height={211.46}
              />
              <Img
                src={image}
                alt="Email header mobile"
                className="mx-auto block max-w-full lg:hidden"
                width={200.6}
                height={142}
              />
            </div>
            <Heading className="text-neu text-center text-xl font-semibold sm:text-2xl">
              {title}
            </Heading>
            <div className="flex flex-col gap-[28px] px-14 sm:gap-8 sm:px-0">
              <p className="text-base font-semibold sm:text-lg">Hi {name},</p>
              <div className="flex flex-col gap-6 sm:gap-[28px]">
                <span className="text-sm font-normal sm:text-base sm:leading-[19.36px]">
                  We have sent you a new activation link for your Boilerplate
                  account. Please click the button below to activate your
                  account:
                </span>
                <Section className="mx-auto flex w-full justify-center rounded-xl text-center sm:w-fit">
                  <Button
                    className="rounded-md bg-[#F97316] px-10 py-[12.5px] text-white"
                    href={activationLink}
                  >
                    Activate My Account
                  </Button>
                </Section>
              </div>
            </div>
            <span className="px-14 text-sm font-medium sm:px-0">
              Regards,
              <br />
              Boilerplate
            </span>
          </div>
        </Container>
      </Body>
    </TailwindWrapper>
  );
};
const NewLinkSentPage: React.FC = () => {
  const properties = {
    title: "New Activation Link Sent",
    name: "John Doe",
    image: "/images/link-sent.png",
    activationLink: "https://example.com/activate",
  };

  return <NewLinkSent {...properties} />;
};

export default NewLinkSentPage;
