"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

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

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{item.header}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
