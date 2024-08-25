import Link from "next/link";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const paymentPlans = [
  {
    name: "Free",
    price: 0,
    text: "The essential to provide your best work for clients.",
    features: ["10 Projects", "Up to 10 subscribers", "Advanced analytics"],
    buttonText: "Current Plan",
    link: "/dashboard/admin/settings/payment-information",
  },
  {
    name: "Basic",
    price: 20,
    text: "Ideal for growing needs who want more features.",
    features: [
      "100 Projects",
      "Up to 50 subscribers",
      "Advanced analytics",
      "24-hour support",
    ],
    buttonText: "Upgrade",
    link: "/dashboard/admin/settings/payment-information/upgrade/basic",
  },
  {
    name: "Advanced",
    price: 50,
    text: "Designed for power users and maximum functionalities.",
    features: [
      "200 Projects",
      "Up to 100 subscribers",
      "Advanced analytics",
      "24-hour support",
      "Marketing advisor",
    ],
    buttonText: "Upgrade",
    link: "/dashboard/admin/settings/payment-information/upgrade/advanced",
  },
  {
    name: "Premium",
    price: 100,
    text: "Perfect for users who want more features.",
    features: [
      "300 Projects",
      "Up to 500 subscribers",
      "Advanced analytics",
      "24-hour support",
      "Marketing advisor",
    ],
    buttonText: "Upgrade",
    link: "/dashboard/admin/settings/payment-information/upgrade/premium",
  },
];

const PaymentInformation = () => {
  return (
    <div className="p-4 md:p-6">
      <h1 className="mb-10 text-[28px] font-bold">Current Plan</h1>
      <div className="flex min-h-screen max-w-[1000px] flex-col gap-6">
        <div className="w-full space-y-2 rounded-[12px] bg-[#FFF8F2] p-5">
          <h2 className="text-2xl font-semibold">Free</h2>
          <p className="text-sm">
            Your account is on a free 90-day trial of our free plan, through
            September 27th. Upgrade anytime to stay on this plan when your trial
            ends.
          </p>
          <p className="text-sm text-[#525252]">$0/month</p>
        </div>
        <div className="flex w-full p-5">
          <div className="hidden w-[152px] py-[20px] md:block md:grow">
            <p className="font-semibold">Subscribe to your desired plan</p>
          </div>

          <div className="flex h-full w-full flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:items-stretch md:justify-start md:gap-4">
            {paymentPlans.map((plan) => (
              <div
                key={plan.name}
                className={cn(
                  "flex w-[258px] flex-col gap-[16px] px-[20px] py-[15px] hover:rounded-md hover:border hover:border-primary md:w-[200px] md:border-none",
                  plan.name === "Free"
                    ? ""
                    : "border-primary bg-[#FFF8F2] md:bg-white",
                )}
              >
                <p className="font-semibold">{plan.name}</p>
                <p>
                  {" "}
                  <span className="text-[25px] font-medium">
                    ${plan.price}
                  </span>{" "}
                  <span className="text-[13px]">/month</span>{" "}
                </p>
                <p className="text-sm text-[#525252]">{plan.text}</p>
                <ul className="flex w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px] md:hidden">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <span className="text-[14px]">{f}</span>{" "}
                    </li>
                  ))}
                </ul>
                <Button
                  disabled={plan.name === "Free"}
                  className={cn(
                    "mt-auto w-full rounded-[6px] px-12 py-2",
                    plan.name === "Free"
                      ? "bg-[#FDEEE3] text-black hover:bg-[#FDEEE3]"
                      : "bg-primary text-white",
                  )}
                  asChild
                >
                  <Link href={plan.link}>
                    {plan.name === "Free" ? "Current Plan" : "Upgrade"}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden w-full flex-col rounded-[12px] bg-[#FFF8F2] p-5 md:flex md:flex-row">
          <div className="w-[152px] py-[20px]">
            <p className="font-semibold">Highlights</p>
          </div>
          <div className="flex flex-wrap items-start justify-between">
            <ul className="flex h-[220px] w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px]">
              <li>
                <span className="text-[14px]">10 Projects</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Up to 10 subscribers</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Advanced analytics</span>{" "}
              </li>
            </ul>
            <ul className="flex h-[220px] w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px]">
              <li>
                <span className="text-[14px]">100 Projects</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Up to 50 subscribers</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Advanced analytics</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">24-hour support</span>{" "}
              </li>
            </ul>
            <ul className="flex h-[220px] w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px]">
              <li>
                <span className="text-[14px]">200 Projects</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Up to 100 subscribers</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Advanced analytics</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">24-hour support</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Marketing advisor</span>{" "}
              </li>
            </ul>
            <ul className="flex h-[220px] w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px]">
              <li>
                <span className="text-[14px]">300 Projects</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Up to 500 subscribers</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Advanced analytics</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">24-hour support</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Marketing advisor</span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInformation;
