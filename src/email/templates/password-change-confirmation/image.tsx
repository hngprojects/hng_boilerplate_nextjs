import {
  Container,
  Heading,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface PasswordChangeConfirmation {
  title?: string;
  username?: string;
  image?: string;
  description?: string;
  descriptionTwo?: string;
  link?: string;
}

export const PasswordReset = ({
  title = "",
  username = "",
  image = "",
  description = "",
  descriptionTwo = "",
}: PasswordChangeConfirmation) => {
  return (
    <Layout>
      <Section className="py-[56px]">
        <Section className="mx-auto flex items-center justify-center md:w-[316px]">
          <Img src={image} alt="hello" className="h-[100%] w-[100%]" />
        </Section>
        <Section className="mx-auto flex items-center justify-center"></Section>

        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="mt-[56px] flex flex-col items-center justify-center">
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
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {descriptionTwo}
              </Text>
            </Section>
            <ol className="m-0">
              <li className="my-[1rem]">
                Recover your account here:
                <Link
                  className="text-[#F97316]"
                  href={`https://login.[companyname].com/forgot`}
                >
                  https://login.boilerplate.com/forgot
                </Link>
              </li>
              <li className="my-[1rem]">
                Review your phone numbers and email addresses and remove the
                ones that don’t belong to you once you gain access to your
                account.
              </li>
            </ol>
          </Section>
        </Container>
        <Section className="mt-[28px]">
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

PasswordReset.PreviewProps = {
  title: "Password Reset Complete",
  username: "John Doe",
  image: "https://imgur.com/zkXwuyQ.png",
  link: "/",
  description:
    "The password for your Boilerplate account has been successfully changed. You can now continue to access your account as usual.",
  descriptionTwo:
    "If this wasn't done by you, please immediately reset the password to your Boilerplate account by following the steps below:",
} as PasswordChangeConfirmation;

export default PasswordReset;
