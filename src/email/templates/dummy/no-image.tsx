import { Preview, Text } from "@react-email/components";

import Layout from "../_components/layout/layout";

interface IProperties {
  name: string;
}

export default function Email(properties: IProperties) {
  const { name } = properties;

  return (
    <Layout>
      <Preview>Password Reset for {name}</Preview>
      <Text className="mb-6 mt-8">Regards, Boilerplate Team</Text>
    </Layout>
  );
}

Email.PreviewProps = {
  name: "John Doe",
} satisfies IProperties;
