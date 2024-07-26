import {
  Button,
  Container,
  Heading,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface PasswordResetProperties {
  title?: string;
  username?: string;
  image?: string;
  description?: string;
  link?: string;
}

export const PasswordReset = ({
  title = "",
  username = "",
  description = "",
  link = "",
}: PasswordResetProperties) => {
  return (
    <Layout>
      <Section className="py-[56px]">
        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="flex flex-col items-center justify-center">
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
          </Section>
        </Container>

        <Section className="text-center">
          <Container className="mb-[40px] max-w-[680px] px-[48px] md:px-0">
            <Text className="text-left leading-[19px] text-[#525252] md:text-[16px]">
              To reset your password, please click the button below.
            </Text>
          </Container>
          <Section className="mt-[32px] w-[100%] text-center">
            <Container className="mb-[40px] max-w-[680px] px-[48px] md:px-0">
              <Button
                target={"_blank"}
                className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                href={link}
              >
                Reset Password
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

PasswordReset.PreviewProps = {
  title: "Reset Your Password",
  username: "John Doe",
  image: "https://imgur.com/uPk3aq2.png",
  link: "/",
  description:
    "You recently requested to reset your password.  If you did not make this request, you can ignore this email.",
} as PasswordResetProperties;

export default PasswordReset;
