import React from "react";

import Faqs from "~/components/common/Faqs";
import AdditionalInquiriesForm from "./inquiries-form/AdditionalInquiriesForm";
import Heading from "~/components/layouts/heading";
import { faqData } from "~/constants/faqsdata";
import FaqAccordion from "~/components/layouts/accordion/FaqsAccordion";

const faq: React.FC = () => {
  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl bg-white px-5 py-10 sm:bg-transparent md:px-10 lg:px-10 xl:px-10">
        <Heading tag="FAQS" title="Frequently {{asked}} questions" content="Questions you might ask about our product"/>
        
        <div className="mt-4 mb-40 max-w-xl mx-auto">
           <FaqAccordion
              faqs={faqData}
              containerClassName="sm:w-full px-4 py-1 bg-white"
              data-testid="faq-accordion"
            />
        </div>

        
        <AdditionalInquiriesForm />
      </main>
    </div>
  );
};

export default faq;
