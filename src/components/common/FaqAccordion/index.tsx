import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

interface FaqAccordionProperties {
  question: string;
  answer: string;
}

const FaqAccordion: React.FC<FaqAccordionProperties> = ({
  question,
  answer,
}) => {
  return (
    <div className="m-auto w-full">
      <Accordion className="w-full" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-6 text-left text-xl font-normal hover:no-underline">
            {question}
          </AccordionTrigger>
          <AccordionContent className="w-full p-6">{answer}</AccordionContent>
        </AccordionItem>
        {/* Add more AccordionItems as needed */}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
