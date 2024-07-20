"use client";

import { Container, Heading, Text } from "@react-email/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import TailwindWrapper from "../_components/tailwindWrapper";

type NewLinkSentProperties = {
  title: string;
  name: string;
  image: string;
  activationLink: string;
};

const NewLinkSent: React.FC<NewLinkSentProperties> = ({
  title,
  name,
  image,
  activationLink,
}) => {
  return (
    <TailwindWrapper>
      <Container className="mx-auto my-auto p-5">
        <div className="flex flex-col gap-14">
          <div>
            <Image
              src={image}
              alt="Email header"
              className="mx-auto max-w-full"
              width={298.73}
              height={211.46}
            />
          </div>
          <Heading className="text-center text-2xl font-bold">{title}</Heading>
          <div className="flex flex-col gap-8">
            <Text className="">Hi {name},</Text>
            <div className="flex flex-col gap-[28px]">
              <span className="text-base font-normal leading-[19.36px]">
                We have sent you a new activation link for your Boilerplate
                account. Please click the button below to activate your account:
              </span>
              <div className="mb-4 text-center">
                <Link
                  href={activationLink}
                  className="inline-block cursor-pointer rounded bg-orange-500 px-10 py-[12.5px] text-base text-[#FAF8F8] no-underline"
                >
                  Activate My Account
                </Link>
              </div>
            </div>
          </div>
          <span className="text-sm font-medium">
            Regards,
            <br />
            Boilerplate
          </span>
        </div>
      </Container>
    </TailwindWrapper>
  );
};

const NewLinkSentPage: React.FC = () => {
  const properties = {
    title: "New Activation Link Sent",
    name: "John Doe",
    image: "/new-link-sent-icon.svg",
    activationLink: "https://github.com",
  };

  return <NewLinkSent {...properties} />;
};

export default NewLinkSentPage;
