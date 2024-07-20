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
    <div className="m-auto w-full max-md:w-[80%]">
      <Accordion className="bg-white" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-6 text-xl font-normal hover:no-underline">
            {question}
          </AccordionTrigger>
          <AccordionContent className="p-6">{answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
