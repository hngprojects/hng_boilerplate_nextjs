"use client";

import Button from "~/components/common/Button/button";
import { Input } from "~/components/ui/input";
import TooltipAccordions from "./TooltipAccordions";

const handleButtonClickTest = () => {
  alert("Contact Button Click Test");
};

const HelpCenterPage = () => {
  return (
    <div className="w-full bg-background">
      <div className="w-full bg-primary/10">
        <div className="mx-auto w-full" style={{ maxWidth: "1349px" }}>
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
              <div className="flex h-fit w-full items-center justify-start overflow-hidden rounded-xl border border-slate-300 bg-white px-2 py-[2px] text-xs font-normal leading-none text-neutral-600 focus-visible:ring-0 focus-visible:ring-offset-0 md:w-[466px] md:rounded-3xl">
                <span className="flex h-8 w-8 items-center justify-center p-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                      stroke="#525252"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <Input
                  autoFocus
                  placeholder="Search on any topic..."
                  className="w-full border-none bg-transparent px-1 py-2 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  aria-label="Search on any topic"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="mx-auto w-full" style={{ maxWidth: "1349px" }}>
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
          {/** Tooltip Accordions */}
          <TooltipAccordions />
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
              <div className="flex w-full items-center justify-center bg-white md:ml-auto 2xl:w-[500px]">
                Faq Accordions
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
