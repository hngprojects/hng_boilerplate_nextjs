import React from "react";

import Faqs from "~/components/common/Faqs";
import AdditionalInquiriesForm from "../additionalinquiriesform/AdditionalInquiriesForm";

const faq: React.FC = () => {
  return (
    <div>
      <main className="mt-8 flex min-h-screen flex-col px-[7.5rem] max-lg:px-10 max-md:px-5">
        <p className="text-neutral-dark-1 text-opacity-50 max-md:order-2 max-md:hidden">
          Contact Us / <span className="font-normal text-primary">FAQ</span>
        </p>
        <div className="flex flex-col gap-16">
          <p className="hidden text-neutral-dark-1 text-opacity-50 max-md:order-2 max-md:block">
            Contact Us &gt;{" "}
            <span className="font-normal text-primary">FAQ</span>
          </p>
          <div className="mb-20 mt-16 flex flex-col items-center justify-center gap-3 max-2xl:mb-4 max-lg:mb-12 max-md:order-1 max-md:mb-8 max-md:mt-6">
            <p className="text-center text-5xl font-bold text-neutral-dark-1 max-md:text-3xl">
              Frequently asked questions
            </p>
            <p className="text-2xl font-normal text-neutral-dark-1 max-md:hidden">
              Questions you might ask about our product
            </p>
            <p className="hidden text-xl font-normal text-neutral-dark-1 max-md:block">
              Achieve your dreams with us today
            </p>
          </div>
          <section className="flex w-full flex-col justify-center max-md:order-3">
            <Faqs />
            <AdditionalInquiriesForm />
          </section>
        </div>
      </main>
    </div>
  );
};

export default faq;
