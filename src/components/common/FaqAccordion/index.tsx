
import { AccordionContentProps, AccordionTriggerProps } from '@radix-ui/react-accordion';
import clsx from 'clsx';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion';
import { FAQACCORDION } from './types';

interface FaqAccordionProps {
    faqs: FAQACCORDION[];
    containerClassName?: HTMLDivElement["className"];
    triggerClassName?: AccordionTriggerProps["className"],
    contentClassName?: AccordionContentProps["className"]
}

const FaqAccordion = ({ faqs, triggerClassName, contentClassName, containerClassName }: FaqAccordionProps) => {
    return (
        <div role="region" className={clsx(
            "p-6 bg-neutral-50 w-full md:max-w-96 rounded-xl flex-col justify-start items-start inline-flex",
            { containerClassName }
        )}>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => {
                    return (
                        <AccordionItem key={faq.question} value={`item-${index}`}>
                            <AccordionTrigger className={
                                clsx(
                                    "hover:no-underline text-left text-neutral-950 text-base font-medium leading-normal",
                                    triggerClassName
                                )
                            }>{faq.question}</AccordionTrigger>
                            <AccordionContent className={clsx(
                                'text-neutral-950 text-sm font-normal leading-tight',
                                contentClassName
                            )}>
                                {faq.content}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </div>
    )
}

export default FaqAccordion