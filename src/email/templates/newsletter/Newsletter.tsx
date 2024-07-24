import {
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

import TailwindWrapper from "~/email/templates/_components/tailwindWrapper";

interface NewsletterProperties {
  title: string;
  name: string;
  learnMoreUrl?: string;
  imageState: boolean;
}

export default function Email(properties: NewsletterProperties) {
  const { title, name, learnMoreUrl, imageState } = properties;

  return (
    <TailwindWrapper>
      <Html>
        <Head />

        <Container className="-ml-0 flex w-full flex-col overflow-x-hidden">
          <Section className="mt-16 flex flex-col items-center justify-center md:mt-20">
            <Img
              src="/images/newletter-email-template/Newsletter-Banner.svg"
              alt="Newsletter Image"
              className={`w-40 md:w-80 ${imageState ? "" : "hidden"}`}
              width={1000}
              height={1000}
            />
          </Section>
          <Section
            className={`${imageState ? "mt-12 md:mt-14" : "mt-3.5"} flex w-screen flex-col gap-14 px-12 lg:px-[10vw]`}
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
            <Section>
              <Text className="mt-7 text-sm text-neutral-dark-1 md:mt-8 md:text-lg md:tracking-wide">
                We’re excited to bring you an exclusive offer that will keep you
                ahead of the curve! At Boilerplate, we pride ourselves on
                providing the latest and greatest in technology, and this time,
                we have something truly special for you.
              </Text>
              <Heading
                as="h3"
                className="mt-6 text-base font-semibold md:mt-14 md:text-xl"
              >
                What’s in Store
              </Heading>
              <Text className="flex flex-row items-center gap-4 text-sm text-neutral-dark-2 md:gap-5">
                <Img
                  src="/images/newletter-email-template/Newsletter-Star.svg"
                  alt="Star"
                  className="w-6 md:w-6"
                  width={1000}
                  height={1000}
                />
                <span className="text-sm md:text-base">
                  <b>The Ultimate Smartwatch:</b> Experience the future with
                  this state-of-the-art device, designed to enhance your daily
                  life.
                </span>
              </Text>
              <Text className="flex flex-row items-center gap-5 text-neutral-dark-2">
                <Img
                  src="/images/newletter-email-template/Newsletter-Star.svg"
                  alt="Star"
                  className="w-6 md:w-6"
                  width={1000}
                  height={1000}
                />
                <span className="text-sm md:text-base">
                  <b>The High-Performance Laptop: </b> A perfect blend of
                  innovation and performance, ideal for both work and play.
                </span>
              </Text>
              <Text className="flex flex-row items-center gap-5 text-neutral-dark-2">
                <Img
                  src="/images/newletter-email-template/Newsletter-Star.svg"
                  alt="Star"
                  className="w-6 md:w-6"
                  width={1000}
                  height={1000}
                />
                <span className="text-sm md:text-base">
                  <b>The Wireless Noise-Cancelling Headphones:</b> Sleek,
                  powerful, and user-friendly, this product is a must-have for
                  any tech enthusiast.
                </span>
              </Text>
              <Heading
                as="h3"
                className="mt-7 hidden font-semibold text-foreground md:block"
              >
                Exclusive Savings
              </Heading>
              <Text className="mt-5 hidden text-lg font-medium text-neutral-dark-1 md:block md:text-base">
                For a limited time, enjoy 25% off your purchase of any of these
                groundbreaking products. Simply use the code TECHSAVVY at
                checkout to unlock your savings.
              </Text>
              <Heading
                as="h3"
                className="mt-14 text-base font-semibold md:text-xl"
              >
                Why Choose Boilerplate?
              </Heading>
              <Text className="flex flex-row items-center gap-5 text-neutral-dark-2">
                <Img
                  src="/images/newletter-email-template/Newsletter-Star.svg"
                  alt="Star"
                  className="w-6 md:w-6"
                  width={1000}
                  height={1000}
                />
                <span className="text-sm md:text-base">
                  <b> Cutting-Edge Technology:</b> We source the most innovative
                  products to ensure you have access to the best.
                </span>
              </Text>
              <Text className="flex flex-row items-center gap-5 text-neutral-dark-2">
                <Img
                  src="/images/newletter-email-template/Newsletter-Star.svg"
                  alt="Star"
                  className="w-6 md:w-6"
                  width={1000}
                  height={1000}
                />
                <span className="text-sm md:text-base">
                  <b>Unmatched Quality: </b> Our products undergo rigorous
                  testing to meet the highest standards.
                </span>
              </Text>
              <Text className="flex flex-row items-center gap-5 text-foreground">
                <Img
                  src="/images/newletter-email-template/Newsletter-Star.svg"
                  alt="Star"
                  className="w-6 md:w-6"
                  width={1000}
                  height={1000}
                />
                <span className="text-sm md:text-base">
                  <b>Exceptional Customer Support:</b> Our team is always here
                  to assist you with any questions or concerns.
                </span>
              </Text>
              <Text className="mt-5 hidden text-base md:block">
                Follow <span className="text-primary">our Blog </span>for more
                information.
              </Text>
              <Heading className="mt-7 text-xl font-semibold">
                How To Redeem Your Offer
              </Heading>
              <Section
                className={`${imageState ? "mt-16 md:mt-20" : "mt-0"} flex flex-col items-center justify-center`}
              >
                <Img
                  src="/images//newletter-email-template/Newsletter-Discount.svg"
                  alt="Newsletter"
                  className={`w-40 md:w-80 ${imageState ? "" : "hidden"}`}
                  width={1000}
                  height={1000}
                />
              </Section>
              <Section
                className={`${imageState ? "mt-12" : "-mt-8"} flex flex-col items-center justify-center`}
              ></Section>
              <ol className="mt-12 text-sm leading-6 text-neutral-dark-1 md:text-base">
                <li>
                  1. Visit our website at{" "}
                  <a className="text-primary">www.boilerplate.com</a>
                </li>
                <li>2. Browse our selection of cutting-edge tech. </li>
                <li>3. Add your desired products to the cart.</li>
                <li>
                  4. Enter the code TECHSAVVY at checkout to apply your
                  discount. Don’t miss out on this opportunity to upgrade your
                  tech and stay ahead of the game. This exclusive offer is valid
                  until 30th July, so act fast!
                </li>
              </ol>
              <Text className="mt-7 text-sm text-neutral-dark-1">
                Thank you for being a valued customer. We look forward to
                helping you enhance your tech experience. Should you have any
                questions or concerns during this process, do not hesitate to
                reach out to us via email at{" "}
                <span className="text-primary">support@boilerplate.com</span>
              </Text>
            </Section>
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
      </Html>
    </TailwindWrapper>
  );
}

Email.PreviewProps = {
  title: "Stay Ahead: Exclusive Offer on Cutting-Edge Tech!",
  name: "John Doe",
  imageState: true,
  learnMoreUrl: "www.example.com",
} satisfies NewsletterProperties;
