"use client";

import { useState } from "react";

import FaqAccordion from "../FaqAccordion";
import Search from "../SearchFaq";

export default function Faqs() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredAccordions, setFilteredAccordions] = useState<JSX.Element[]>(
    [],
  );

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
    <FaqAccordion
      key="4"
      question="What is hng"
      answer="hng is a summer training program ..."
    />,
    <FaqAccordion
      key="5"
      question="What is a component"
      answer="A component is a reusable UI element ..."
    />,
    <FaqAccordion
      key="6"
      question="What is a boilerplate"
      answer="A boilerplate is a program ..."
    />,
  ];

  const handleSearch = (value: string) => {
    setSearchValue(value);

    if (!value.trim()) {
      setFilteredAccordions([]);
      return;
    }

    const filtered = accordions.filter(
      (accordion) =>
        accordion.props.question.toLowerCase().includes(value.toLowerCase()) ||
        accordion.props.answer.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredAccordions(filtered);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <div className="mx-32 my-11 bg-background">
        {searchValue.trim() === "" ? (
          <div className="grid grid-cols-3 max-md:grid-cols-1">
            {accordions}
          </div>
        ) : filteredAccordions.length > 0 ? (
          <div className="grid grid-cols-3">{filteredAccordions}</div>
        ) : (
          <p className="mt-4 text-center">No results found.</p>
        )}
      </div>
    </div>
  );
}
