import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Link,
  Section,
  Text,
} from "@react-email/components";
import Image from "next/image";
import React from "react";

import SampleContent from "./SampleContent";

interface NewsletterProperties {
  title: string;
  name: string;
  content: React.ElementType;
  learnMoreUrl?: string;
  image: boolean;
}

const Newsletter: React.FC<NewsletterProperties> = ({
  title = "Stay Ahead: Exclusive Offer on Cutting-Edge Tech!",
  name = "John Doe",
  content: ContentComponent = SampleContent,
  learnMoreUrl = "www.example.com",
  image = false,
}) => {
  return (
    <Html>
      <Head>
        <title>Newsletter</title>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap",
            format: "woff2",
          }}
          fontWeight={600}
          fontStyle="normal"
        />
      </Head>
      <Body className="flex w-[100vw] flex-col overflow-x-hidden font-[Inter]">
        <Container>
          <Section className="flex h-[90px] w-[100vw] flex-row items-center justify-center bg-[#E1D6D666] md:h-[108px]">
            <Heading
              as="h1"
              className="flex flex-row items-center gap-[10px] text-2xl font-semibold text-foreground"
            >
              <Image
                src="/images/newsletter-email-template/logo.svg"
                alt="Logo"
                className="w-[18px]"
                width={10}
                height={24}
              />
              Boilerplate.
            </Heading>
          </Section>
          <Section className="mt-[60px] flex flex-col items-center justify-center md:mt-[80px]">
            <Image
              src="/images/newsletter-email-template/newsletter.svg"
              alt="Newsletter Image"
              className={`w-[39.2vw] ${image ? "" : "hidden"}`}
              width={1000}
              height={1000}
            />
          </Section>
          <Section
            className={`${image ? "mt-[48px] md:mt-14" : "mt-[14px]"} flex w-[100vw] flex-col gap-[56px] px-12 lg:px-[10vw]`}
          >
            <Heading
              as="h2"
              mx="auto"
              className="text-center text-xl font-semibold md:text-2xl"
            >
              {title}
            </Heading>
            <Heading className="mt-[40px] text-base font-semibold md:mt-14 md:text-lg">
              Hi {name},
            </Heading>
            <ContentComponent imageState={image} />

            <Section className="mt-8 flex flex-col items-center justify-center">
              <Link href={learnMoreUrl}>
                <Text className="flex w-[79vw] justify-center rounded-[8px] bg-primary py-[8px] text-[16px] text-white md:w-[240px]">
                  Learn More
                </Text>
              </Link>
            </Section>
            <Heading
              as="h4"
              className="mt-[56px] text-[14px] font-medium md:text-[16px] md:font-semibold"
            >
              Regards,
            </Heading>
            <Heading
              as="h4"
              className="mb-8 mt-[16px] text-[14px] font-medium md:mt-[32px] md:text-[16px] md:font-semibold"
            >
              Boilerplate
            </Heading>
          </Section>
          <Section className="mt-[48px] flex flex-col items-center justify-center bg-[#F3EFEF] px-[42px] py-[32px] md:mt-[56px] md:px-[42px] md:py-[32px] lg:text-center">
            <section className="mx-auto flex w-[252px] flex-row items-center justify-between gap-[34px] md:w-[300px] md:flex-row-reverse md:gap-[24px]">
              <Image
                src="/images/newsletter-email-template/X.svg"
                alt="X"
                className="w-[18px] md:w-[24px]"
                width={10}
                height={24}
              />
              <Image
                src="/images/newsletter-email-template/IG.svg"
                alt="Logo"
                className="w-[18px] md:w-[24px]"
                width={10}
                height={24}
              />
              <Image
                src="/images/newsletter-email-template/TikTok.svg"
                alt="Logo"
                className="w-[18px] md:w-[24px]"
                width={10}
                height={24}
              />
              <Image
                src="/images/newsletter-email-template/Reddit.svg"
                alt="Logo"
                className="w-[18px] md:w-[24px]"
                width={10}
                height={24}
              />
              <Image
                src="/images/newsletter-email-template/LinkedIn.svg"
                alt="Logo"
                className="w-[18px] md:w-[24px]"
                width={10}
                height={24}
              />
            </section>

            <Section className="mt-[30px]">
              <Text className="text-[14px] text-neutral-dark-1">
                Thank you for choosing Boilerplate.com. Need help?
                <span className="text-semibold text-neutral-dark-2 underline">
                  Contact our customer support
                </span>{" "}
              </Text>
              <Section className="mt-[60px] text-neutral-dark-1">
                <Text className="mt-[60px]">
                  You are receiving this email because you signed up at
                  Boilerplate.com Want to change how you receive these emails?
                </Text>
                <Text>
                  You can{" "}
                  <b className="text-neutral-dark-2">
                    update your preferences{" "}
                  </b>{" "}
                  or{" "}
                  <b className="text-neutral-dark-2">
                    unsubscribe from this list.
                  </b>
                </Text>
              </Section>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default Newsletter;
