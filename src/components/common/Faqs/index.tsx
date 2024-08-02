"use client";

import { useEffect, useState } from "react";

import { useToast } from "~/components/ui/use-toast";
import { getApiUrl } from "~/utils/getApiUrl";
import FaqAccordion from "../FaqAccordion";

interface IFaqs {
  id: string;
  question: string;
  answer: string;
}

export default function Faqs() {
  const { toast } = useToast();

  const [faqs, setFaqs] = useState<IFaqs[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchFaqs(url: string) {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          toast({
            title: "Fetching faqs failed",
            description: `Status: ${response.status}, Response not okay`,
            variant: "destructive",
          });
          setFaqs([]);
          setLoading(false);
          return;
        }
        const { data } = await response.json();
        setFaqs(data.items);
        setLoading(false);
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
        setLoading(false);
        return;
      }
    }
    getApiUrl().then((url) => {
      fetchFaqs(`${url}/api/v1/faqs`);
    });
  }, [toast]);

  return (
    <div className="flex w-full flex-col gap-6 max-md:gap-16">
      <div className="bg-[#FAFAFA] max-md:px-0 max-md:py-0">
        <div className="m-auto grid max-w-[588px] items-center gap-y-6 max-md:grid-cols-1 max-md:gap-x-4">
          {loading ? (
            <div> Loading...</div>
          ) : faqs?.length > 0 ? (
            faqs?.map((faq) => (
              <FaqAccordion
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))
          ) : (
            <p className="mt-4 text-center">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
