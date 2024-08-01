"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import FaqAccordion from "~/components/layouts/accordion/FaqsAccordion";
import { Button } from "~/components/ui/button";
import { faqData } from "~/constants/faqsdata";
import { getApiUrl } from "~/utils/getApiUrl";

const handleButtonClickTest = () => {
  alert("Contact Button Click Test");
};

interface BillingPlan {
  id: string;
  name: string;
  price: number;
}

export default function Pricing() {
  const [toggle, setToggle] = useState(1);
  const [plans, setPlans] = useState<BillingPlan[]>([]);
  // console.log("plans", plans);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const url = await getApiUrl();

        const response = await fetch(`${url}/api/v1/billing-plans`);
        const data = await response.json();

        const filteredPlans = data.data.filter((plan: BillingPlan) =>
          ["Basic", "Premium"].includes(plan.name),
        );
        setPlans(filteredPlans);
      } catch {
        // console.error("Error fetching billing plans:", error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <>
      <div
        className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10"
        data-testid="pricing-container"
      >
        <div
          className="mb-10 text-center md:mx-auto md:mb-12"
          data-testid="pricing-header"
        >
          <p
            className="mb-6 inline-block rounded-md bg-gray-200 px-4 py-1 text-sm text-black md:text-lg"
            data-testid="pricing-tag"
          >
            Pricing
          </p>
          <h2
            className="font-inter mb-6 text-center text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-[3.2rem]"
            data-testid="pricing-title"
          >
            Simple and <span className="text-orange-500">Affordable</span>{" "}
            Pricing Plan
          </h2>
          <p
            className="text-1xl md-text-xl mb-10 text-base text-gray-700"
            data-testid="pricing-description"
          >
            Our flexible plans are designed to scale with your business. We have
            a plan for you.
          </p>
        </div>

        <div
          className="align-center mx-auto mt-[100px] flex w-[380px] justify-between rounded-md bg-subtle p-2"
          data-testid="pricing-toggle"
        >
          <div
            data-testid="monthly-toggle"
            onClick={() => setToggle(1)}
            className={`flex h-[50px] w-[190px] cursor-pointer items-center justify-center rounded-md ${
              toggle === 1 ? "bg-white font-medium" : ""
            }`}
          >
            Monthly
          </div>
          <div
            onClick={() => setToggle(2)}
            className={`flex h-[50px] w-[190px] cursor-pointer items-center justify-center rounded-md ${
              toggle === 2 ? "bg-white font-medium" : ""
            }`}
            data-testid="annual-toggle"
          >
            Annual(save 20%)
          </div>
        </div>

        <div className="align-center mt-[50px] flex flex-col justify-center gap-5 sm:flex-row">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="w-full rounded-xl border border-border p-[20px] hover:border-primary sm:w-[400px] md:p-[31px]"
            >
              <h3 className="mb-[16px] text-[25px] font-semibold">
                {plan.name}
              </h3>
              <h1 className="mb-[16px] text-[22px] font-bold md:text-[30px] lg:text-[40px]">
                ${plan.price * (toggle === 2 ? 12 : 1)} /month
              </h1>
              <p className="mb-[46px] text-[14px]">
                The essentials to provide your best work for clients.
              </p>
              <div className="mb-3 flex items-center gap-5">
                <Image
                  src="/images/checkmark.svg"
                  alt=""
                  height={30}
                  width={30}
                />
                2 Projects
              </div>
              <div className="mb-3 flex items-center gap-5 text-[16px]">
                <Image
                  src="/images/checkmark.svg"
                  alt=""
                  height={30}
                  width={30}
                />
                Up to 100 subscribers
              </div>
              <div className="mb-3 flex items-center gap-5 text-[16px]">
                <Image
                  src="/images/checkmark.svg"
                  alt=""
                  height={30}
                  width={30}
                />
                Basic analytics
              </div>
              <div className="mb-3 flex items-center gap-5 text-[16px]">
                <Image
                  src="/images/checkmark.svg"
                  alt=""
                  height={30}
                  width={30}
                />
                24-hour support response time
              </div>
              <div className="mb-3 flex items-center gap-5 text-[16px]">
                <Image
                  src="/images/checkmark.svg"
                  alt=""
                  height={30}
                  width={30}
                />
                Marketing advisor
              </div>
              <div className="mb-3 flex items-center gap-5 text-[16px]">
                <Image
                  src="/images/checkmark.svg"
                  alt=""
                  height={30}
                  width={30}
                />
                Custom integration
              </div>
              <Link href={`/payment/${plan.id}`} passHref>
                <Button
                  size="lg"
                  className="mt-[51px] w-full bg-primary text-background"
                >
                  Continue
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
          <div className="mb-20 grid w-full grid-cols-1 gap-y-10 lg:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h1 className="self-stretch text-4xl font-semibold text-neutral-600">
                Frequently Asked Questions
              </h1>
              <p className="mb-3 text-[18px] text-neutral-600">
                We couldn’t answer your question?
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

            <FaqAccordion faqs={faqData} containerClassName="p-8" />
          </div>
        </div>
      </section>
    </>
  );
}
