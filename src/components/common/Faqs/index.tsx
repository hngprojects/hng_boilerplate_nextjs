"use client";

import { useEffect, useState } from "react";

import FaqAccordion from "../FaqAccordion";

type FAQ = {
  id: string;
  question: string;
  answer: string;
  created_at: string;
  updated_at: string;
  status: boolean;
};

export default function Faqs() {
  const [faqData, setFaqData] = useState<FAQ[]>([]);

  useEffect(() => {
    const getFAQ = async () => {
      try {
        const response = await fetch(
          "https://deployment.api-php.boilerplate.hng.tech/api/v1/faqs",
        );
        const { data } = await response.json();
        setFaqData(data);
      } catch (error) {
        return error;
      }
    };
    getFAQ();
  }, []);

  return (
    <div className="flex w-full flex-col gap-6 px-4 max-md:gap-6 md:px-0">
      <div className="bg-[#FAFAFA] py-11 max-md:py-6">
        <div className="grid grid-cols-1 gap-y-6 text-left">
          {faqData.map((faq) => (
            <FaqAccordion
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}