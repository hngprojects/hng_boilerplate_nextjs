import {
  Button,
  Container,
  Heading,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface AccountLinkExpiredProperties {
  title?: string;
  username?: string;
  description?: string;
  descriptionOne?: string;
  link?: string;
}

export const AccountLinkExpired = ({
  title = "",
  username = "",
  description = "",
  descriptionOne = "",
  link = "",
}: AccountLinkExpiredProperties) => {
  return (
    <Layout>
      <Section className="py-[56px]">
        <Section className="mx-auto flex items-center justify-center"></Section>

        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="flex flex-col items-center justify-center">
            <Heading
              as="h5"
              className="my-0 mb-[56px] text-center text-[24px] leading-[28px] text-[#121212]"
            >
              {title}
            </Heading>

            <Section>
              <Text className="md:text-[18px]mt-[32px] my-0 text-[16px] font-[600] text-[#121212]">
                Hi {username},
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {description}
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {descriptionOne}
              </Text>
            </Section>
          </Section>
        </Container>

        <Section className="text-center">
          <Section className="mt-[32px] w-[100%] text-center">
            <Container className="mb-[40px] max-w-[680px] px-[48px] md:px-0">
              <Button
                target={"_blank"}
                className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                href={link}
              >
                Send Another Active Link
              </Button>
            </Container>
          </Section>
        </Section>
        <Section className="mt-[28px]">
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

AccountLinkExpired.PreviewProps = {
  title: "Activation Link Expired",
  username: "John Doe",
  image: "https://imgur.com/5KobknJ.png",
  link: "/",
  description:
    "We noticed that your account activation link has expired. For your security, activation links are only valid for a specific time period.",
  descriptionOne:
    "Don’t worry, you can easily request a new activation link by clicking the button below:",
} as AccountLinkExpiredProperties;

export default AccountLinkExpired;
