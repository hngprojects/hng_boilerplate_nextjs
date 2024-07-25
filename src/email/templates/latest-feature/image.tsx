import {
  Button,
  Column,
  Container,
  Heading,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface IProperties {
  title: string;
  username: string;
  image: string;
  statementOne: string;
  statementTwo: string;
  statementThree: string;
  buttonTitle: string;
  link: string;
}

export default function Email(properties: IProperties) {
  const {
    title,
    username,
    image,
    statementOne,
    statementTwo,
    statementThree,
    link,
  } = properties;

  return (
    <Layout>
      <Preview>Password Reset for {username}</Preview>
      <Section className="py-[56px]">
        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="mb-10 md:mb-14">
            <Column align="center">
              <div className="md:h[178px] h-[142px] w-full max-w-[142px] md:max-w-[178px]">
                <Img
                  src={image}
                  alt="email verification"
                  width="178"
                  height="178"
                  className="h-full w-full object-contain"
                />
              </div>
            </Column>
          </Section>
          <Heading
            as="h1"
            className="mb-[56px] text-center text-[20px] text-[#0A0A0A] md:text-2xl"
          >
            {title}
          </Heading>
          <Section>
            <Heading
              as="h2"
              className="mb-8 text-left text-base text-[#111111] md:text-lg"
            >
              Hi John Doe,
            </Heading>
            <Text className="mb-7 text-justify text-sm text-[#434343] md:text-base">
              {statementOne}
            </Text>
            <Text className="mb-7 text-justify text-sm text-[#434343] md:text-base">
              {statementTwo}
            </Text>
            <Text className="text-justify text-sm text-[#434343] md:text-base">
              {statementThree}
            </Text>
            <Section className="text-center">
              <Section className="mt-[32px] w-[100%] text-center">
                <Container className="mb-[40px] max-w-[680px] md:px-0">
                  <Button
                    target={"_blank"}
                    className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                    href={link}
                  >
                    Verify Account
                  </Button>
                </Container>
              </Section>
            </Section>
            <Text className="text-xs text-[#0F172A] md:text-base">
              Or copy this link:
              <Link
                className="text-[Primary/Primary Color] underline"
                href={link}
              >
                {link}
              </Link>
            </Text>
          </Section>
          <Section>
            <Heading as="h3" className="text-sm font-medium text-[#111111]">
              Regards,
            </Heading>
            <Heading as="h3" className="text-sm font-medium text-[#111111]">
              Boilerplate
            </Heading>
          </Section>
        </Container>
      </Section>
    </Layout>
  );
}

Email.PreviewProps = {
  title: "Introducing Our Latest Feature:",
  username: "John Doe",
  image: "https://i.imgur.com/p66l3SQ.png",
  statementOne:
    "is designed to help you create shared spaces for collaboration. Invite team members, share files, and work together seamlessly. From project planning to brainstorming sessions, collaborative spaces foster productivity.. Whether you’re a seasoned user or just getting started, this enhancement will transform your experience.",
  statementTwo:
    "Collaborative Spaces allow you to create dedicated areas for teamwork. Whether it’s a project, brainstorming session, or ongoing discussion, team members can collaborate seamlessly within these spaces.",
  statementThree:
    "With Collaborative Spaces, accountability becomes clearer. Each team member’s contributions are visible within the shared space.",
  link: "https://i.imgur.com/jBHlv7Y.png",
} as IProperties;
