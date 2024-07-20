import Link from "next/link";

import AcceptableUse from "./AcceptableUse";
import Breadcrumb from "./Breadcrumb";
import Discclaimer from "./Disclaimer";
import GoverningLaws from "./GoverningLaws";
import IntellectualProperty from "./IntellectualProperty";
import TableOfContents from "./TableOfContents";
import UserObligations from "./UserObligations";

const formattedDate = (date: Date) => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  const dateSuffix = (day: number) => {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    }

    return `${day}${dateSuffix(day)} ${month}, ${year}`;
}

const Main = () => {
  const lastUpdate = new Date('2024-07-20');
  return (
    <section className=" max-w-full text-left mx-[222px] max-sm:mx-6 max-lg:mx-12 max-xl:mx-20 my-[64px]">

      <Breadcrumb /> {/*Breadcrumb component to be replaced*/} 
      <div className="flex lg:flex-row flex-col-reverse items-start justify-between pb-10 max-w-full">
        <div className="lg:w-[612px] text-neutral-dark-1">
          <div
            className="self-stretch max-w-full xl:w-[612px]"
            id="introduction"
          >
            <div className="mb-[10px] self-stretch relative font-bold sm:text-[28px] text-2xl">
              Introduction
            </div>
            <div className="self-stretch relative text-base inline-block">
              Welcome to Boilerplate Hng. These Terms and Conditions govern your
              use of our website and services. By accessing or using our site,
              you agree to comply with and be bound by these terms. If you do
              not agree, please do not use our website..
            </div>
          </div>
          <div id="user-obligations" className="text-neutral-dark-1 mb-6">
            <UserObligations />
          </div>
          <div id="acceptable-use-policy" className="text-neutral-dark-1 mb-6">
            <AcceptableUse />
          </div>
          <div id="intellectual-property" className="text-neutral-dark-1 mb-6">
            <IntellectualProperty />
          </div>
          <div id="disclaimer" className="text-neutral-dark-1 mb-6">
            <Discclaimer />
          </div>
          <div id="governing-law" className="text-neutral-dark-1 mb-6">
            <GoverningLaws />
          </div>
          <div className="self-stretch text-neutral-dark-1 mb-6" id="changes-to-terms">
            <h2 className="mt-0 self-stretch relative text-inherit font-bold font-inherit sm:text-[28px] text-2xl">
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
            className="self-stretch flex flex-col items-start justify-start gap-[10px] text-neutral-dark-1 mb-6"
            id="contact-information"
          >
            <h2 className="mt-0 self-stretch relative text-inherit font-bold font-inherit sm:text-[28px] text-2xl">
              Contact Information
            </h2>
            <div className="mb-[10px] text-base">
              For any questions or concerns regarding these Terms and
              Conditions, please contact us at [Your Contact Information]. We
              value your feedback and are here to assist you with any inquiries
            </div>
          </div>
          <div
            className="self-stretch flex flex-col items-start justify-start gap-[10px] text-neutral-dark-1"
            id="last-updated"
          >
            <h2 className="mt-0 self-stretch relative text-inherit font-bold font-inherit sm:text-[28px] text-2xl">
              Last Updated
            </h2>
            <div className="mb-[10px] text-base">
              These Terms and Conditions were last updated on [{formattedDate(lastUpdate)}]. Please
              review them periodically for any changes.
            </div>
          </div>
          <div className="mb-[10px] text-base text-neutral-dark-1">
            For more information about our privacy practices, please visit our{" "}
            <Link href={"/privacy_policy"} className="text-primary underline">
              Privacy Policy page.{" "}
            </Link>
          </div>
        </div>
        <TableOfContents />
      </div>
    </section>
  );
};

export default Main;
