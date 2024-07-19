import Link from "next/link";

import AcceptableUse from "./AcceptableUse";
import Breadcrumb from "./Breadcrumb";
import Discclaimer from "./Disclaimer";
import GoverningLaws from "./GoverningLaws";
import IntellectualProperty from "./IntellectualProperty";
import TableOfContents from "./TableOfContents";
import UserObligations from "./UserObligations";

const Main = () => {
  return (
    <section className=" max-w-full text-left mx-[222px] max-sm:mx-6 max-lg:mx-12 max-xl:mx-20 my-[64px]">
      <Breadcrumb />
      <div className="flex lg:flex-row flex-col-reverse items-start justify-between pb-10 max-w-full">
        <div className="lg:w-[612px]">
          <div
            className="self-stretch max-w-full xl:w-[612px]"
            id="introduction"
          >
            <div className="mb-[10px] self-stretch relative text-inherit font-bold sm:text-[28px] text-2xl">
              Introduction
            </div>
            <div className="self-stretch relative text-base inline-block">
              Welcome to Boilerplate Hng. These Terms and Conditions govern your
              use of our website and services. By accessing or using our site,
              you agree to comply with and be bound by these terms. If you do
              not agree, please do not use our website..
            </div>
          </div>
          <div id="user-obligations">
            <UserObligations />
          </div>
          <div id="acceptable-use-policy">
            <AcceptableUse />
          </div>
          <div id="intellectual-property">
            <IntellectualProperty />
          </div>
          <div id="disclaimer">
            <Discclaimer />
          </div>
          <div id="governing-law">
            <GoverningLaws />
          </div>
          <div className="self-stretch" id="changes-to-terms">
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
            className="self-stretch flex flex-col items-start justify-start gap-[10px]"
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
            className="self-stretch flex flex-col items-start justify-start gap-[10px]"
            id="last-updated"
          >
            <h2 className="mt-0 self-stretch relative text-inherit font-bold font-inherit sm:text-[28px] text-2xl">
              Last Updated
            </h2>
            <div className="mb-[10px] text-base">
              These Terms and Conditions were last updated on [Date]. Please
              review them periodically for any changes.
            </div>
          </div>
          <div className="mb-[10px] text-base">
            For more information about our privacy practices, please visit our{" "}
            <Link href={"/"} className="text-[#F97316]">
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
