import React from "react";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  current?: boolean;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0/month",
    description: "The essential to provide your best work for clients.",
    features: ["10 Projects", "Up to 10 subscribers", "Advanced analytics"],
    current: true,
  },
  {
    name: "Basic",
    price: "$20/month",
    description: "Ideal for growing needs who want more features.",
    features: [
      "100 Projects",
      "Up to 50 subscribers",
      "Advanced analytics",
      "24 hour support",
    ],
  },
  {
    name: "Advanced",
    price: "$50/month",
    description: "Designed for power users and maximum functionalities.",
    features: [
      "200 Projects",
      "Up to 100 subscribers",
      "Advanced analytics",
      "24 hour support",
      "Marketing advisor",
    ],
  },
  {
    name: "Premium",
    price: "$100/month",
    description: "Perfect for users who want more features.",
    features: [
      "300 Projects",
      "Up to 500 subscribers",
      "Advanced analytics",
      "24 hour support",
      "Marketing advisor",
    ],
  },
];

const PricingPlans: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8 text-left">
        <h2 className="text-2xl font-bold">Current Plan</h2>
        <div className="mt-4 rounded bg-orange-100 p-4 text-orange-800">
          <p>
            Your account is on a free 90-day trial of our free plan, through
            September 27th. Upgrade anytime to stay on this plan when your trial
            ends $0/month.
          </p>
        </div>
      </div>
      {/* Subscribe Section */}
      <div className="mb-8">
        <h2
          className="text-left font-semibold leading-normal"
          style={{ fontSize: "16px", fontWeight: 600 }}
        >
          Subscribe to your desired plan
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg border p-6 ${
                plan.current ? "bg-[#FDEEE3]" : "bg-white"
              }`}
              style={{
                width: "250px", // Adjusted width for better fit
                height: "auto", // Adjusted height to fit content
                minHeight: "280px", // Ensures sufficient height
              }}
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-2xl font-bold">{plan.price}</p>
              <p className="mt-2">{plan.description}</p>
              <button
                className={`mt-4 flex items-center justify-center gap-2 rounded px-4 py-2 ${
                  plan.current
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-orange-500 text-white"
                }`}
                disabled={plan.current}
                style={{ padding: "8px 49px" }}
              >
                {plan.current ? "Current Plan" : "Upgrade"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Highlights Section */}
      <div className="mt-8 rounded-lg bg-[#FFF8F2] p-6">
        <h3 className="mb-4 text-xl font-bold">Highlights</h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan) => (
            <div key={plan.name}>
              <ul className="list-disc space-y-2 pl-5">
                {plan.features.map((feature, index) => (
                  <li key={index} style={{ marginTop: "19px" }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
