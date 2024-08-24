"use client";

import { useEffect, useRef, useState } from "react";

import { getFaqs } from "~/actions/externalPages";
import FaqAccordion from "~/components/layouts/accordion/FaqAccordion";
import Heading from "~/components/layouts/heading";
import FaqSkeleton from "~/components/skeleton/faqskeleton";
import AdditionalInquiriesForm from "./inquiries-form/AdditionalInquiriesForm";

// Define a type for the FAQ items
interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const Faq = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);

  const videoReference = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoReference.current) {
      videoReference.current.play();
    }
  }, []);

  // Get FAQs
  useEffect(() => {
    const fetchFaqs = async () => {
      const result = await getFaqs();
      if (result && (result.status === 200 || result.status === 201)) {
        setFaqs(result.data.data);
      } else {
        setFaqs([]);
      }

      setLoading(false);
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

        <div className="aspect-w-5 aspect-h-5 border-primary-70 mx-auto mt-3 w-[80%] border">
          <video
            ref={videoReference}
            className="h-[80%] w-full object-cover"
            loop
            playsInline
            controls
          >
            <source
              src="/freecompress-copy_C1FFA9B1-6325-4D47-83FC-232E47D8EE10.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <AdditionalInquiriesForm />
      </main>
    </div>
  );
};

export default Faq;
