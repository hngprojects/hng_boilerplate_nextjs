import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const TooltipAccordions = () => {
  return (
    <Accordion
      className="px grid w-full grid-cols-1 gap-x-[20px] gap-y-[12px] md:grid-cols-2 lg:grid-cols-3"
      type="multiple"
    >
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          className="flex w-full flex-col border-b-0 bg-white px-4 py-8"
          value={`faq-${index}`}
        >
          <AccordionTrigger
            id={`faq-heading-${index}`}
            role="heading"
            className="border-b-0 text-left hover:no-underline"
            aria-level={2}
          >
            {faq.question}
          </AccordionTrigger>
          <AccordionContent
            role="region"
            className="text-sm"
            aria-labelledby={`faq-heading-${index}`}
          >
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TooltipAccordions;

const faqs = [
  {
    id: "item-1",
    question: "What is EcoClean?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-2",
    question: "How does EcoClean work?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "item-3",
    question: "What are the key features of EcoClean?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum repellendus doloribus deserunt totam doloremque, quia quaerat veniam harum.",
  },
  {
    id: "item-4",
    question: "Who can benefit from using EcoClean?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-5",
    question: "What are the system requirements for EcoClean?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "item-6",
    question: "How do I use EcoClean?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: "item-7",
    question: "How do I store EcoClean?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "item-8",
    question: "How much does EcoClean cost?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: "item-9",
    question: "Are there any discounts available?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];
