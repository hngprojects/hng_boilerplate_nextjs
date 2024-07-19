import {
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";

interface IProperties {
  name: string;
  resetLink: string;
}

export default function ResetPasswordEmail(properties: IProperties) {
  const { name, resetLink } = properties;

  return (
    <Html>
      <Head />
      <Preview>Reset Your Password</Preview>

      <Tailwindwrapper>
        <Container className="mx-auto max-w-[600px] rounded bg-white p-8">
          <Text className="mb-4 text-2xl font-bold">Reset Your Password</Text>
          <Text className="mb-4">Hi {name},</Text>
          <Text className="mb-4">
            You recently requested to reset your password. Use the button below
            to reset it.
          </Text>
          <Section className="text-center">
            <Button
              href={resetLink}
              className="rounded bg-blue-500 px-6 py-3 font-bold text-white"
            >
              Reset Password
            </Button>
          </Section>
          <Text className="mt-4">
            If you did not request a password reset, you can safely ignore this
            email.
          </Text>
          <Text className="mt-8">
            Regards,
            <br />
            Boilerplate Team
          </Text>
        </Container>
      </Tailwindwrapper>
    </Html>
  );
}

ResetPasswordEmail.PreviewProps = {
  name: "John Doe",
  resetLink: "https://example.com/reset-password",
} satisfies IProperties;
