import {
  Container,
  Heading,
  Img,
  Link,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface AccountDeactivationProperties {
  title?: string;
  username?: string;
  image?: string;
  expireTime?: string;
  bullet?: string;
  description?: string;
  link?: string;
  data: Array<{
    key: string;
    value: string;
  }>;
}

export const AccountDeactivation = ({
  title = "",
  username = "",
  image = "",
  bullet = "",
  description = "",
  data,
}: AccountDeactivationProperties) => {
  return (
    <Layout>
      <Section className="py-[56px]">
        <Section className="mx-auto flex items-center justify-center md:w-[178px]">
          <Img src={image} alt="hello" className="h-[100%] w-[100%]" />
        </Section>
        <Section className="mx-auto flex items-center justify-center"></Section>

        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="mt-[40px] flex flex-col items-center justify-center">
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
                      className="items-bullett my-[1rem] flex items-center text-[14px] md:text-[16px]"
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

AccountDeactivation.PreviewProps = {
  title: "Account Successfully Deactivated",
  username: "John Doe",
  image: "https://imgur.com/zkXwuyQ.png",
  bullet: "https://imgur.com/Lolu1on.png",
  expireTime: "17th September, 2024",
  link: "",
  description:
    "We wanted to let you know that your Boilerplate account has been successfully deactivated as per your request.",
  data: [
    {
      key: "Account Email",
      value: "johndoe@gmail.com",
    },
    {
      key: "Deactivation Date",
      value: "20th July, 2024 / 11:56pm",
    },
  ],
} as AccountDeactivationProperties;

export default AccountDeactivation;
