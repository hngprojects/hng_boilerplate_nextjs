"use client";

import { Suspense, useEffect, useState } from "react";

import FaqAccordion from "../FaqAccordion";
import Search from "../SearchFaq";
import { toast, useToast } from "~/components/ui/use-toast";

interface IFaqs {
  key: string;
  question: string;
  answer: string;
}

export default function Faqs() {
  const [searchValue, setSearchValue] = useState("");
  const [filteredAccordions, setFilteredAccordions] = useState<JSX.Element[]>(
    [],
  );
  const {toast} =  useToast()

  const [faqs , setFaqs]  = useState<IFaqs[]>([]);

  useEffect(() => {
    fetchFaqs(`${process.env.NEXT_PUBLIC_BACKEND_PROBE_URL}/faqs`)
  }, [faqs]);

  async function fetchFaqs(url:string){
    try {
      const response = await fetch(url);
      if (!response.ok) {
        toast({
          title: "Fetching faqs failed",
          description: `Status: ${response.status}, Response not okay`,
          variant: "destructive",
        });
        return;
      }
      const data = await response.json();
      setFaqs(data)
    } catch (error) {
      toast({
        title: "Fetching faqs failed",
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
      return [];
    }
  }

  const  accordions = faqs?.map(faq => <FaqAccordion key={faq.key} question={faq.question} answer={faq.answer}/>)

  // const accordions = [
  //   <FaqAccordion
  //     key="1"
  //     question="What payment methods do you accept?"
  //     answer="We accept ..."
  //   />,
  //   <FaqAccordion key="2" question="Is there a dicount for annual subscriptions?" answer="Yes, we ..." />,
  //   <FaqAccordion
  //     key="3"
  //     question="Is there a dicount for monthly subscriptions?"
  //     answer="we have ..."
  //   />,
  //   <FaqAccordion
  //     key="4"
  //     question="How do i create my account?"
  //     answer="hYou can start from  ..."
  //   />,
  //   <FaqAccordion
  //     key="5"
  //     question="What is the full fee for annual subscription?"
  //     answer="We have ..."
  //   />,
  //   <FaqAccordion
  //     key="6"
  //     question="Do you offer a free trial?"
  //     answer="Yes, we offer a 14-day free trial for new users. you can explore all the features of our premium plan without any cost duriung this period."
  //   />,
  // ];

  // const handleSearch = (value: string) => {
  //   setSearchValue(value);

  //   if (!value.trim()) {
  //     setFilteredAccordions([]);
  //     return;
  //   }

  //   const filtered = accordions.filter(
  //     (accordion) =>
  //       accordion.props.question.toLowerCase().includes(value.toLowerCase()) ||
  //       accordion.props.answer.toLowerCase().includes(value.toLowerCase()),
  //   );

  //   setFilteredAccordions(filtered);
  // };

  return (
    <div className="flex flex-col gap-6 max-md:gap-16">
      <div className="bg-[#FAFAFA] max-md:px-0 max-md:py-0">
       
          <Suspense fallback={<div>Loading...</div>}>
          {faqs?.length > 0 ? (
            <div className="grid items-center justify-center gap-y-6 max-md:grid-cols-1 max-md:gap-x-4">
              {accordions}
            </div>
          ):(<p className="mt-4 text-center">No results found.</p>)  }
          </Suspense>
       
      </div>
    </div>
  );
}
