"use client";

import Link from "next/link";
import { useEffect } from "react";

import AcceptableUse from "./AcceptableUse";
import Disclaimer from "./Disclaimer";
import GoverningLaws from "./GoverningLaws";
import IntellectualProperty from "./IntellectualProperty";
import TableOfContents from "./TableOfContents";
import UserObligations from "./UserObligations";

const dateSuffix = (day: number) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1: {
      return "st";
    }
    case 2: {
      return "nd";
    }
    case 3: {
      return "rd";
    }
    default: {
      return "th";
    }
  }
};

const formattedDate = (date: Date) => {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${day}${dateSuffix(day)} ${month}, ${year}`;
};

const Main = () => {
  const lastUpdate = new Date("2024-07-20");

  useEffect(() => {
    document.documentElement.style.scrollPaddingTop = "80px";
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollPaddingTop = "";
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  //

  return (
    <section className="relative my-20 scroll-smooth text-left">
      <div className="flex max-w-full flex-col-reverse items-start justify-between pb-10 lg:flex-row">
        <div className="text-neutral-dark-1 lg:w-[750px]">
          <div className="max-w-full self-stretch" id="introduction">
            <h2 className="relative mb-[10px] self-stretch text-lg font-bold text-foreground">
              Introduction
            </h2>
            <div className="relative inline-block self-stretch text-base">
              Welcome to Boilerplate Hng. These Terms and Conditions govern your
              use of our website and services. By accessing or using our site,
              you agree to comply with and be bound by these terms. If you do
              not agree, please do not use our website..
            </div>
          </div>
          <div id="user-obligations" className="mb-6 text-neutral-dark-1">
            <UserObligations />
          </div>
          <div id="acceptable-use-policy" className="mb-6 text-neutral-dark-1">
            <AcceptableUse />
          </div>
          <div id="intellectual-property" className="mb-6 text-neutral-dark-1">
            <IntellectualProperty />
          </div>
          <div id="disclaimer" className="mb-6 text-neutral-dark-1">
            <Disclaimer />
          </div>
          <div id="governing-law" className="mb-6 text-neutral-dark-1">
            <GoverningLaws />
          </div>
          <div
            className="mb-6 self-stretch text-neutral-dark-1"
            id="changes-to-terms"
          >
            <h2 className="font-inherit relative mb-2 mt-0 self-stretch text-lg font-bold text-foreground">
              Changes to Terms
            </h2>
            <div className="mb-[10px] text-base">
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be effective immediately upon posting on our
              website. Your continued use of the site constitutes your
              acceptance of the revised terms. We encourage you to review these
              terms periodically to stay informed of any updates
            </div>
          </div>
          <div
            className="mb-6 flex flex-col items-start justify-start gap-[10px] self-stretch text-neutral-dark-1"
            id="contact-information"
          >
            <h2 className="font-inherit relative mt-0 self-stretch text-lg font-bold text-foreground">
              Contact Information
            </h2>
            <div className="mb-[10px] text-base">
              For any questions or concerns regarding these Terms and
              Conditions, please contact us at [Your Contact Information]. We
              value your feedback and are here to assist you with any inquiries
            </div>
          </div>
          <div
            className="flex flex-col items-start justify-start gap-[10px] self-stretch text-neutral-dark-1"
            id="last-updated"
          >
            <h2 className="font-inherit relative mt-0 self-stretch text-lg font-bold text-foreground">
              Last Updated
            </h2>
            <div className="mb-[10px] text-base">
              These Terms and Conditions were last updated on [
              {formattedDate(lastUpdate)}]. Please review them periodically for
              any changes.
            </div>
          </div>
          <div className="mb-[10px] text-base text-neutral-dark-1">
            For more information about our privacy practices, please visit our{" "}
            <Link href={"/privacy-policy"} className="text-primary underline">
              Privacy Policy page.
            </Link>
          </div>
        </div>
        <TableOfContents />
      </div>
    </section>
  );
};

export default Main;
