import Image from "next/image";
import icon from '../../../../../../public/admin-dashboard/icons/icon.svg'
import React from "react";

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

      <div className="mt-10 px-3  flex gap-3">
        <h1 className="text-base w-[16rem] font-semibold">
          Subscribe to your <br /> desired plan.
        </h1>

        {plans.map((plan, index) => (
          <div key={index} className="">
            <div className="flex flex-col gap-3 items-start justify-center pt-1">
              <h1 className="text-base font-semibold">{plan.title}</h1>
              <h2 className="text-[25px] font-medium">{plan.price} <span className="text-[13px] font-normal">/month</span></h2>
              <div className="text-sm">
                <p>{plan.description}</p>
              </div>
              <button className={`py-[8px] px-[49px] text-sm rounded-lg ${plan.buttonClass}`}>{plan.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 px-3 flex border pb-20 py-5 border-[#FFF8F2] bg-[#FFF8F2] items-start justify-center">
        <h1 className="text-base w-40 font-semibold">Highlights</h1>
        

        <div className="flex gap-[3rem] text-sm text-[#0A0A0A]">
          <ul className="flex flex-col gap-2 list-disc">
            <li>10 Projects</li>
            <li>Up to 10 subscribers</li>
            <li>Advanced analytics</li>
          </ul>
          <ul className="flex pl-6 flex-col gap-2 list-disc">
            <li>100 projects</li>
            <li>Up to 50 subscribers</li>
            <li>Advanced analytics</li>
            <li>24-hour support</li>
          </ul>
          <ul className="flex pl-2 flex-col gap-2 list-disc">
            <li>200 projects</li>
            <li>Up to 100 subscribers</li>
            <li>Advanced analytics</li>
            <li>24-hour support</li>
            <li>Marketing advisor</li>
          </ul>
          <ul className="pl-3 flex flex-col list-disc gap-2">
            <li>300 Projects</li>
            <li>Up to 500 subscribers</li>
            <li>Advanced analytics</li>
            <li>24-hour support</li>
            <li>Marketing advisor</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex justify-center items-center">
        <h1 className="text-base">Compare all features</h1>
        <Image src={icon} alt="" />
      </div>
    </div>
  );
};

export default PricingPage;
