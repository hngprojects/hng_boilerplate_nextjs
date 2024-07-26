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

import Layout from "../_components/layout/layout";

interface SubscriptionCancelConfirmationProperties {
  title: string;
  username: string;
  image: string;
  expireTime: string;
  star: string;
  description: string;
  link: string;
  data: Array<{
    key: string;
    value: string;
  }>;
}

export const SubscriptionCancelConfirmation = ({
  title,
  username,
  image,
  star,
  description,
  link,
  data,
}: SubscriptionCancelConfirmationProperties) => {
  return (
    <Layout>
      <Preview>{username}, subscription cancelled</Preview>
      <Section className="my-[56px]">
        <Section className="mx-auto flex items-center justify-center md:w-[178px]">
          <Img src={image} alt="hello" className="h-[100%] w-[100%]" />
        </Section>

        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="my-[40px] flex flex-col items-center justify-center">
            <Heading
              as="h5"
              className="my-0 mb-[56px] text-center text-[24px] leading-[28px] text-[#121212]"
            >
              {title}
            </Heading>

            <Section>
              <Text className="my-0 text-[16px] font-[600] text-[#121212] md:text-[18px]">
                Hi {username},
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {description}
              </Text>
            </Section>
            <Section className="">
              <ul className="m-0 list-none pl-0">
                {data?.map((userData, index) => {
                  return (
                    <li
                      key={index}
                      className="mt-[1rem] flex items-start text-[14px] md:text-[16px]"
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
          </Section>
          <Section className="text-center">
            <Text className="my-0 text-left leading-[19px] text-[#525252] md:text-[16px]">
              If you have any questions or need further assistance, please don’t
              hesitate to reach out to our customer{" "}
              <Link className="text-[#F97316]" href="/support">
                support
              </Link>{" "}
              team or send a mail to us on{" "}
              <Link className="text-[#F97316]" href="/">
                boilerplate@gmail.com.
              </Link>{" "}
              Thank you for being a part of our community. We hope to serve you
              again in the future!
            </Text>

            <Section className="mt-[32px] w-[100%] text-center">
              <Container className="mb-[40px] max-w-[680px]">
                <Button
                  target={"_blank"}
                  className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                  href={link}
                >
                  Proceed to Account
                </Button>
              </Container>
            </Section>
          </Section>
        </Container>

        <Section className="mt-[40px]">
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
};

SubscriptionCancelConfirmation.PreviewProps = {
  title: "Subscription Cancellation Confirmation",
  username: "John Doe",
  image: "https://imgur.com/K5yvea6.png",
  star: "https://i.imgur.com/bmprMwh.png",
  expireTime: "17th September, 2024",
  link: "www.boilerplate.com",
  description:
    "We regret to inform you that your subscription to Bi-monthly features has been cancelled. We appreciate your support and hope you’ve enjoyed our services during your subscription period.",
  data: [
    {
      key: "Subscription ID",
      value: "123456",
    },
    {
      key: "Subscription Plan",
      value: "Bi-monthly Feature",
    },
    {
      key: "Cancellation Date",
      value: "17th July, 2024",
    },
  ],
} satisfies SubscriptionCancelConfirmationProperties;

export default SubscriptionCancelConfirmation;
