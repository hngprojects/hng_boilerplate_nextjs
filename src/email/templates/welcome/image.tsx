import {
  Button,
  Container,
  Heading,
  Img,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface IProperties {
  mainHeading: string;
  subHeading: string;
  welcomeMessage: string;
  username: string;
  offer: string;
  link: string;
  star: string;
}

export default function WelcomeEmail(properties: IProperties) {
  const {
    link,
    star,
    offer,
    username,
    mainHeading,
    subHeading,
    welcomeMessage,
  } = properties;

  return (
    <Layout>
      <Section className="w-full max-w-[678px] py-[56px] md:py-14">
        <Section className="mx-auto flex items-center justify-center md:w-[534px]">
          <Img
            src="https://imgur.com/0A9w5YT.png"
            alt="marketing"
            className="h-[100%] w-[100%]"
          />
        </Section>

        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="my-[40px] flex flex-col items-center justify-center">
            <Section className="mb-[56px] text-center">
              <Heading
                as="h5"
                className="my-0 text-center text-[24px] leading-[28px] text-[#121212]"
              >
                {mainHeading}
              </Heading>
              <Text className="my-[12px] text-[1rem] md:text-[18px]">
                {subHeading}
              </Text>
            </Section>

            <Section>
              <Text className="text-[16px] font-[600] text-[#121212] md:text-[18px]">
                Hi {username},
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {welcomeMessage}
              </Text>
            </Section>

            <Section className="">
              <Heading
                as="h6"
                className="mb-[20px] mt-[16px] text-[16px] text-[#121212] md:text-[18px]"
              >
                Here’s what you can look forward to
              </Heading>
              <ul className="list-none pl-0">
                <li className="flex items-start text-[14px] md:text-[16px]">
                  <div className="mr-2 flex-shrink-0">
                    <Img src={star} alt="star" className="h-[24px] w-[24px]" />
                  </div>
                  <div>
                    <span className="font-[600] text-[#121212]">
                      Exclusive Offers:{" "}
                    </span>
                    <span className="leading-[19.36px] text-[#525252]">
                      {offer}
                    </span>
                  </div>
                </li>
                <li className="mt-[20px] flex items-start text-[14px] md:text-[16px]">
                  <div className="mr-2 flex-shrink-0">
                    <Img src={star} alt="star" className="h-[24px] w-[24px]" />
                  </div>
                  <div>
                    <span className="font-[600] text-[#121212]">
                      Exclusive Offers:{" "}
                    </span>
                    <span className="leading-[19.36px] text-[#525252]">
                      {offer}
                    </span>
                  </div>
                </li>
                <li className="mt-[20px] flex items-start text-[14px] md:text-[16px]">
                  <div className="mr-2 flex-shrink-0">
                    <Img src={star} alt="star" className="h-[24px] w-[24px]" />
                  </div>
                  <div>
                    <span className="font-[600] text-[#121212]">
                      Exclusive Offers:{" "}
                    </span>
                    <span className="leading-[19.36px] text-[#525252]">
                      {offer}
                    </span>
                  </div>
                </li>
              </ul>
            </Section>
            <Section className="mt-[32px] w-[100%] text-center">
              <Container className="mb-[40px] max-w-[680px] md:px-0">
                <Button
                  target={"_blank"}
                  className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                  href={link}
                >
                  Learn More About us
                </Button>
              </Container>
            </Section>
          </Section>
        </Container>
        <Section className="">
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
}

WelcomeEmail.PreviewProps = {
  offer:
    "Enjoy special promotions and discounts available only to our members.",
  link: "http://localhost:3001/about-us",
  username: "John Doe",
  mainHeading: "Welcome to Boilerplate",
  subHeading: "Thanks for signing up",
  star: "https://i.imgur.com/bmprMwh.png",
  welcomeMessage:
    "We're thrilled to have you join us. Experience quality and innovation like never before. Our product is made to fit your needs and make your life easier.",
} as IProperties;
