import {
  Button,
  Container,
  Heading,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface EmailVerificationProperties {
  title: string;
  username: string;
  description: string;
  link: string;
}

export const EmailVerification = ({
  title,
  username,
  description,
  link,
}: EmailVerificationProperties) => {
  return (
    <Layout>
      <Preview>t{username}, email verified</Preview>
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
              To verify your email, please click the button below.
            </Text>
          </Container>
          <Section className="w-[100%] text-center">
            <Container className="mb-[40px] max-w-[680px] px-[48px] md:px-0">
              <Button
                target={"_blank"}
                className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                href={link}
              >
                Learn More About us
              </Button>

              <Text className="mt-[40px] text-left">
                Or copy this link:
                <Link
                  className="text-[#F97316]"
                  href={` https://carbonated-umbra-a35.notion.site/Language-Learning-AI-game-608b687875cf4b48a9a0194ee82ae17d`}
                >
                  {" "}
                  https://carbonated-umbra-a35.notion.site/Language-Learning-AI-game-608b687875cf4b48a9a0194ee82ae17d
                </Link>
              </Text>
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

EmailVerification.PreviewProps = {
  title: "Email Verification",
  username: "John Doe",
  link: "/",
  description:
    "Thanks for registering your account with us Boilerplate. Before we get started, we just need to confirm that this is you.",
} satisfies EmailVerificationProperties;

export default EmailVerification;
