import {
  Button,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

// import CustomButton from "~/components/common/Button/button";
import EmailResetPasswordLayout from "~/components/layouts/EmailResetPassword/emailresetpasswordlayout";

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

      <EmailResetPasswordLayout>
        <Text className="my-14 text-center text-2xl font-bold">
          Reset Your Password
        </Text>
        <Text className="mb-4">Hi {name},</Text>
        <Text className="mb-4">
          You recently requested to reset your password. If you did not make
          this request, you can ignore this email.
        </Text>
        <Text className="mt-4">
          To reset your password, please click the button below.
        </Text>
        <Section className="text-center">
          <Button
            href={resetLink}
            className="w-56 rounded bg-[#F97316] px-4 py-2 font-medium text-background text-white"
          >
            Reset Password
          </Button>
        </Section>

        <Text className="mt-8">
          Regards,
          <br />
          Boilerplate Team
        </Text>
      </EmailResetPasswordLayout>
    </Html>
  );
}

ResetPasswordEmail.PreviewProps = {
  name: "John Doe",
  resetLink: "https://example.com/reset-password",
} satisfies IProperties;
