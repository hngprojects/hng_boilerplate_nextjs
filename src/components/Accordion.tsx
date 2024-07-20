"use client";


import React, { useEffect, useRef, useState } from "react";

type AccordionItem = {
  header: string;
  content: string;
};

type AccordionProperties = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProperties> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | undefined>();
  const contentReferences = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? undefined : index);
  };

  useEffect(() => {
    for (const [index, content] of Array.from(contentReferences.current.entries())) {
      if (content) {
        if (index === activeIndex) {
          content.style.maxHeight = `${content.scrollHeight}px`;
          content.style.visibility = "visible";
          content.style.opacity = "1";
          content.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
        } else {
          content.style.maxHeight = "0px";
          content.style.visibility = "hidden";
          content.style.opacity = "0";
          content.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
        }
      }
    }
  }, [activeIndex]);

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="border-b border-border">
          <div
            className={`accordion-header cursor-pointer p-4 flex justify-between items-center ${activeIndex === index ? "text-primary" : "text-foreground"
              }`}
            onClick={() => handleClick(index)}
            aria-expanded={index === activeIndex ? "true" : "false"}
          >
            <span>{item.header}</span>
            <svg
              className={`accordion-icon transform transition-transform duration-300 ${index === activeIndex ? "rotate-180" : ""
                }`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            ref={(element) => {
              contentReferences.current[index] = element;
            }}
            className={`accordion-content overflow-hidden transition-max-height duration-300 ease-in-out ${index === activeIndex ? "max-h-screen visible opacity-100" : "max-h-0 invisible opacity-0"
              }`}
          >
            <p className="p-4">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

