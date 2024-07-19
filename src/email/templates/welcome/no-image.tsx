import { Button, Html, Text } from "@react-email/components";

interface IProperties {
  name: string;
}

export default function Email(properties: IProperties) {
  const { name } = properties;

  return (
    <Html>
      <Text>Hi there, {name}!</Text>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
        className=""
      >
        Click me
      </Button>
    </Html>
  );
}

Email.PreviewProps = {
  name: "John Doe",
} satisfies IProperties;
