"use client";

import { Search } from "lucide-react";
import { Button } from "~/components/common/common-button";

import { Input } from "~/components/common/input";
import FaqAccordion from "~/components/layouts/accordion/FaqsAccordion";
import TopicsAccordions from "~/components/layouts/accordion/TopicAccordion";
import { faqData } from "~/constants/faqsdata";

// 
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
                            className="text-xl font-medium text-neutral-600 font-inter"
                        >
                            Help Center
                        </span>
                        <div className="flex h-48 flex-col items-center justify-center gap-5 self-stretch">
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
                            <div className="group flex h-[45px] w-full md:w-[600px] items-center justify-start overflow-hidden rounded-full border border-slate-300 bg-white px-2 py-[2px] text-xs font-normal leading-none text-neutral-600 focus-within:ring-1 focus-within:ring-primary focus-within:ring-offset-0">
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

            <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10">
                <section
                    className="flex flex-col items-center justify-start gap-7 py-24"
                    aria-labelledby="browse-topics-heading"
                >
                    <span
                        id="browse-topics-heading"
                        className="text-center text-2xl font-bold text-orange-500 mb-4"
                    >
                        Browse by topics
                    </span>

                    <TopicsAccordions />
                </section>

                <section className="pt-12 ">
                    <div className="grid w-full grid-cols-1 gap-y-10 lg:grid-cols-2 mb-20">
                        <div className="flex flex-col gap-3">
                            <h1
                                className="self-stretch text-4xl font-semibold text-neutral-600"
                                role="heading"
                                aria-level={1}
                            >
                                Frequently Asked Questions
                            </h1>

                            <p className="text-[18px] text-neutral-600 mb-3">
                                {` We couldn’t answer your question?`}
                            </p>

                            <Button
                                onClick={handleButtonClickTest}
                                variant="outline"
                                className="h-[50px] w-[150px]"
                                size="lg"
                            >
                                Contact us
                            </Button>
                        </div>

                        <FaqAccordion
                            faqs={faqData}
                            containerClassName="px-0 py-0 "
                        />
                    </div>
                </section>
            </div>

            <div className=" bg-white py-40">
                <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10 text-center">
                    <h1 className="text-3xl font-bold text-orange-500 mg-4">
                        Didn’t find an answer?
                    </h1>
                    <p className="text-lg font-normal text-neutral-600 mb-3">
                        Contact us for more inquiries and information about our
                        services.
                    </p>

                    <Button
                        onClick={handleButtonClickTest}
                        variant="primary"
                        size="lg"
                        className="h-[50px] w-[150px]"
                    >
                        Contact Us
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HelpCenterPage;