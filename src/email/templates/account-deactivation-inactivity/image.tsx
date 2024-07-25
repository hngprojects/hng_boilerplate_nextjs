import {
  Button,
  Container,
  Heading,
  Img,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface AccountDeactivationProperties {
  title?: string;
  username?: string;
  image?: string;
  expireTime?: string;
  star?: string;
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
  star = "",
  description = "",
  link = "",
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
              To keep your account active, simply log in before the deactivation
              date. However, if you no longer wish to use your account, no
              further action is needed on your part.
            </Text>
          </Container>
          <Section className="text-center">
            <Section className="w-[100%] text-center">
              <Container className="mb-[40px] max-w-[680px] px-[48px] md:px-0">
                <Button
                  target={"_blank"}
                  className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                  href={link}
                >
                  Activate My Account
                </Button>
              </Container>
            </Section>
          </Section>
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
  title: "Account Deactivated Due To Inactivity",
  username: "John Doe",
  image: "https://imgur.com/WQaP91T.png",
  star: "https://i.imgur.com/bmprMwh.png",
  expireTime: "17th September, 2024",
  link: "",
  description:
    "We hope this email finds you well. We noticed that you haven't logged into your Boilerplate account for quite some time. As part of our ongoing efforts to maintain a secure and efficient service, we will be deactivating inactive accounts.",
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
} as AccountDeactivationProperties;

export default AccountDeactivation;
