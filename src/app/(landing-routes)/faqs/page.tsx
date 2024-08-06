"use client";

import React, { useEffect, useState } from "react";

import { getFaqs } from "~/actions/externalPages";
import FaqAccordion from "~/components/layouts/accordion/FaqsAccordion";
import Heading from "~/components/layouts/heading";
import FaqSkeleton from "~/components/skeleton/faqskeleton";
import AdditionalInquiriesForm from "./inquiries-form/AdditionalInquiriesForm";

const faq: React.FC = () => {
  const [faqs, setFaqs] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  // get faqs
  useEffect(() => {
    const fetchFaqs = async () => {
      const result = await getFaqs();
      if(result?.status === 200 || result?.status === 201){
        setFaqs(result?.data?.data);
      }
      
      setLoading(false)
    };
    fetchFaqs();
  }, []);

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl bg-white px-5 py-10 sm:bg-transparent md:px-10 lg:px-10 xl:px-10">
        <Heading
          tag="FAQS"
          title="Frequently {{asked}} questions"
          content="Questions you might ask about our product"
        />

        <div className="mx-auto mb-40 mt-4 max-w-xl">
          {loading ? (
            <FaqSkeleton />
          ) : (
            <>
              {faqs?.length === 0 ? (
                <p className="py-20 text-center">No results found.</p>
              ) : (
                <FaqAccordion
                  faqs={faqs}
                  containerClassName="sm:w-full px-4 py-1 bg-white"
                  data-testid="faq-accordion"
                />
              )}
            </>
          )}
        </div>

        <AdditionalInquiriesForm />
      </main>
    </div>
  );
};

export default faq;
