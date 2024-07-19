import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

interface FaqAccordionProperties {
  question: string;
  answer: string;
}

const FaqAccordion: React.FC<FaqAccordionProperties> = ({
  question,
  answer,
}) => {
  return (
    <div className=" w-[384px] h-[128px] m-auto">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-medium text-xl hover:no-underline p-6">
            {question}
          </AccordionTrigger>
          <AccordionContent className="p-6">{answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
