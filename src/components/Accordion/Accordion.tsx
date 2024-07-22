"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqItems = [
  {
    header: "What payment methods do you accept?",
    content: "Answer to question 1.",
  },
  {
    header: "Is there a discount for annual subscriptions?",
    content: "Answer to question 2.",
  },
  { header: "Do you offer a free trial?", content: "Answer to question 3." },
];

export function AccordionComponent() {
  return (
    <div className="p-12 shadow-xl">
      <Accordion type="single" collapsible className="w-[590px]">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="hover:no-underline">
              {item.header}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
