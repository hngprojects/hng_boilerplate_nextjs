"use client";

import { useEffect } from "react";

import { Breadcrumb } from "~/components/common/Breadcrumb";
import SubPageHero from "~/components/external_static_page/SubPageHero";
import PrivacyPolicyContent from "~/components/layouts/Legal/PrivacyPolicy/PrivacyPolicyContent";
import TableOfContent from "~/components/layouts/Legal/TableOfContent";
import privacyPolicyData, {
  getTableOfContents,
} from "../../../components/layouts/Legal/PrivacyPolicy/constants/privacyPolicyData";

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
    <main className="min-h-svh">
      <SubPageHero
        heading="Privacy Policy"
        description="Achieve your dreams with us today"
      />
      <div className="mx-auto my-10 w-[min(100%-32px_,_996px)] md:my-16">
        <Breadcrumb variant="primary" />
        <section className="mt-14 grid grid-cols-1 gap-20 md:mt-[86px] md:grid-cols-[1fr,306px] md:gap-[73px]">
          <TableOfContent
            listOfContent={tableOfContents}
            className="top-28 max-w-[306px] md:sticky md:col-start-3 md:h-svh"
          />
          <PrivacyPolicyContent
            content={privacyPolicyData}
            className="max-w-[617px] md:col-span-2 md:col-start-1 md:row-start-1"
          />
        </section>
      </div>
    </main>
  );
}
