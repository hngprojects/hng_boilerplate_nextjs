import {
  Body,
  Button,
  Column,
  Container,
  Font,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";

let baseUrl = "http://localhost:3000"; // Port for the dev server not email:dev (Both servers should be open)
if (process.env.BASE_URL) {
  baseUrl = process.env.BASE_URL;
}

interface Offer {
  title: string;
  description: string;
}

interface socialLink {
  type: string;
  url: string;
  img: { src: string; width: string; height: string };
}

interface IProperties {
  companyName: string;
  receiverName: string;
  offers: Offer[];
  baseUrl: string;
  mainHeading: string;
  subHeading: string;
  welcomeMessage: string;
  socialLinks: socialLink[];
  customerSupportLink: string;
  updatePreferencesLink: string;
  unsubscribeLink: string;
}

export default function WelcomeEmail(properties: IProperties) {
  const {
    receiverName,
    offers,
    baseUrl,
    mainHeading,
    subHeading,
    welcomeMessage,
    socialLinks,
    companyName,
    customerSupportLink,
    updatePreferencesLink,
    unsubscribeLink,
  } = properties;
  const trackingParameters =
    "?utm_source=email&utm_medium=welcome&utm_campaign=onboarding";

  return (
    <Html>
      <Preview>{`Welcome ${receiverName}`}</Preview>

      <Tailwindwrapper>
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
        <Body className="m-0">
          <Container className="max-w-full">
            <Section className="w-full bg-[#E1D6D666] py-[1.91rem] text-center md:pb-[2.88rem] md:pt-[2.94rem]">
              <Img
                className="mx-auto block"
                src={`${baseUrl}/images/welcome-email-no-image/boilerplate-logo.png`}
                alt="Boilerplate Logo"
              />
            </Section>
            <Section className="m-0 px-14 py-12">
              <Heading className="m-0 mb-2 text-center text-xl font-semibold text-[#0A0A0A] md:mb-3 md:text-2xl">
                {mainHeading}
              </Heading>
              <Text className="m-0 text-center text-base font-medium text-[#000000CC] md:text-lg">
                {subHeading}
              </Text>
              <Section className="my-10 md:my-14">
                <Text className="m-0 mb-7 text-base font-semibold text-[#111] md:mb-8 md:text-lg">
                  Hi, {receiverName},
                </Text>
                <Text className="m-0 mb-6 text-sm font-normal text-[#111111E5] md:mb-7 md:text-base">
                  {welcomeMessage}
                </Text>
                <Text className="m-0 mb-5 text-base font-semibold text-[#0A0A0A]">
                  Here&apos;s what you can look forward to
                </Text>
                <Section className="m-0 text-sm text-[#0A0A0A] opacity-90 md:text-base">
                  {offers.map((offer, index) => (
                    <Row key={index} className="mb-4">
                      <Column>
                        <Img
                          className="mr-4"
                          src={`${baseUrl}/images/welcome-email-no-image/star-icon.png`}
                          alt="Star Icon"
                          width="24"
                          height="24"
                        />
                      </Column>
                      <Column>
                        <Text className="m-0">
                          <span className="m-0 font-semibold">
                            {offer.title}:
                          </span>{" "}
                          {offer.description}.
                        </Text>
                      </Column>
                    </Row>
                  ))}
                </Section>
                <Section>
                  <Button
                    href={`${baseUrl}${trackingParameters}`}
                    className="m-0 mx-auto mt-3 block rounded-[0.5rem] bg-[#F97316] px-4 py-2 text-center text-base text-[#FAF8F8] md:mt-4 md:w-[10.1rem] md:min-w-[10.1rem] md:px-10"
                  >
                    Learn More About Us
                  </Button>
                </Section>
              </Section>
              <Section className="text-sm font-medium text-[#111]">
                <Text className="m-0">Regards,</Text>
                <Text className="m-0">{companyName}</Text>
              </Section>
            </Section>
            <Section className="mt-12 w-full bg-[#E1D6D666] px-12 py-8 md:mt-14">
              <Section className="mx-auto max-w-[15.8rem]">
                <Row>
                  {socialLinks.map((socialLink) => (
                    <Column key={socialLink.type}>
                      <Link href={socialLink.url}>
                        <Img
                          src={`${baseUrl}/images/welcome-email-no-image/${socialLink.img.src}`}
                          alt={`${socialLink.type} icon`}
                          width={socialLink.img.width}
                          height={socialLink.img.height}
                        />
                      </Link>
                    </Column>
                  ))}
                </Row>
              </Section>
              <Section className="text-sm font-normal text-[#5B5B5D]">
                <Text className="m-0 border-0 border-b-[0.01875rem] border-dashed border-[#5B5B5D]/25 py-[1.87rem]">
                  Thank you for choosing Boilerplate.com Need help?{" "}
                  <Link
                    href={customerSupportLink}
                    className="font-semibold text-[#111] underline"
                  >
                    Contact our customer support
                  </Link>
                </Text>
                <Text className="m-0 mt-[1.87rem]">
                  You are receiving this email because you signed up at
                  Boilerplate.com. Want to change how you receive these emails?
                </Text>
                <Text className="m-0">
                  You can{" "}
                  <Link
                    href={updatePreferencesLink}
                    className="font-semibold text-[#111]"
                  >
                    update your preferences
                  </Link>{" "}
                  or{" "}
                  <Link
                    href={unsubscribeLink}
                    className="font-semibold text-[#111]"
                  >
                    unsubscribe from this list.
                  </Link>
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwindwrapper>
    </Html>
  );
}

const socialLinks: socialLink[] = [
  {
    type: "twitter",
    url: "https://twitter.com",
    img: {
      src: "twitter-icon.png",
      width: "24",
      height: "24",
    },
  },
  {
    type: "instagram",
    url: "https://instagram.com",
    img: {
      src: "instagram-icon.png",
      width: "24",
      height: "24",
    },
  },
  {
    type: "tiktok",
    url: "https://tiktok.com",
    img: {
      src: "tiktok-icon.png",
      width: "24",
      height: "24",
    },
  },
  {
    type: "reddit",
    url: "https://reddit.com",
    img: {
      src: "reddit-icon.png",
      width: "24",
      height: "24",
    },
  },
  {
    type: "linkedin",
    url: "https://linkedin.com",
    img: {
      src: "linkedin-icon.png",
      width: "24",
      height: "24",
    },
  },
];

WelcomeEmail.PreviewProps = {
  companyName: "Boilerplate",
  receiverName: "John Doe",
  offers: [
    {
      title: "Exclusive Offers",
      description:
        "Enjoy special promotions and discounts available only to our members",
    },
    {
      title: "Exclusive Offers",
      description:
        "Enjoy special promotions and discounts available only to our members",
    },
    {
      title: "Exclusive Offers",
      description:
        "Enjoy special promotions and discounts available only to our members",
    },
  ],
  baseUrl: baseUrl,
  mainHeading: "Welcome to Boilerplate",
  subHeading: "Thanks for signing up",
  welcomeMessage:
    "We're thrilled to have you join us. Experience quality and innovation like never before. Our product is made to fit your needs and make your life easier.",
  socialLinks: socialLinks,
  customerSupportLink: baseUrl,
  updatePreferencesLink: baseUrl,
  unsubscribeLink: baseUrl,
} satisfies IProperties;
