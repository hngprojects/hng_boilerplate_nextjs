import {
  Button,
  Container,
  Heading,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface AccountActivationSuccessfulProperties {
  title: string;
  username: string;
  description: string;
  descriptionOne: string;
  descriptionTwo: string;
  link: string;
}

const AccountActivationSuccessful = ({
  title,
  username,
  description,
  descriptionOne,
  descriptionTwo,
  link,
}: AccountActivationSuccessfulProperties) => {
  return (
    <Layout>
      <Preview>t{username}, your account was activated successfully</Preview>
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
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {descriptionTwo}
              </Text>
            </Section>
            <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
              Thank you for joining Boilerplate!
            </Text>
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

AccountActivationSuccessful.PreviewProps = {
  title: "Your Account is Now Active!",
  username: "John Doe",
  link: "www.boilerplate.com",
  description:
    "Congratulations! Your account with Boilerplate is now active and ready to use.",
  descriptionOne:
    "We're thrilled to have you as part of our community and look forward to helping you make the most out of your experience with us.",
  descriptionTwo:
    "You can now log in and start exploring all the features and benefits we have to offer. ",
} satisfies AccountActivationSuccessfulProperties;

export default AccountActivationSuccessful;
