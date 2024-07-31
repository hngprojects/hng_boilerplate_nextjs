"use client";

import { Suspense, useEffect, useState } from "react";

import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { useToast } from "~/components/ui/use-toast";
import FaqAccordion from "../FaqAccordion";

interface IFaqs {
  id: string;
  question: string;
  answer: string;
}

export default function Faqs() {
  const { toast } = useToast();

  const [faqs, setFaqs] = useState<IFaqs[]>([]);

  useEffect(() => {
    async function fetchFaqs(url: string) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          toast({
            title: "Fetching faqs failed",
            description: `Status: ${response.status}, Response not okay`,
            variant: "destructive",
          });
          setFaqs([]);
          return;
        }
        const { data } = await response.json();
        setFaqs(data);
      } catch (error) {
        toast({
          title: "Fetching faqs failed",
          description:
            error instanceof Error
              ? error.message
              : "An unknown error occurred",
          variant: "destructive",
        });
        setFaqs([]);
        return;
      }
    }
    fetchFaqs(`${process.env.NEXT_PUBLIC_BACKEND_PROBE_URL}/api/v1/faqs`);
  }, [toast]);


  return (
    <div className="flex w-full max-w-[588px] flex-col gap-6 max-md:gap-16">
      <div className="bg-[#FAFAFA] max-md:px-0 max-md:py-0">
        <Suspense fallback={<LoadingSpinner />}>
          {faqs?.length > 0 ? (
            <div className="grid items-center justify-center gap-y-6 max-md:grid-cols-1 max-md:gap-x-4">
              {faqs?.map((faq) => (
                <FaqAccordion
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          ) : (
            <p className="mt-4 text-center">No results found.</p>
          )}
        </Suspense>
      </div>
    </div>
  );
}
