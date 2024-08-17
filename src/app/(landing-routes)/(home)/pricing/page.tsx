"use client";

import axios from "axios";
import { getCookie } from "cookies-next";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import FaqAccordion from "~/components/layouts/accordion/FaqsAccordion";
import Heading from "~/components/layouts/heading";
import PricingCardSkeleton from "~/components/skeleton/pricingcardskeleton";
import { Button } from "~/components/ui/button";
import { faqData } from "~/constants/faqsdata";

interface BillingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  duration: string;
}

const getAnnualPrice = (monthlyPrice: string) => {
  const monthly = Number.parseFloat(monthlyPrice);
  const annual = monthly * 12 * 0.8;
  return annual.toFixed(2);
};

export default function Pricing() {
  const { data: session } = useSession();
  const [toggle, setToggle] = useState(1);
  const [plans, setPlans] = useState<BillingPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const locale = getCookie("NEXT_LOCALE") || "en";
  const t = useTranslations("pricing");

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const apiUrl = await getApiUrl();
        const access_token = session?.access_token;
        const response = await axios.get(`${apiUrl}/api/v1/payment/plans`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
            ...(locale ? { "Accept-Language": locale } : {}),
            "ngrok-skip-browser-warning": "true",
          },
        });
        setPlans(response.data.data);
      } catch {
        setError("Failed to fetch billing plans");
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, [session, locale]);

  return (
    <>
      <div
        className="mx-auto max-w-7xl px-5 pb-20 pt-5 md:px-10 lg:px-10 xl:px-10"
        data-testid="pricing-container"
      >
        <Heading
          tag={`${
            locale === "es" ? "Precios" : locale === "fr" ? "Prix" : "Pricing"
          }`}
          title={`${
            locale === "es"
              ? "Plan de Precios Simple y {{Asequible}}"
              : locale === "fr"
                ? "Plan de Tarification Simple et {{Abordable}}"
                : "Simple and {{Affordable}} Pricing Plan"
          }`}
          content={`${
            locale === "es"
              ? "Nuestros planes flexibles están diseñados para adaptarse a su negocio. Tenemos un plan para usted"
              : locale === "fr"
                ? "Nos plans flexibles sont conçus pour évoluer avec votre entreprise. Nous avons un plan pour vous."
                : "Our flexible plans are designed to scale with your business. We have a plan for you."
          }`}
        />

        <div
          className="align-center mx-auto mt-[50px] flex w-[405px] justify-between rounded-md bg-gray-200 p-2"
          data-testid="pricing-toggle"
        >
          <div
            onClick={() => setToggle(1)}
            className={`flex h-[50px] w-[190px] cursor-pointer items-center justify-center rounded-md ${toggle === 1 ? "bg-white font-medium" : ""}`}
            data-testid="monthly-toggle"
          >
            {t("monthly")}
          </div>
          <div
            onClick={() => setToggle(2)}
            className={`flex h-[50px] w-[215px] cursor-pointer items-center justify-center rounded-md ${toggle === 2 ? "bg-white font-medium" : ""}`}
            data-testid="annual-toggle"
          >
            {t("annual")}
          </div>
        </div>

        {loading && (
          <div className="align-center mt-[50px] flex flex-col flex-wrap justify-center gap-6 sm:flex-row">
            <PricingCardSkeleton />
          </div>
        )}

        {!loading && plans?.length === 0 && (
          <div className="align-center mt-[50px] flex flex-col flex-wrap justify-center gap-6 sm:flex-row">
            {t("billingPlansNotAvailable")}
          </div>
        )}

        {!loading && !error && (
          <>
            <div
              className="align-center mt-[50px] flex flex-col flex-wrap justify-center gap-5 sm:flex-row"
              data-testid="pricing-cards"
            >
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className="w-full rounded-xl border border-border px-[12px] py-[20px] hover:border-primary sm:w-[280px]"
                  data-testid={`${plan.name.toLowerCase()}-card-${toggle === 1 ? "monthly" : "annual"}`}
                >
                  <h3
                    className="mb-[16px] text-[18px] font-semibold capitalize"
                    data-testid={`${plan.name.toLowerCase()}-title`}
                  >
                    {plan.name}
                  </h3>
                  <h1
                    className="mb-[16px] text-[20px] font-bold md:text-[22px]"
                    data-testid={`${plan.name.toLowerCase()}-price`}
                  >
                    ${toggle === 1 ? plan.price : getAnnualPrice(plan.price)} /{" "}
                    {toggle === 1 ? "month" : "year"}
                  </h1>
                  <p
                    className="mb-[46px] text-[14px]"
                    data-testid={`${plan.name.toLowerCase()}-description`}
                  >
                    {plan.description}
                  </p>
                  {plan.features.map((feature, index) => {
                    return (
                      <div
                        key={index}
                        className="text-md mb-3 flex items-center gap-3"
                        data-testid={`${plan.name.toLowerCase()}-feature-${index + 1}`}
                      >
                        <Image
                          src="/images/checkmark.svg"
                          alt="check icon"
                          height={20}
                          width={20}
                        />
                        {feature}
                      </div>
                    );
                  })}

                  <Link
                    href={{
                      pathname: "/pricing/upgrade-plan",
                      query: {
                        planName: plan.name,
                        price: plan.price,
                        interval: plan.duration,
                      },
                    }}
                  >
                    <Button
                      size="lg"
                      className="mt-[51px] w-full bg-primary text-background hover:bg-destructive"
                      data-testid={`${plan.name.toLowerCase()}-button`}
                    >
                      {t("features.continue")}
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
                {t("faqHeader")}
              </h1>

              <p className="mb-3 text-[18px] text-neutral-600">
                {t("faqSubHeader")}
              </p>

              <Link
                href="/contact-us"
                className="flex w-[150px] justify-center rounded-md border border-input bg-background py-4 hover:bg-accent hover:text-accent-foreground"
                data-testid="contact-button"
              >
                {t("contactUs")}
              </Link>
            </div>

            <FaqAccordion
              faqs={faqData}
              containerClassName="px-4 py-1"
              data-testid="faq-accordion"
            />
          </div>
        </div>
      </section>
    </>
  );
}
