import {
  Button,
  Container,
  Heading,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface AccountVerificationProperties {
  title: string;
  username: string;
  description: string;
  descriptionOne: string;
  link: string;
}

const AccountVerification = ({
  title,
  username,
  description,
  descriptionOne,
  link,
}: AccountVerificationProperties) => {
  return (
    <Layout>
      <Preview>t{username}, Activate your account</Preview>
      <Section className="my-[56px]">
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
                Activate Account
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

AccountVerification.PreviewProps = {
  title: "Activate Your Account",
  username: "John Doe",
  link: "www.boilerplate.com",
  description:
    "We recently detected a login attempt to your account from an unfamiliar device. To ensure the security of your account, we haven't granted access.",
  descriptionOne:
    "To activate your account and secure it, please click the button below:",
} satisfies AccountVerificationProperties;

export default AccountVerification;
