import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Section,
} from "@react-email/components";

import TailwindWrapper from "../_components/tailwindWrapper";
import SampleContent from "./SampleContent";

// Ensure this path is correct

interface NewsletterProperties {
  title: string;
  name: string;
  baseUrl: string;
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
          <Container className="-ml-0 flex w-full flex-col">
            <Section className="mt-16 flex flex-col items-center justify-center md:mt-20">
              <Img
                src={`/images/newletter-email-template/Newsletter-Banner.svg`}
                alt="Newsletter Image"
                className={`w-40 md:w-80 ${image ? "" : "hidden md:hidden"}`}
                width="100"
                height="100"
              />
            </Section>
            <Section
              className={`${image ? "mt-12 md:mt-14" : "mt-3.5"} flex w-screen flex-col gap-14 px-4 lg:px-[3vw]`}
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
                <a
                  href={learnMoreUrl}
                  className="mx-auto flex w-full justify-center rounded-[0.2rem] bg-[#F97316] px-5 py-2 text-lg text-white no-underline md:w-60"
                >
                  Learn More
                </a>
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
        </Body>
      </TailwindWrapper>
    </Html>
  );
};

export default Newsletter;
