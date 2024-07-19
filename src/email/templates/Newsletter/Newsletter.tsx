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

import newsletter from "./images/image 2.svg";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
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
      <Body className="flex w-[100vw] flex-col overflow-x-hidden">
        <Container>
          <Section className="mt-[60px] flex flex-col items-center justify-center md:mt-[80px]">
            <Image
              src={newsletter}
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
        </Container>
      </Body>
    </Html>
  );
};

export default Newsletter;
