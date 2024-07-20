import React from "react";

import Faqs from "~/components/common/Faqs";

const faq: React.FC = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <p className="h-[116px]">HEADER</p>
      <main className="flex min-h-screen flex-col">
        <p className="text-neutral-dark-1 text-opacity-50">
          Contact Us / <span className="font-normal text-primary">FAQ</span>
        </p>
        <div className="mb-24 flex flex-col items-center justify-center gap-3">
          <p className="text-neutral-dark-1 text-5xl font-bold">
            Frequently asked questions
          </p>
          <p className="text-neutral-dark-1 text-2xl font-normal">
            Questions you might ask about our product
          </p>
        </div>
        <section className="flex flex-col">
          <Faqs />
        </section>
      </main>
    </div>
  );
};

export default faq;
