import Image from "next/image";

import icon from "../../../../../../public/admin-dashboard/icons/icon.svg";

const PricingPage = () => {
  const plans = [
    {
      title: "Free",
      price: "$0",
      description: "The essential to provide your best work for clients.",
      buttonText: "Current Plan",
      buttonClass: "bg-[#FFF8F2] border-[#FFF8F2] text-[#525252]",
    },
    {
      title: "Basic",
      price: "$20",
      description: "Ideal for growing needs who want more features.",
      buttonText: "Upgrade",
      buttonClass: "bg-[#F97316] border-[#F97316] text-[#FAFAFA]",
    },
    {
      title: "Advanced",
      price: "$50",
      description: "Designed for power users and maximum functionalities.",
      buttonText: "Upgrade",
      buttonClass: "bg-[#F97316] border-[#F97316] text-[#FAFAFA]",
    },
    {
      title: "Premium",
      price: "$100",
      description: "Perfect for users who want more features.",
      buttonText: "Upgrade",
      buttonClass: "bg-[#F97316] border-[#F97316] text-[#FAFAFA]",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-[#0A0A0A]">Current Plan</h1>

      <div className="mt-5 w-full rounded-md border border-[#FFF8F2] bg-[#FFF8F2] px-3 py-5">
        <h2 className="text-xl font-semibold">Free</h2>
        <p className="text-sm text-[#0A0A0A]">
          Your account is on a free 90-day trial of our free plan, through
          September 27th. Upgrade anytime to stay on this plan when your trial
          ends.
        </p>
        <span className="text-sm text-[#525252]">$0/month</span>
      </div>

      <div className="mt-10 flex gap-3 px-3">
        <h1 className="w-[16rem] text-base font-semibold">
          Subscribe to your <br /> desired plan.
        </h1>

        {plans.map((plan, index) => (
          <div key={index} className="">
            <div className="flex flex-col items-start justify-center gap-3 pt-1">
              <h1 className="text-base font-semibold">{plan.title}</h1>
              <h2 className="text-[25px] font-medium">
                {plan.price}{" "}
                <span className="text-[13px] font-normal">/month</span>
              </h2>
              <div className="text-sm">
                <p>{plan.description}</p>
              </div>
              <button
                className={`rounded-lg px-[49px] py-[8px] text-sm ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-start justify-center border border-[#FFF8F2] bg-[#FFF8F2] px-3 py-5 pb-20">
        <h1 className="w-40 text-base font-semibold">Highlights</h1>

        <div className="flex gap-[3rem] text-sm text-[#0A0A0A]">
          <ul className="flex list-disc flex-col gap-2">
            <li>10 Projects</li>
            <li>Up to 10 subscribers</li>
            <li>Advanced analytics</li>
          </ul>
          <ul className="flex list-disc flex-col gap-2 pl-6">
            <li>100 projects</li>
            <li>Up to 50 subscribers</li>
            <li>Advanced analytics</li>
            <li>24-hour support</li>
          </ul>
          <ul className="flex list-disc flex-col gap-2 pl-2">
            <li>200 projects</li>
            <li>Up to 100 subscribers</li>
            <li>Advanced analytics</li>
            <li>24-hour support</li>
            <li>Marketing advisor</li>
          </ul>
          <ul className="flex list-disc flex-col gap-2 pl-3">
            <li>300 Projects</li>
            <li>Up to 500 subscribers</li>
            <li>Advanced analytics</li>
            <li>24-hour support</li>
            <li>Marketing advisor</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <h1 className="text-base">Compare all features</h1>
        <Image src={icon} alt="" />
      </div>
    </div>
  );
};

export default PricingPage;
