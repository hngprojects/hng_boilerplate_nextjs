'use client'

import { cn } from '~/utils'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'
import { FAQType } from '../types'

interface FaqAccordionProperties {
  faqs: FAQType[]
  containerClassName?: string
  triggerClassName?: string
  contentClassName?: string
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
      className={cn(
        'inline-flex w-full flex-col items-start justify-start rounded-xl',
        containerClassName
      )}
    >
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs?.map((faq, index) => {
          const isClickable = !!faq.question && !!faq.answer

          return (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger
                className={cn(
                  'text-md text-left font-semibold text-neutral-950 hover:no-underline',
                  isClickable
                    ? 'cursor-pointer'
                    : 'pointer-events-none opacity-30',
                  triggerClassName
                )}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  'text-[16px] text-sm leading-relaxed text-neutral-600',
                  contentClassName
                )}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default FaqAccordion
