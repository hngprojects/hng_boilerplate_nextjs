"use client";

import { useEffect } from "react";

import privacyPolicyData, {
  getTableOfContents,
} from "~/components/layouts/Legal/PrivacyPolicy/constants/privacyPolicyData";
import PrivacyPolicyContent from "~/components/layouts/Legal/PrivacyPolicy/PrivacyPolicyContent";
import TableOfContent from "~/components/layouts/Legal/TableOfContent";
import SubPageHero from "~/components/layouts/Legal/Terms&Conditions/SubPageHero";

export default function PrivacyPolicy() {
  const tableOfContents = getTableOfContents(privacyPolicyData);

  useEffect(() => {
    const scrollClasses = [
      "scroll-smooth",
      "scroll-pt-24",
      "md:scroll-pt-[108px]",
    ];

    const htmlElement = document.documentElement;
    htmlElement.classList.add(...scrollClasses);

    return () => {
      htmlElement.classList.remove(...scrollClasses);
    };
  }, []);

  return (
    <main className="">
      <SubPageHero
        subheading="Privacy Policy"
        heading="How We Protect Your Information"
        wordToStyleIndex={2}
        description="Find advice and answers from our support team"
      />

      <div className="px-10 mx-auto max-w-7xl py-[31px] md:py-10 lg:px-10 xl:px-10">
        <section className="flex max-w-full flex-col-reverse items-start justify-between pb-10 lg:flex-row">
          <PrivacyPolicyContent
            content={privacyPolicyData}
            className="text-neutral-dark-1 lg:w-[750px]"
          />

          <TableOfContent
            listOfContent={tableOfContents}
            className="p-[10px] text-neutral-dark-1 max-lg:mb-14 lg:sticky lg:top-20 lg:w-[350px]"
          />
        </section>
      </div>
    </main>
  );
}
