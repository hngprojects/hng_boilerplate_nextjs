"use client";

import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/common/input/input";
import PlanUpgradeSuccessfulModal from "~/components/common/modals/plan-upgrade-successful";

const billingOption = [
  {
    name: "Pay monthly",
    description: "$20/ month/member",
  },
  {
    name: "Pay yearly",
    description: "$200/ year/member",
  },
];

const paymentMethod = [
  {
    name: "Credit Card",
    icon: "/user-dashboard/svg/credit-card.svg",
    width: 64,
  },
  {
    name: "Stripe Payment",
    icon: "/user-dashboard/svg/stripe-logo.svg",
    width: 84,
  },
  {
    name: "Paypal Payment",
    icon: "/user-dashboard/svg/paypal-logo.svg",
    width: 153,
  },
];

const Checkout = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <section className="px-8 py-6">
      <div className="flex max-w-[592px] flex-col gap-[34px]">
        <span className="flex flex-col gap-4">
          <span className="flex items-center gap-3">
            <button type="button" onClick={() => router.back()} title="Back">
              <ArrowLeft className="size-6" />
            </button>
            <h1 className="text-lg font-semibold text-zinc-950 md:text-2xl">
              Upgrade to Basic
            </h1>
          </span>
          <p className="text-xs font-normal leading-[19.36px] text-zinc-950 md:text-base">
            Do more with unlimited users and Integration when you upgrade
          </p>
        </span>

        <div className="flex flex-col gap-4">
          <CustomInput
            placeholder="Full Name"
            label="Enter Full Name"
            className="border-border"
            type="text"
          />
          <CustomInput
            placeholder="Business Name"
            label="Business Name (Optional)"
            className="border-border"
            type="text"
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="billing_option" className="text-base font-semibold">
            Billing Option
          </label>

          <ul className="space-y-4">
            {billingOption.map((item, index) => (
              <li key={index}>
                <label htmlFor={item.name} className="relative">
                  <input
                    id={item.name}
                    type="radio"
                    defaultChecked={index == 1 ? true : false}
                    name="billing_option"
                    className="peer sr-only"
                    required
                  />
                  <div className="flex h-[88px] w-full cursor-pointer flex-col justify-center rounded-lg border bg-white p-5 shadow-sm ring-primary duration-200 peer-checked:ring-2">
                    <div className="flex flex-col gap-1 pl-10">
                      <h3 className="text-base font-semibold">{item.name}</h3>
                      <p className="text-xs text-neutral-dark-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <span className="absolute left-5 top-8 block h-5 w-5 rounded-full border border-border peer-checked:border-[5px] peer-checked:border-primary"></span>
                </label>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4">
            <span className="flex items-center justify-between gap-8">
              <p className="text-base font-semibold">$20 /month</p>
              <CustomButton
                variant="outline"
                icon={isDetailsVisible ? <ChevronUp /> : <ChevronDown />}
                isRightIconVisible={true}
                size="sm"
                onClick={toggleDetails}
              >
                Details
              </CustomButton>
            </span>

            {isDetailsVisible && (
              <div className="flex flex-col gap-[10px] text-xs text-neutral-dark-1">
                <span className="flex justify-between gap-8">
                  <p>Members in your workspace</p>
                  <p>1</p>
                </span>
                <span className="flex justify-between gap-8">
                  <p>x$20/month/member</p>
                  <p>$20</p>
                </span>
                <hr />
                <span className="flex justify-between gap-8">
                  <p>Subtotal</p>
                  <p>$20</p>
                </span>
                <span className="flex justify-between gap-8">
                  <p>Tax if applicable</p>
                  <p>$20</p>
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="payment_method" className="text-base font-semibold">
            Choose Payment Method
          </label>

          <ul className="space-y-4">
            {paymentMethod.map((item, index) => (
              <li key={index}>
                <label htmlFor={item.name} className="relative">
                  <input
                    id={item.name}
                    type="radio"
                    defaultChecked={index == 1 ? true : false}
                    name="payment_method"
                    className="peer sr-only"
                    required
                  />
                  <div className="flex h-[88px] w-full cursor-pointer flex-col justify-center rounded-lg border bg-white p-5 shadow-sm ring-primary duration-200 peer-checked:ring-2">
                    <div className="flex items-center justify-between gap-8 pl-10">
                      <h3 className="text-base font-semibold">{item.name}</h3>
                      <Image
                        src={item.icon}
                        alt={item.name}
                        className=""
                        width={item.width}
                        height={40}
                      />
                    </div>
                  </div>
                  <span className="absolute left-5 top-8 block h-5 w-5 rounded-full border border-border peer-checked:border-[5px] peer-checked:border-primary"></span>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <label htmlFor="termsAndConditions" className="flex gap-4">
            <input
              type="checkbox"
              id="termsAndConditions"
              name="terms_and_conditions"
              className="size-4 bg-white text-neutral-dark-1 accent-primary"
            />

            <span className="text- text-xs">
              By submitting this form, you confirm that you agree to our{" "}
              <Link
                href=""
                className="font-bold text-primary duration-150 hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href=""
                className="font-bold text-primary duration-150 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </div>

        <CustomButton
          type="submit"
          className="bg-primary"
          onClick={() => setOpen(true)}
        >
          Proceed to Payment
        </CustomButton>
      </div>

      <PlanUpgradeSuccessfulModal onClose={() => setOpen(!open)} show={open} />
    </section>
  );
};

export default Checkout;
