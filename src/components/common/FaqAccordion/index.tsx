import {
  AccordionContentProps,
  AccordionTriggerProps,
} from "@radix-ui/react-accordion";
import clsx from "clsx";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { FAQACCORDION } from "./types";

interface FaqAccordionProperties {
  faqs: FAQACCORDION[];
  containerClassName?: HTMLDivElement["className"];
  triggerClassName?: AccordionTriggerProps["className"];
  contentClassName?: AccordionContentProps["className"];
}

const FaqAccordion = ({
  faqs,
  triggerClassName,
  contentClassName,
  containerClassName,
}: FaqAccordionProperties) => {
  return (
    <div
      role="region"
      className={clsx(
        "inline-flex w-full flex-col items-start justify-start rounded-xl bg-neutral-50 p-6 md:max-w-96",
        { containerClassName },
      )}
    >
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => {
          return (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger
                className={clsx(
                  "text-left text-base font-medium leading-normal text-neutral-950 hover:no-underline",
                  triggerClassName,
                )}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className={clsx(
                  "text-sm font-normal leading-tight text-neutral-950",
                  contentClassName,
                )}
              >
                {faq.content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
