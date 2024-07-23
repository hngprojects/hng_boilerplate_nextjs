import {
  Button,
  Column,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import TailwindWrapper from "../_tailwindWrapper";

interface IProperties {
  name: string;
}

export default function Email(properties: IProperties) {
  const { name } = properties;

  return (
    <TailwindWrapper>
      <Html>
        <Head />
        <Preview>Password Reset for {name}</Preview>
        <Column align="center" className="px-14">
          <Section className="w-full max-w-[678px] py-12 md:py-14">
            <Heading
              as="h1"
              className="text-center text-[20px] text-[#0A0A0A] md:text-2xl"
            >
              Email Verification
            </Heading>
            <Section>
              <Heading
                as="h2"
                className="mb-8 text-left text-base text-[#111111] md:text-lg"
              >
                Hi John Doe,
              </Heading>
              <Text className="mb-7 text-justify text-sm text-[#434343] md:text-base">
                Thanks for registering your account with us Boilerplate. Before
                we get started, we just need to confirm that this is you.
              </Text>
              <Text className="mb-7 text-justify text-sm text-[#434343] md:text-base">
                This link will expire 30 minutes after this email has been sent.
                If you did not make this request, you can ignore this email.
              </Text>
              <Text className="text-justify text-sm text-[#434343] md:text-base">
                To verify your email, please click the button below:
              </Text>
              <Section className="py-7">
                <Column align="center">
                  <Button
                    className="mx-auto w-full rounded-[8px] bg-[#F97316] px-10 py-3 text-base font-medium text-[#FAF8F8] md:w-auto"
                    href="https://hello.com"
                  >
                    Verify Account
                  </Button>
                </Column>
              </Section>
              <Text className="text-xs text-[#0F172A] md:text-base">
                Or copy this link:
                <Link
                  className="text-[Primary/Primary Color] underline"
                  href="https://carbonated-umbra-a35.notion.site/Language-Learning-AI-game-608b687875cf4b48a9a0194ee82ae17d"
                >
                  https://carbonated-umbra-a35.notion.site/Language-Learning-AI-game-608b687875cf4b48a9a0194ee82ae17d
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
          </Section>
        </Column>
      </Html>
    </TailwindWrapper>
  );
}

Email.PreviewProps = {
  name: "John Doe",
} satisfies IProperties;
