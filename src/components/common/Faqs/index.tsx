"use client";

import { useEffect, useState } from "react";

import FaqAccordion from "../FaqAccordion";
import Search from "../SearchFaq";

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
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getFAQ = async () => {
      const response = await fetch(
        "https://deployment.api-php.boilerplate.hng.tech/api/v1/faqs",
      );
      const { data } = await response.json();
      setFaqData(data);
    };
    getFAQ();
  }, []);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const filteredAccordions = faqData
    .filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchValue.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchValue.toLowerCase()),
    )
    .map((faq) => (
      <FaqAccordion key={faq.id} question={faq.question} answer={faq.answer} />
    ));

  return (
    <div className="flex flex-col gap-6 max-md:gap-16">
      <Search onSearch={handleSearch} />
      <div className="bg-[#FAFAFA] py-11 max-md:px-0 max-md:py-0">
        {searchValue.trim() === "" ? (
          <div className="grid grid-cols-3 gap-x-8 gap-y-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-x-4">
            {faqData.map((faq) => (
              <FaqAccordion
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        ) : filteredAccordions.length > 0 ? (
          <div className="grid grid-cols-3 gap-x-8 gap-y-6 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-x-4">
            {filteredAccordions}
          </div>
        ) : (
          <p className="mt-4 text-center">No results found.</p>
        )}
      </div>
    </div>
  );
}
