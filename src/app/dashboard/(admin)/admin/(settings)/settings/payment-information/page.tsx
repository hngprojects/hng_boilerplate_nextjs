import Link from "next/link";

import { Button } from "~/components/ui/button";
import TableComponent from "./_components/paymentTable";

interface Plan {
  name: string;
  price: number;
  currency: string;
  billingCycle: string;
  description: string;
  features: string[];
  route: string;
  buttonText: string;
  buttonStyle: string;
  isCurrentPlan?: boolean;
}

const PaymentInformation = () => {
  const plans: Plan[] = [
    {
      name: "Free",
      price: 0,
      currency: "$",
      billingCycle: "month",
      description: "The essential to provide your best work for clients.",
      features: ["10 Projects", "Up to 10 subscribers", "Advanced analytics"],
      route: "#", // No route needed for the current plan
      buttonText: "Current Plan",
      buttonStyle: "w-full rounded-[6px] bg-[#FDEEE3] px-12 py-2 text-black",
      isCurrentPlan: true,
    },
    {
      name: "Basic",
      price: 20,
      currency: "$",
      billingCycle: "month",
      description: "Ideal for growing needs who want more features.",
      features: [
        "100 Projects",
        "Up to 50 subscribers",
        "Advanced analytics",
        "24-hour support",
      ],
      route: "/dashboard/admin/settings/payment-information/upgrade",
      buttonText: "Upgrade",
      buttonStyle: "w-full rounded-[6px] bg-primary px-12 py-2 text-white",
    },
    {
      name: "Advanced",
      price: 50,
      currency: "$",
      billingCycle: "month",
      description: "Designed for power users and maximum functionalities.",
      features: [
        "200 Projects",
        "Up to 100 subscribers",
        "Advanced analytics",
        "24-hour support",
        "Marketing advisor",
      ],
      route: "/dashboard/admin/settings/payment-information/upgrade",
      buttonText: "Upgrade",
      buttonStyle: "w-full rounded-[6px] bg-primary px-12 py-2 text-white",
    },
    {
      name: "Premium",
      price: 100,
      currency: "$",
      billingCycle: "month",
      description: "Perfect for users who want more features.",
      features: [
        "300 Projects",
        "Up to 500 subscribers",
        "Advanced analytics",
        "24-hour support",
        "Marketing advisor",
      ],
      route: "/dashboard/admin/settings/payment-information/upgrade",
      buttonText: "Upgrade",
      buttonStyle: "w-full rounded-[6px] bg-primary px-12 py-2 text-white",
    },
  ];

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
          <div className="hidden w-1/5 py-[20px] md:block">
            <p className="font-semibold">Subscribe to your desired plan</p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-start md:justify-evenly md:gap-0">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex w-[258px] flex-col justify-between gap-[16px] px-[20px] py-[15px] hover:rounded-md hover:border hover:border-primary md:h-full md:w-[200px] md:border-none"
              >
                <p className="font-semibold">{plan.name}</p>
                <p>
                  <span className="text-[25px] font-medium">${plan.price}</span>{" "}
                  <span className="text-[13px]">/{plan.billingCycle}</span>{" "}
                </p>
                <p className="text-sm text-[#525252]">{plan.description}</p>
                <ul className="flex w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px] md:hidden">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="text-[14px]">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.isCurrentPlan ? (
                  <Button className={plan.buttonStyle}>
                    {plan.buttonText}
                  </Button>
                ) : (
                  <Link href={`${plan.route}?plan=${plan.name}`}>
                    <Button className={plan.buttonStyle}>
                      {plan.buttonText}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden w-full flex-col rounded-[12px] bg-[#FFF8F2] p-5 md:flex md:flex-row">
          <div className="w-[152px] py-[20px]">
            <p className="font-semibold">Highlights</p>
          </div>
          <div className="flex items-start justify-between">
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

      <div className="max-w-[1000px]">
        <TableComponent />
      </div>
    </div>
  );
};

export default PaymentInformation;
