"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import FaqAccordion from "~/components/layouts/accordion/FaqsAccordion";
import { Button } from "~/components/ui/button";
import { Skeleton } from "~/components/ui/skeleton";
import { faqData } from "~/constants/faqsdata";
import { getApiUrl } from "~/utils/getApiUrl";

interface BillingPlan {
  id: string;
  name: string;
  price: string;
}

const getAnnualPrice = (monthlyPrice: string) => {
  const monthly = Number.parseFloat(monthlyPrice);
  const annual = monthly * 12 * 0.8;
  return annual.toFixed(2);
};

const handleButtonClickTest = () => {
  alert("Contact Button Click Test");
};

export default function Pricing() {
  const [toggle, setToggle] = useState(1);
  const [plans, setPlans] = useState<BillingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

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
        setError("Failed to fetch billing plans");
        // console.error("Error fetching billing plans:", error);
      } finally {
        setLoading(false);
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
            onClick={() => setToggle(1)}
            className={`flex h-[50px] w-[190px] cursor-pointer items-center justify-center rounded-md ${toggle === 1 ? "bg-white font-medium" : ""}`}
            data-testid="monthly-toggle"
          >
            Monthly
          </div>
          <div
            onClick={() => setToggle(2)}
            className={`flex h-[50px] w-[190px] cursor-pointer items-center justify-center rounded-md ${toggle === 2 ? "bg-white font-medium" : ""}`}
            data-testid="annual-toggle"
          >
            Annual(save 20%)
          </div>
        </div>

        {loading && (
          <div className="align-center mt-[50px] flex min-h-[650px] flex-col justify-center gap-5 sm:flex-row">
            <div className="mx-auto flex w-max gap-8">
              <Skeleton
                className="h-[600px] w-full rounded-xl sm:w-[400px]"
                data-testid="skeleton"
              />
              <Skeleton
                className="h-[600px] w-full rounded-xl sm:w-[400px]"
                data-testid="skeleton"
              />
            </div>
          </div>
        )}

        {error && (
          <div className="align-center mt-[50px] flex min-h-[650px] flex-col justify-center gap-5 text-lg text-red-400 sm:flex-row">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <div
              className="align-center mt-[50px] flex flex-col justify-center gap-5 sm:flex-row"
              data-testid="pricing-cards"
            >
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="w-full rounded-xl border border-border p-[20px] hover:border-primary sm:w-[400px] md:p-[31px]"
                  data-testid={`${plan.name.toLowerCase()}-card-${toggle === 1 ? "monthly" : "annual"}`}
                >
                  <h3
                    className="mb-[16px] text-[25px] font-semibold capitalize"
                    data-testid={`${plan.name.toLowerCase()}-title`}
                  >
                    {plan.name}
                  </h3>
                  <h1
                    className="mb-[16px] text-[22px] font-bold md:text-[30px] lg:text-[40px]"
                    data-testid={`${plan.name.toLowerCase()}-price`}
                  >
                    ${toggle === 1 ? plan.price : getAnnualPrice(plan.price)} /{" "}
                    {toggle === 1 ? "month" : "year"}
                  </h1>
                  <p
                    className="mb-[46px] text-[14px]"
                    data-testid={`${plan.name.toLowerCase()}-description`}
                  >
                    The essentials to provide your best work for clients.
                  </p>
                  <div
                    className="mb-3 flex items-center gap-5"
                    data-testid={`${plan.name.toLowerCase()}-feature-1`}
                  >
                    <Image
                      src="/images/checkmark.svg"
                      alt=""
                      height={30}
                      width={30}
                    />
                    2 Projects
                  </div>
                  <div
                    className="mb-3 flex items-center gap-5 text-[16px]"
                    data-testid={`${plan.name.toLowerCase()}-feature-2`}
                  >
                    <Image
                      src="/images/checkmark.svg"
                      alt=""
                      height={30}
                      width={30}
                    />
                    Up to 100 subscribers
                  </div>
                  <div
                    className="mb-3 flex items-center gap-5 text-[16px]"
                    data-testid={`${plan.name.toLowerCase()}-feature-3`}
                  >
                    <Image
                      src="/images/checkmark.svg"
                      alt=""
                      height={30}
                      width={30}
                    />
                    Basic analytics
                  </div>
                  <div
                    className="mb-3 flex items-center gap-5 text-[16px]"
                    data-testid={`${plan.name.toLowerCase()}-feature-4`}
                  >
                    <Image
                      src="/images/checkmark.svg"
                      alt=""
                      height={30}
                      width={30}
                    />
                    24-hour support response time
                  </div>
                  <div
                    className="mb-3 flex items-center gap-5 text-[16px]"
                    data-testid={`${plan.name.toLowerCase()}-feature-5`}
                  >
                    <Image
                      src="/images/checkmark.svg"
                      alt=""
                      height={30}
                      width={30}
                    />
                    Marketing advisor
                  </div>
                  <div
                    className="mb-3 flex items-center gap-5 text-[16px]"
                    data-testid={`${plan.name.toLowerCase()}-feature-6`}
                  >
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
                      data-testid={`${plan.name.toLowerCase()}-button`}
                    >
                      Continue
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <section className="bg-white">
        <div
          className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10"
          data-testid="faq-section"
        >
          <div className="mb-20 grid w-full grid-cols-1 gap-y-10 lg:grid-cols-2">
            <div className="flex flex-col gap-3" data-testid="faq-header">
              <h1
                className="self-stretch text-4xl font-semibold text-neutral-600"
                role="heading"
                aria-level={1}
              >
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
                data-testid="contact-button"
              >
                Contact us
              </Button>
            </div>

            <FaqAccordion
              faqs={faqData}
              containerClassName="p-8"
              data-testid="faq-accordion"
            />
          </div>
        </div>
      </section>
    </>
  );
}
