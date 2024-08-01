"use client";

import FaqAccordion from "~/components/layouts/accordion/FaqsAccordion";
import { Button } from "~/components/ui/button";
import { faqData } from "~/constants/faqsdata";
import PricingPlans from "./PricingPlans";

const handleButtonClickTest = () => {
  alert("Contact Button Click Test");
};

export default function Pricing() {
  return (
    <>
      <PricingPlans />

      <section className="bg-white">
        <div
          className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10"
          data-testid="faq-section"
        >
          <div className="mb-20 grid w-full grid-cols-1 gap-y-10 lg:grid-cols-2">
            <div className="flex flex-col gap-3" data-testid="faq-header">
              <h1
                className="self-stretch text-4xl font-semibold text-neutral-600"
                role="heading"
                aria-level={1}
              >
                Frequently Asked Questions
              </h1>

              <p className="mb-3 text-[18px] text-neutral-600">
                We couldn’t answer your question?
              </p>

              <Button
                onClick={handleButtonClickTest}
                variant="outline"
                className="h-[50px] w-[150px]"
                size="lg"
                data-testid="contact-button"
              >
                Contact us
              </Button>
            </div>

            <FaqAccordion
              faqs={faqData}
              containerClassName="p-8"
              data-testid="faq-accordion"
            />
          </div>
        </div>
      </section>
    </>
  );
}
