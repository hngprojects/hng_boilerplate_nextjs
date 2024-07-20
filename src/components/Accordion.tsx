"use client";

import React, { useEffect, useRef, useState } from "react";

import "./Accordion.css";

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
    for (const [index, content] of contentReferences.current.entries()) {
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
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => handleClick(index)}
            aria-expanded={index === activeIndex ? "true" : "false"}
          >
            <span>{item.header}</span>
            <svg
              className={`accordion-icon ${index === activeIndex ? "open" : ""}`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="chevron-down">
                <path
                  id="Vector"
                  d="M4 6L8 10L12 6"
                  stroke="#0A0A0A"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
          <div
            ref={(element) => {
              contentReferences.current[index] = element;
            }}
            className={`accordion-content ${index === activeIndex ? "open" : ""}`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
