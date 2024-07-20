import {
  Container,
  Heading,
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
  image = true,
}) => {
  return (
    <Container className="-ml-0 flex w-full flex-col overflow-x-hidden">
      <Section className="mt-16 flex flex-col items-center justify-center md:mt-20">
        <Image
          src="/images/newletter-email-template/Newsletter-Banner.svg"
          alt="Newsletter Image"
          className={`w-40 md:w-80 ${image ? "" : "hidden"}`}
          width={1000}
          height={1000}
        />
      </Section>
      <Section
        className={`${image ? "mt-12 md:mt-14" : "mt-3.5"} flex w-screen flex-col gap-14 px-12 lg:px-[10vw]`}
      >
        <Heading
          as="h2"
          mx="auto"
          className="text-center text-xl font-semibold md:text-2xl"
        >
          {title}
        </Heading>
        <Heading className="mt-10 text-base font-semibold md:mt-14 md:text-lg">
          Hi {name},
        </Heading>
        <ContentComponent imageState={image} />

        <Section className="mt-8 flex flex-col items-center justify-center">
          <Link href={learnMoreUrl}>
            <Text className="flex w-4/5 justify-center rounded-lg bg-primary py-2 text-lg text-white md:w-60">
              Learn More
            </Text>
          </Link>
        </Section>
        <Heading
          as="h4"
          className="mt-14 text-sm font-medium md:text-base md:font-semibold"
        >
          Regards,
        </Heading>
        <Heading
          as="h4"
          className="mb-8 mt-4 text-sm font-medium md:mt-8 md:text-base md:font-semibold"
        >
          Boilerplate
        </Heading>
      </Section>
    </Container>
  );
};

export default Newsletter;
