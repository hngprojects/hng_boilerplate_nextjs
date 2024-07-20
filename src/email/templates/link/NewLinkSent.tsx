"use client";

import { Container, Heading } from "@react-email/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <Container className={`mx-auto my-auto p-5`}>
      <div className="flex flex-col gap-10 sm:gap-14">
        <div>
          <Image
            src={image}
            alt="Email header"
            className="mx-auto hidden max-w-full lg:block"
            width={298.73}
            height={211.46}
          />
          <Image
            src={image}
            alt="Email header mobile"
            className="mx-auto block max-w-full lg:hidden"
            width={200.6}
            height={142}
          />
        </div>
        <Heading className="text-neu text-center text-xl font-semibold sm:text-2xl">
          {title}
        </Heading>
        <div className="flex flex-col gap-[28px] px-14 sm:gap-8 sm:px-0">
          <p className="text-base font-semibold sm:text-lg">Hi {name},</p>
          <div className="flex flex-col gap-6 sm:gap-[28px]">
            <span className="text-sm font-normal sm:text-base sm:leading-[19.36px]">
              We have sent you a new activation link for your Boilerplate
              account. Please click the button below to activate your account:
            </span>
            <div className="mx-auto flex w-full justify-center rounded-xl bg-primary text-center sm:w-fit">
              <Link
                className="rounded-md bg-primary px-10 py-[12.5px] text-background"
                href={activationLink}
              >
                Activate My Account
              </Link>
            </div>
          </div>
        </div>
        <span className="px-14 text-sm font-medium sm:px-0">
          Regards,
          <br />
          Boilerplate
        </span>
      </div>
    </Container>
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
