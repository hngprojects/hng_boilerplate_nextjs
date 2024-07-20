import { Button, Head, Html, Preview, Text } from "@react-email/components";

import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";

interface IProperties {
  name: string;
}

export default function Email(properties: IProperties) {
  const { name } = properties;

  return (
    <Html>
      <Head />
      <Preview>{`Password Reset for ${name}`}</Preview>

      <Tailwindwrapper>
        <Text>Hi there, {name}!</Text>
        <Button
          href="https://example.com"
          className="bg-black px-5 py-3 text-white"
        >
          Click me
        </Button>
      </Tailwindwrapper>
    </Html>
  );
}

Email.PreviewProps = {
  name: "John Doe",
} satisfies IProperties;
