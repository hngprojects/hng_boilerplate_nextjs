"use client";

import axios from "axios";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/common/input/input";
import PlanUpgradeSuccessfulModal from "~/components/common/modals/plan-upgrade-successful";
import { toast } from "~/components/ui/use-toast";

type PlanName = "Basic" | "Advanced" | "Premium";

const Checkout = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const searchParameters = useSearchParams();

  const { data: session, status } = useSession();
  const { user } = session ?? {};

  const planName = searchParameters.get("plan") as PlanName | null;
  let planPrice: number | undefined;
  switch (planName) {
    case "Basic": {
      planPrice = 20;
      break;
    }
    case "Advanced": {
      planPrice = 50;
      break;
    }
    case "Premium": {
      planPrice = 100;
      break;
    }
    default: {
      toast({
        title: "Error",
        description: "Invalid plan selected",
        variant: "destructive",
      });
      return;
    }
  }

  const billingOption = [
    {
      name: "Pay monthly",
      description: `$ ${planPrice}/ month/member`,
    },
    {
      name: "Pay yearly",
      description: `$ ${planPrice * 10}/ year/member`,
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

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const paymentCheckout = async () => {
    const fullNameInput = document.querySelector<HTMLInputElement>(
      'input[placeholder="Full Name"]',
    );
    const termsCheckbox = document.querySelector(
      "#termsAndConditions",
    ) as HTMLInputElement;

    if (!fullNameInput?.value) {
      toast({
        title: "Error",
        description: "Please enter your full name",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    if (!termsCheckbox?.checked) {
      toast({
        title: "Error",
        description: "You must agree to the terms and conditions",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }
    setLoading(true);

    if (status === "authenticated" && user?.id) {
      const billingFrequency = document.querySelector(
        'input[name="billing_option"]:checked',
      )?.id;
      let amount = planPrice as number;

      if (billingFrequency === "Pay yearly") {
        amount *= 10;
      }
      const payload = {
        email: user?.email as string,
        amount: amount,
        plan: planName as string,
        frequency: billingFrequency === "Pay yearly" ? "yearly" : "monthly",
      };
      try {
        const baseUrl = await getApiUrl();
        const API_URL = `${baseUrl}/api/v1/transactions/initiate/subscription`;
        const response = await axios.post(API_URL, payload, {
          headers: {
            Authorization: `Bearer ${session?.access_token}`,
          },
        });
        if (response.data) {
          setLoading(false);
          toast({
            title: "Success",
            description: `Wait while you are being redirected...`,
          });
          window.location.href = response.data?.data?.authorization_url;
        }
      } catch {
        toast({
          title: "Error",
          description: "Failed to create transaction",
          variant: "destructive",
        });
        setLoading(false);
      }
    }
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
              Upgrade to {planName}
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
              <p className="text-base font-semibold">${planPrice} /month</p>
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
          onClick={paymentCheckout}
          isLoading={loading}
          isDisabled={loading}
        >
          {loading ? "Processing..." : "Proceed to Payment"}
        </CustomButton>
      </div>

      <PlanUpgradeSuccessfulModal onClose={() => setOpen(!open)} show={open} />
    </section>
  );
};

export default Checkout;
