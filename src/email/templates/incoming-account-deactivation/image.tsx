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
                <div className="container flex flex-col justify-center items-center bg-white ">
                    <Img src="deactivation-logo.png" alt="Deactivation logo" className="w-[16.7%] " />
                    <Heading as="h4" className="text-center text-2xl  py-14 text-[#0A0A0A] font-semibold my-0">Account Deactivation In  <span className="text-[#DC2626]">Two Days!</span></Heading>
                    <main>
                        <h2 className="text-[#111111] dark:text-gray-200 text-lg font-semibold my-0 pb-8">Hi {name},</h2>
                        <section>
                        <p className="text-base font-normal text-[#111111] my-0 pb-7">
                            We hope this email finds you well. We noticed that you haven't logged into your Boilerplate account for quite some time. As part of our ongoing efforts to maintain a secure and efficient service, we will be deactivating inactive accounts.
                        </p>

                        
                            <span className="font-semibold"> Your deactivation deatails:</span>
                            <ul className="my-0 pb-7">
                                <li className="text-[#FDC7A2] pt-5 pb-5">
                                    <span className="font-semibold text-base text-[#0A0A0A]">Account Email: </span>
                                    <span className="text-base font-normal text-[#0A0A0A]">johndoe@gmail.com</span>
                                </li>
                                <li className=" text-[#FDC7A2] pb-5">
                                    <span className="font-semibold text-base text-[#0A0A0A]">Last Active: </span>
                                    <span className="text-base font-normal text-[#0A0A0A]">17th June, 2024 / 11:56pm</span>
                                </li>
                                <li className="text-[#FDC7A2] ">
                                    <span className="font-semibold text-base text-[#0A0A0A]">Deactivation Date: </span>
                                    <span className="text-base font-normal text-[#0A0A0A]">20th July, 2024 / 11:56pm</span>
                                </li>
                            </ul>
                        </section>
                        <span className="text-base text-[#111111] pb-7">To keep your account active, simply log in before the deactivation date. However, if you no longer wish to use your account, no further action is needed on your part.</span>
                    </main>

                    <Button
                        href=""
                        className="bg-[#F97316] mt-7 mb-14 py-2 px-10 text-[#FAF8F8] rounded-lg"
                    >
                        Access My Account
                    </Button>
                    <div className="flex flex-col gap-2 ">
                        <span className="text-[#111111]">Regards,</span>
                        <span className="text-[#111111]">Boilerplate</span>
                    </div>

                </div>
               
            </Tailwindwrapper>
        </Html>
    );
}

Email.PreviewProps = {
    name: "John Doe",
} satisfies IProperties;
