"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

import { Input } from "~/components/common/input";
import FaqAccordion from "~/components/layouts/accordion/FaqsAccordion";
import TopicsAccordions from "~/components/layouts/accordion/TopicAccordion";
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

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch(
          "https://deployment.api-php.boilerplate.hng.tech/api/v1/help-center/topics",
        );
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        setTopics(data.data.topics);
      } catch (error) {
        return `Error fetching topics: ${error}`;
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredTopics = topics.filter(
    (topic) =>
      topic.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      topic.content.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <div className="w-full bg-background">
      <div className="w-full bg-[#FAFAFA]">
        <div className="mx-auto w-full max-w-[1349px]">
          <section
            className="flex w-full flex-col items-center justify-center gap-4 px-6 py-[24px] text-center md:px-0"
            aria-labelledby="help-center-heading"
          >
            <span
              id="help-center-heading"
              className="font-inter text-xl font-medium text-neutral-600"
            >
              Help Center
            </span>
            <div className="flex flex-col items-center justify-center gap-5">
              <h1
                className="text-4xl font-bold text-neutral-950 md:text-5xl lg:text-6xl"
                role="heading"
                aria-level={1}
              >
                How can we help You?
              </h1>
              <p className="text-center text-base font-normal text-neutral-600 md:text-lg">
                Find advice and answers from our support team
              </p>
              <div className="flex w-full items-center justify-start overflow-hidden rounded-full border border-slate-300 bg-white px-2 py-[2px] text-xs font-normal leading-none text-neutral-600 focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-0 md:w-[600px]">
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
            </div>
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10">
        <section
          className="flex flex-col items-center justify-start gap-7 py-[24px]"
          aria-labelledby="browse-topics-heading"
        >
          <span
            id="browse-topics-heading"
            className="mb-4 text-center text-2xl font-bold text-orange-500"
          >
            Browse by topics
          </span>

          {loading ? (
            <p>Loading...</p>
          ) : searchValue.trim() === "" ? (
            <TopicsAccordions topics={topics} />
          ) : filteredTopics.length > 0 ? (
            <TopicsAccordions topics={filteredTopics} />
          ) : (
            <p>No results found.</p>
          )}
        </section>

        <section className="pt-12">
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
                className="align-center flex w-[150px] justify-center rounded-md border border-[#0A0A0A] bg-[#FFF] py-4 text-[#0F172A]"
              >
                Contact us
              </Link>
            </div>

            <FaqAccordion faqs={faqData} containerClassName="px-0 py-0 " />
          </div>
        </section>
      </div>

      <div className="bg-white py-40">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-10 lg:px-10 xl:px-10">
          <h1 className="mg-4 text-3xl font-bold text-orange-500">
            Didn&apos;t find an answer?
          </h1>
          <p className="mb-3 text-lg font-normal text-neutral-600">
            Contact us for more inquiries and information about our services.
          </p>

          <Link
            href="/contact-us"
            className="mt-4 inline-block rounded-md bg-primary px-10 py-4 text-background"
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
