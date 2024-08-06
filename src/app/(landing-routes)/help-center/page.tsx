"use client";

import axios from "axios";
import { Search } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import { Input } from "~/components/common/input";
import FaqAccordion from "~/components/layouts/accordion/FaqsAccordion";
import TopicsAccordions from "~/components/layouts/accordion/TopicAccordion";
import Heading from "~/components/layouts/heading";
import HelpCenterSkeleton from "~/components/skeleton/helpcenterskeleton";
import { useToast } from "~/components/ui/use-toast";
import { faqData } from "~/constants/faqsdata";

interface Topic {
  id: string;
  title: string;
  content: string;
}

const HelpCenter = () => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const apiUrl = await getApiUrl();
        const response = await axios.get(`${apiUrl}/api/v1/help-center/topics`);
        setTopics(response.data.data);
      } catch {
        toast({
          title: "Error",
          description: "Error fetching topics",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, [toast]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredTopics = topics?.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      topic.content.toLowerCase().includes(searchValue.toLowerCase()),
  );

  //

  return (
    <>
      <div className="mx-auto max-w-7xl bg-white px-5 py-10 sm:bg-transparent md:px-10 lg:px-10 xl:px-10">
        <Heading
          tag="Help Center"
          title="How can {{we}} help You?"
          content="Find advice and answers from our support team"
        />

        <div className="mx-auto mb-[30px] flex w-full items-center justify-start overflow-hidden rounded-full border border-slate-300 px-2 py-[2px] text-xs font-normal leading-none text-neutral-600 focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-0 md:w-[600px]">
          <Search className="flex h-8 w-8 items-center justify-center p-1 text-muted-foreground" />
          <Input
            isButtonVisible={false}
            className="w-full border-none bg-transparent py-[16px] pl-[20px] pr-[220px] text-[#0A0A0A] focus:border-none focus:outline-none"
            type="text"
            placeholder="Search on any topic..."
            aria-label="Search on any topic"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>

        <section
          className="mb-40 flex w-full flex-col items-center justify-start gap-7 py-[24px]"
          aria-labelledby="browse-topics-heading"
        >
          <span
            id="browse-topics-heading"
            className="mb-4 text-center text-lg font-bold text-orange-500"
          >
            Browse by topics
          </span>

          {loading ? (
            <HelpCenterSkeleton />
          ) : (
            <>
              {filteredTopics?.length === 0 ? (
                <p className="py-10">No results found.</p>
              ) : (
                <TopicsAccordions topics={filteredTopics} />
              )}
            </>
          )}
        </section>

        <section>
          <div className="mb-20 grid w-full grid-cols-1 gap-y-10 lg:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h1
                className="self-stretch text-4xl font-semibold text-neutral-600"
                role="heading"
                aria-level={1}
              >
                Frequently Asked Questions
              </h1>

              <p className="mb-3 text-[18px] text-neutral-600">
                We couldn&apos;t answer your question?
              </p>

              <Link
                href="/contact-us"
                className="align-center flex w-[150px] justify-center rounded-md border border-[#0A0A0A] bg-[#FFF] py-4 text-[#0F172A] hover:bg-accent hover:text-accent-foreground"
              >
                Contact us
              </Link>
            </div>

            <FaqAccordion faqs={faqData} containerClassName="px-0 py-0 " />
          </div>
        </section>
      </div>

      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl bg-white px-5 py-10 md:px-10">
          <h1 className="mg-4 text-center text-3xl font-bold text-orange-500">
            Didn&apos;t find an answer?
          </h1>
          <p className="mb-3 text-center text-lg font-normal text-neutral-600">
            Contact us for more inquiries and information about our services.
          </p>

          <Link
            href="/contact-us"
            className="align-center mx-auto mt-4 inline-block flex w-[150px] justify-center rounded-md bg-primary px-5 py-4 text-background hover:bg-destructive"
          >
            Contact us
          </Link>
        </div>
      </div>
    </>
  );
};

export default HelpCenter;
