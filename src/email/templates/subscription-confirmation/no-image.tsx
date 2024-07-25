import {
  Button,
  Container,
  Heading,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface SubscriptionConfirmationProperties {
  title?: string;
  username?: string;
  image?: string;
  expireTime?: string;
  star?: string;
  description?: string;
  unsubcribeLink?: string;
  data: Array<{
    key: string;
    value: string;
  }>;
}

export const SubscriptionConfirmation = ({
  title = "",
  username = "",
  image = "",
  star = "",
  description = "",
  unsubcribeLink = "",
  expireTime = "",
  data,
}: SubscriptionConfirmationProperties) => {
  return (
    <Layout>
      <Section className="py-[56px]">
        <Section className="mx-auto flex items-center justify-center"></Section>

        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="my-[40px] flex flex-col items-center justify-center">
            <Heading
              as="h5"
              className="my-0 text-center text-[24px] leading-[28px] text-[#121212]"
            >
              {title}
            </Heading>

            <Section>
              <Text className="text-[16px] font-[600] text-[#121212] md:text-[18px]">
                Hi {username},
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {description}
              </Text>
            </Section>

            <Section className="">
              <ul className="list-none pl-0">
                {data?.map((userData, index) => {
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
                          {userData.value}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Section>
          </Section>
        </Container>

        <Section className="w-full bg-[#F97316] py-[39px] text-center text-[#FAFAFA]">
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Text className="my-0 text-[18px] md:text-[24px]">
              The estimated expiry date
            </Text>
            <Heading as="h2" className="my-0 text-[28px] md:text-[44px]">
              {expireTime}
            </Heading>
          </Container>
        </Section>

        <Section className="text-center">
          <Container className="mb-[40px] max-w-[680px] px-[48px] md:px-0">
            <Text className="text-left leading-[19px] text-[#525252] md:text-[16px]">
              If you have any questions or need further assistance, please don’t
              hesitate to reach out to our customer{" "}
              <Link className="text-[#F97316]" href="/support">
                support
              </Link>{" "}
              team or send a mail to us on{" "}
              <Link className="text-[#F97316]" href="/">
                boilerplate@gmail.com.
              </Link>{" "}
              We look forward to providing you with an exceptional experience.
              Thank you for choosing our product!
            </Text>
          </Container>
          <Button
            className="rounded-[8px] bg-[#F97316] px-[2rem] py-[16px] text-[#FAFAFA]"
            href={unsubcribeLink}
          >
            Learn More
          </Button>
        </Section>
        <Section className="mt-[40px]">
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Text className="font-[600] text-[#121212]">
              Regards,
              <br />
              Boilerplate
            </Text>
          </Container>
        </Section>
      </Section>
    </Layout>
  );
};

SubscriptionConfirmation.PreviewProps = {
  title: "Subscription Confirmation",
  username: "John Doe",
  image: "https://imgur.com/3p3JubF.png",
  star: "https://i.imgur.com/bmprMwh.png",
  expireTime: "17th September, 2024",
  unsubcribeLink: "",
  description:
    "Your payment was processed successfully. Thank you for subscribing to our Bi-monthly feature! We’re excited to have you on board. You’ll receive a separate receipt via email. Below are the details of your subscription:",
  data: [
    {
      key: "Email Address",
      value: "johndoe@gmail.com",
    },
    {
      key: "Subscription Plan",
      value: "Bi-monthly Feature",
    },
    {
      key: "Cost",
      value: "$20.89",
    },
    {
      key: "Duration",
      value: "2 Months",
    },
    {
      key: "Subscription Date",
      value: "17th July, 2024",
    },
  ],
} as SubscriptionConfirmationProperties;

export default SubscriptionConfirmation;
