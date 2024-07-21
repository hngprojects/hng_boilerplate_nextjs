import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { topics } from "../../data/topics.mock";

const TopicsAccordions = () => {
  return (
    <Accordion
      className="px grid w-full grid-cols-1 gap-x-[20px] gap-y-[12px] md:grid-cols-2 lg:grid-cols-3"
      type="multiple"
    >
      {topics.map((topic, index) => (
        <AccordionItem
          key={index}
          className="flex w-full flex-col border-b-0 bg-white px-6 py-6"
          value={`topic-${index}`}
        >
          <AccordionTrigger
            id={`topic-heading-${index}`}
            role="heading"
            className="border-b-0 text-left hover:no-underline"
            aria-level={2}
          >
            {topic.question}
          </AccordionTrigger>
          <AccordionContent
            role="region"
            className="text-sm"
            aria-labelledby={`topic-heading-${index}`}
          >
            {topic.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TopicsAccordions;
