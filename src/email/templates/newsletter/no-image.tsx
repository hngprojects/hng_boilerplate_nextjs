import {
  Button,
  Container,
  Heading,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../../layout/layout";

interface IProperties {
  mainHeading: string;
  description: string;
  username: string;
  offer: string;
  link: string;
  star: string;
  storeData: Array<{
    key: string;
    value: string;
  }>;
  boilerData: Array<{
    key: string;
    value: string;
  }>;
}

export default function Newsletter(properties: IProperties) {
  const {
    link,
    star,
    storeData,
    boilerData,
    username,
    mainHeading,
    description,
  } = properties;

  return (
    <Layout>
      <Preview>t{username}, our Newletter.</Preview>
      <Section className="w-full max-w-[678px] py-[56px] md:py-14">
        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="my-[40px] flex flex-col items-center justify-center">
            <Section className="mb-[56px] text-center">
              <Heading
                as="h5"
                className="my-0 text-center text-[24px] leading-[28px] text-[#121212]"
              >
                {mainHeading}
              </Heading>
            </Section>

            <Section>
              <Text className="text-[16px] font-[600] text-[#121212] md:text-[18px]">
                Hi {username},
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {description}
              </Text>
            </Section>

            <Section className="">
              <Heading
                as="h6"
                className="mb-[20px] mt-[16px] text-[16px] text-[#121212] md:text-[18px]"
              >
                What’s in Store
              </Heading>
              <ul className="list-none pl-0">
                {storeData?.map((userData, index) => {
                  return (
                    <li
                      key={index}
                      className="my-[1rem] flex items-start text-[14px] md:text-[16px]"
                    >
                      <div className="mr-2 flex-shrink-0">
                        <Img
                          src={star}
                          alt="star"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div>
                        <span className="font-[600] text-[#121212]">
                          {userData.key}:
                        </span>
                        <span className="leading-[19.36px] text-[#525252]">
                          {" "}
                          {userData.value}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Section>
            <Section>
              <Text className="text-[16px] font-[600] text-[#121212] md:text-[18px]">
                Exclusive Savings
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                For a limited time, enjoy 25% off your purchase of any of these
                groundbreaking products. Simply use the code TECHSAVVY at
                checkout to unlock your savings.
              </Text>
            </Section>
            <Section className="">
              <Heading
                as="h6"
                className="mb-[20px] mt-[16px] text-[16px] text-[#121212] md:text-[18px]"
              >
                Why Choose Boilerplate?
              </Heading>
              <ul className="list-none pl-0">
                {boilerData?.map((userData, index) => {
                  return (
                    <li
                      key={index}
                      className="my-[1rem] flex items-start text-[14px] md:text-[16px]"
                    >
                      <div className="mr-2 flex-shrink-0">
                        <Img
                          src={star}
                          alt="star"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div>
                        <span className="font-[600] text-[#121212]">
                          {userData.key}:
                        </span>
                        <span className="leading-[19.36px] text-[#525252]">
                          {" "}
                          {userData.value}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Section>
            <Text className="mt-0 text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
              Follow{" "}
              <Link className="text-[#F97316]" href="/blog">
                our Blog
              </Link>{" "}
              for more information.
            </Text>
            <Section className="">
              <Heading
                as="h6"
                className="mt-[16px] text-[16px] text-[#121212] md:text-[18px]"
              >
                How To Redeem Your Offer
              </Heading>
              <ol className="m-0 pl-4 text-[14px] text-[#525252] md:text-[16px]">
                <li className="mb-1">
                  Recover your account here:{" "}
                  <Link
                    className="text-[#F97316]"
                    href={`https://www.boilerplate.com`}
                  >
                    www.boilerplate.com
                  </Link>
                </li>
                <li className="mb-1">
                  Browse our selection of cutting-edge tech.
                </li>
                <li className="mb-1">Add your desired products to the cart.</li>
                <li className="mb-1">
                  Enter the code TECHSAVVY at checkout to apply your discount.
                  Don’t miss out on this opportunity to upgrade your tech and
                  stay ahead of the game. This exclusive offer is valid until
                  30th July, so act fast!
                </li>
              </ol>
            </Section>
            <Text className="text-justify text-[14px] leading-[24px] text-[#525252] md:text-[16px]">
              Thank you for being a valued customer. We look forward to helping
              you enhance your tech experience. Should you have any questions or
              concerns during this process, do not hesitate to reach out to us
              via email at{" "}
              <Link
                className="text-[#F97316]"
                href="http://support@boilerplate.com"
              >
                support@boilerplate.com
              </Link>
            </Text>
            <Section className="mt-[32px] w-[100%] text-center">
              <Container className="mb-[40px] max-w-[680px] md:px-0">
                <Button
                  target={"_blank"}
                  className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                  href={link}
                >
                  Learn More
                </Button>
              </Container>
            </Section>
          </Section>
        </Container>
        <Section className="">
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Text className="my-0 font-[600] text-[#121212]">
              Regards,
              <br />
              Boilerplate
            </Text>
          </Container>
        </Section>
      </Section>
    </Layout>
  );
}

Newsletter.PreviewProps = {
  offer:
    "Enjoy special promotions and discounts available only to our members.",
  link: "www.boilerData.com",
  username: "John Doe",
  mainHeading: "Stay Ahead: Exclusive Offer on Cutting-Edge Tech!",
  star: "https://i.imgur.com/bmprMwh.png",
  description:
    "We're excited to bring you an exclusive offer that will keep you ahead of the curve! At Boilerplate, we pride ourselves on providing the latest and greatest in technology, and this time, we have something truly special for you.",

  storeData: [
    {
      key: "The Ultimate Smartwatch",
      value:
        "Experience the future with this state-of-the-art device, designed to enhance your daily life.",
    },
    {
      key: "The High-Performance Laptop",
      value:
        "A perfect blend of innovation and performance, ideal for both work and play.",
    },
    {
      key: "The Wireless Noise-Cancelling Headphones",
      value:
        "Sleek, powerful, and user-friendly, this product is a must-have for any tech enthusiast.",
    },
  ],
  boilerData: [
    {
      key: "Cutting-Edge Technology",
      value:
        " We source the most innovative products to ensure you have access to the best.",
    },
    {
      key: "Unmatched Quality",
      value:
        "Our products undergo rigorous testing to meet the highest standards.",
    },
    {
      key: "Exceptional Customer Support",
      value:
        "Our team is always here to assist you with any questions or concerns.",
    },
  ],
} satisfies IProperties;
