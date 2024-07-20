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
            
            <Preview>{`Incoming Account Deactivation for ${name}`}</Preview>

            <Tailwindwrapper>
                <Head />
                <div className="container flex flex-col justify-center items-center ">
                    <Img src="cat.jpg" alt="Deactivation logo" className="w-[16.7%] " />
                    <Heading className="text-center">Account Deactivation In  <span className="">Two Days!</span></Heading>
                    <main>
                        <h2 className="text-gray-700 dark:text-gray-200">Hi {name},</h2>
                        <p>
                            We hope this email finds you well. We noticed that you haven't logged into your Boilerplate account for quite some time. As part of our ongoing efforts to maintain a secure and efficient service, we will be deactivating inactive accounts.
                        </p>

                        <section>
                            <span>Your deactivation deatails:</span>
                            <ul>
                                <li>
                                    <span>Account Email: </span>
                                    <span>johndoe@gmail.com</span>
                                </li>
                                <li>
                                    <span>Last Active: </span>
                                    <span>17th June, 2024 / 11:56pm</span>
                                </li>
                                <li>
                                    <span>Deactivation Date: </span>
                                    <span>20th July, 2024 / 11:56pm</span>
                                </li>
                            </ul>
                        </section>
                        <span>To keep your account active, simply log in before the deactivation date. However, if you no longer wish to use your account, no further action is needed on your part.</span>
                    </main>

                    <Button
                        href="https://example.com"
                        className="bg-black px-5 py-3 text-white"
                    >
                        Access My Account
                    </Button>
                </div>
               
            </Tailwindwrapper>
        </Html>
    );
}

Email.PreviewProps = {
    name: "John Doe",
} satisfies IProperties;
