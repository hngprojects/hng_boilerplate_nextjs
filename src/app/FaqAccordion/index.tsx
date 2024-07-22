import { FC } from "react";

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

const FaqAccordion: FC<FaqAccordionProperties> = ({ question, answer }) => {
  return (
    <div className="m-auto h-[128px] w-[384px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="p-6 text-xl font-medium hover:no-underline">
            {question}
          </AccordionTrigger>
          <AccordionContent className="p-6">{answer}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
