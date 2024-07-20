"use client";

import { useState } from "react";

import FaqAccordion from "../FaqAccordion";
import Search from "../SearchFaq";

export default function Faqs() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredAccordions, setFilteredAccordions] = useState<JSX.Element[]>(
    [],
  );

  const handleSearch = (value: string) => {
    setSearchValue(value);

    if (!value.trim()) {
      setFilteredAccordions([]);
    }

    const filtered = accordions.filter(
      (accordion) =>
        accordion.props.question.toLowerCase().includes(value.toLowerCase()) ||
        accordion.props.answer.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredAccordions(filtered);
  };

  // Sample data for FAQAccordion components
  const accordions = [
    <FaqAccordion
      key="1"
      question="What is an accordion"
      answer="Accordion is ..."
    />,
    <FaqAccordion key="2" question="What is a bar" answer="Bar is ..." />,
    <FaqAccordion
      key="3"
      question="What is search"
      answer="Search is a term ..."
    />,
  ];
  return (
    <div>
      <Search onSearch={handleSearch} />
      {searchValue.trim() === "" ? (
        accordions
      ) : filteredAccordions.length > 0 ? (
        filteredAccordions
      ) : (
        <p className="mt-4 text-center">No results found.</p>
      )}
    </div>
  );
}
