import {
  Container,
  Heading,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface AccountDeactivationInactivityProperties {
  title?: string;
  username?: string;
  expireTime?: string;
  bullet?: string;
  description?: string;
  link?: string;
  data: Array<{
    key: string;
    value: string;
  }>;
}

export const AccountDeactivationInactivity = ({
  title = "",
  username = "",
  bullet = "",
  description = "",
  data,
}: AccountDeactivationInactivityProperties) => {
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
              <Text className="my-0 text-[16px] font-[600] text-[#121212] md:text-[18px]">
                Hi {username},
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {description}
              </Text>
            </Section>

            <Section className="my-[28px]">
              <Text className="my-0 text-[16px] font-[600] text-[#121212] md:text-[18px]">
                Your deactivation deatails:
              </Text>
              <ul className="list-none pl-0">
                {data?.map((userData, index) => {
                  return (
                    <li
                      key={index}
                      className="items-bullet my-[1rem] flex items-center text-[14px] md:text-[16px]"
                    >
                      <div className="mr-2 flex-shrink-0">
                        <Img
                          src={bullet}
                          alt="bullet"
                          className="h-[10px] w-[10px]"
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
        </Container>

        <Section className="text-center">
          <Container className="mb-[28px] max-w-[680px] px-[48px] md:px-0">
            <Text className="my-0 text-left leading-[19px] text-[#525252] md:text-[16px]">
              If you would like to re-activate your account, you can easily do
              so by contacting our support team via the details below.
            </Text>
            <Text className="my-[28px] text-left leading-[19px] text-[#525252] md:text-[16px]">
              Give us a call at{" "}
              <span className="font-[600]">(+234)-456-7890 </span> or shoot us
              an email at{" "}
              <Link
                href="https://support@llaihng.com"
                className="font-[600] text-[#525252] underline"
              >
                support@llaihng.com
              </Link>
            </Text>
            <Text className="my-0 text-left leading-[19px] text-[#525252] md:text-[16px]">
              We value your membership and would love to have you back.
            </Text>
          </Container>
        </Section>
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

AccountDeactivationInactivity.PreviewProps = {
  title: "Account Deactivated Due To Inactivity",
  username: "John Doe",
  bullet: "https://imgur.com/Lolu1on.png",
  expireTime: "17th September, 2024",
  link: "",
  description:
    "We hope this email finds you well. We wanted to inform you that your Boilerplate account has been deactivated due to a prolonged period of inactivity.",
  data: [
    {
      key: "Account Email",
      value: "johndoe@gmail.com",
    },
    {
      key: "Last Active",
      value: "17th June, 2024 / 11:56pm",
    },
    {
      key: "Deactivation Date",
      value: "20th July, 2024 / 11:56pm",
    },
  ],
} as AccountDeactivationInactivityProperties;

export default AccountDeactivationInactivity;
