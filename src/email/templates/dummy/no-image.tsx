import { Head, Html, Preview, Text } from "@react-email/components";

import TailwindWrapper from "~/email/templates/_tailwindWrapper";

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

        <Text className="mb-6 mt-8">Regards, Boilerplate Team</Text>
      </Html>
    </TailwindWrapper>
  );
}

Email.PreviewProps = {
  name: "John Doe",
} satisfies IProperties;
