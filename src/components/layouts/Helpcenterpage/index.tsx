"use client";

import { Search } from "lucide-react";

import Button from "~/components/common/Button/button";
import FaqAccordion from "~/components/common/FaqAccordion";
import { faqData } from "~/components/common/FaqAccordion/data/faq.mock";
import { Input } from "~/components/common/Input";
import TopicsAccordions from "./_components/TopicsAccordions/TopicsAccordions";

const handleButtonClickTest = () => {
  alert("Contact Button Click Test");
};

const HelpCenterPage = () => {
  return (
    <div className="w-full bg-background">
      <div className="w-full bg-primary/10">
        <div className="mx-auto w-full max-w-[1349px]">
          <section
            className="flex w-full flex-col items-center justify-center gap-4 px-6 py-[24px] text-center md:px-0 md:py-24"
            aria-labelledby="help-center-heading"
          >
            <span
              id="help-center-heading"
              className="text-xl font-medium text-neutral-600"
            >
              Help Center
            </span>
            <div className="flex h-48 flex-col items-center justify-center gap-5 self-stretch">
              <h1
                className="text-3xl font-bold text-neutral-950 md:text-6xl"
                role="heading"
                aria-level={1}
              >
                How can we help You?
              </h1>
              <p className="text-center text-base font-normal text-neutral-600 md:text-lg">
                Find advice and answers from our support team
              </p>
              <div className="group flex h-fit w-full items-center justify-start overflow-hidden rounded-xl border border-slate-300 bg-white px-2 py-[2px] text-xs font-normal leading-none text-neutral-600 focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-0 md:w-[466px] md:rounded-3xl">
                <Search className="flex h-8 w-8 items-center justify-center p-1 text-muted-foreground" />
                <Input
                  isButtonVisible={false}
                  className="w-full border-none bg-transparent px-2 py-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  type="text"
                  placeholder="Search on any topic..."
                  aria-label="Search on any topic"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1349px]">
        <section
          className="flex flex-col items-center justify-start gap-7 px-6 py-24 md:px-24"
          aria-labelledby="browse-topics-heading"
        >
          <span
            id="browse-topics-heading"
            className="w-96 text-center text-3xl font-bold text-orange-500"
          >
            Browse by topics
          </span>
          <TopicsAccordions />
        </section>

        <section className="flex w-full flex-col items-center justify-center gap-20 px-6 pb-24 pt-12 md:px-24">
          <div className="grid w-full grid-cols-1 justify-items-stretch gap-y-8 xl:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h1
                className="self-stretch text-4xl font-semibold text-neutral-600"
                role="heading"
                aria-level={1}
              >
                Frequently Asked Questions
              </h1>
              <p className="self-stretch text-2xl font-normal text-neutral-600">
                We couldn’t answer your question?
              </p>
              <Button
                onClick={handleButtonClickTest}
                variant="outline"
                className="h-8 w-28"
                size="sm"
              >
                Contact us
              </Button>
            </div>
            <div className="flex w-full">
              <div className="flex w-full items-center justify-center md:ml-auto 2xl:w-[500px]">
                <FaqAccordion
                  faqs={faqData}
                  containerClassName="px-0 md:px-6"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center text-center">
            <div className="inline-flex flex-col items-center justify-center gap-4 p-6 px-0 md:px-6">
              <h1 className="text-3xl font-bold text-orange-500">
                Didn’t find an answer?
              </h1>
              <p className="text-lg font-normal text-neutral-600">
                Contact us for more inquiries and information about our
                services.
              </p>
              <Button
                onClick={handleButtonClickTest}
                variant="primary"
                size="lg"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpCenterPage;
