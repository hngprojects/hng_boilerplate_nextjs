import {
    Body,
    Column,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Button,
    Text,
    Row, } from "@react-email/components";

import Tailwindwrapper from "~/email/templates/_components/tailwindWrapper";

interface IProperties {
    name: string;
}

export default function Email(properties: IProperties) {
    const { name } = properties;

    return (
        <Html>
            <Head />
            <Preview>{`Incoming Account Deactivation for ${name}`}</Preview>

            <Tailwindwrapper>
                <Img src="cat.jpg" alt="Deactivation logo" width="300" height="300" />
                <Heading className="">Account Deactivation In  <span className="">Two Days!</span></Heading>
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
