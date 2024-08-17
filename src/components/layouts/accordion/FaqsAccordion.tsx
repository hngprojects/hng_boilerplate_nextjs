import clsx from "clsx";
import { useTranslations } from "next-intl";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

interface FaqAccordionProperties {
  faqs: { question: string; content: string }[]; // Define the shape of faq objects
  containerClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
}

const FaqAccordion = ({
  faqs,
  triggerClassName,
  contentClassName,
  containerClassName,
}: FaqAccordionProperties) => {
  const t = useTranslations("faq");
  return (
    <div
      role="region"
      className={clsx(
        "inline-flex w-full flex-col items-start justify-start rounded-xl bg-neutral-50 p-6 md:max-w-[590px]",
        containerClassName,
      )}
    >
      <Accordion type="single" collapsible className="w-full">
        {faqs?.map((faq, index) => (
          <AccordionItem key={faq.question} value={`item-${index}`}>
            <AccordionTrigger
              className={clsx(
                "text-left text-[18px] text-base font-medium leading-normal text-neutral-950 hover:no-underline",
                triggerClassName,
              )}
            >
              {t(`${faq.question}`)}
            </AccordionTrigger>
            <AccordionContent
              className={clsx(
                "text-[16px] font-normal leading-relaxed text-neutral-950",
                contentClassName,
              )}
            >
              {t(`${faq.content}`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FaqAccordion;
