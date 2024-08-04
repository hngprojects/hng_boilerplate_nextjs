"use client";

import { useEffect } from "react";

import Heading from "~/components/layouts/heading";
import privacyPolicyData, {
  getTableOfContents,
} from "~/components/layouts/Legal/PrivacyPolicy/constants/privacyPolicyData";
import PrivacyPolicyContent from "~/components/layouts/Legal/PrivacyPolicy/PrivacyPolicyContent";
import TableOfContent from "~/components/layouts/Legal/TableOfContent";

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
    <main className="mx-auto max-w-7xl bg-white px-5 py-5 sm:bg-transparent md:px-10 lg:px-10 xl:px-10">
      <Heading
        tag="Privacy Policy"
        title="How We {{Protect}} Your Information"
        content="Find advice and answers from our support team"
      />

      <section className="mt-20 flex max-w-full flex-col-reverse items-start justify-between pb-10 lg:flex-row">
        <PrivacyPolicyContent
          content={privacyPolicyData}
          className="text-neutral-dark-1 lg:w-[750px]"
        />

        <TableOfContent
          listOfContent={tableOfContents}
          className="p-[10px] text-neutral-dark-1 max-lg:mb-14 lg:sticky lg:top-20 lg:w-[350px]"
        />
      </section>
    </main>
  );
}
