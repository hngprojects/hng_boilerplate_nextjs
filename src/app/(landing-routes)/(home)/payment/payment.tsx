"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";

function Payment() {
  const [loading, setLoading] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const searchParameters = useSearchParams();
  const price = searchParameters.get("price");
  const interval = searchParameters.get("interval");
  const planName = searchParameters.get("planName");
  const router = useRouter();
  const { data } = useSession();

  async function handleStripePayment() {
    try {
      setLoading(true);
      const apiUrl = await getApiUrl();
      const requestBody = {
        user_id: data?.user?.id,
        plan_name: planName,
      };

      const response = await axios.post(
        `${apiUrl}/api/v1/payment/stripe/upgrade-plan`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${data?.access_token}`,
            "ngrok-skip-browser-warning": "true",
          },
        },
      );
      router.push(response.data.data.checkout_url);
    } catch {
      throw new Error("An error occurred");
    } finally {
      setLoading(false);
    }
  }

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsCheckboxChecked(event.target.checked);
  };
  return (
    <>
      <div className="w-full max-w-full">
        <div className="mx-auto max-w-[1440px] px-5 pb-20 pt-12 sm:px-7 md:px-10 lg:px-32">
          <div className="flex flex-col items-start justify-between lg:flex-row">
            <div className="mb-7 mr-0 w-full rounded-lg border border-[#7E97B4] p-5 shadow-sm lg:mb-0 lg:mr-5 lg:w-[35rem]">
              <h2 className="text-2xl font-semibold">Checkout</h2>
              <div className="mt-5 flex w-full flex-col lg:flex-row">
                <div className="mb-5 w-full lg:mb-0 lg:mr-7">
                  <label className="mb-2 block">First name</label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:!border-[#F97316] focus:!ring-[#F97316]"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block">Last name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:ring-[#F97316]"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block">Business Name (Optional)</label>
                <input
                  type="text"
                  className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:ring-[#F97316]"
                />
              </div>
              <div className="my-5 flex w-full flex-col lg:flex-row lg:items-end">
                <div className="mb-5 w-full lg:mb-0 lg:mr-7">
                  <label className="mb-2 block">Country</label>
                  <input
                    type="text"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:ring-[#F97316]"
                  />
                </div>
                <div className="mt-5">
                  <label className="mb-2 block">City</label>
                  <input
                    type="text"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:ring-[#F97316]"
                  />
                </div>
              </div>

              <div className="my-5 flex w-full flex-col lg:flex-row lg:items-end">
                <div className="mb-5 w-full lg:mb-0 lg:mr-7">
                  <label className="mb-2 block">State/ Province/ Region</label>
                  <input
                    type="text"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:ring-[#F97316]"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block">Zip/ Post code</label>
                  <input
                    type="text"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:ring-[#F97316]"
                  />
                </div>
              </div>
              <hr className="my-4 border-t border-[#7E97B4]" />
              <div className="flex w-full justify-between">
                <div className="flex w-full items-center">
                  <input
                    type="radio"
                    className="text-[#F97316] focus:ring-[#F97316]"
                    name="paymentMethod"
                    checked={true}
                  />
                  <span className="ml-2">Pay with Stripe</span>
                </div>
                <Image
                  src="/images/integration/stripe.svg"
                  alt="stripe icon"
                  width={80}
                  height={33.44}
                />
              </div>
              <hr className="my-4 border-t border-[#7E97B4]" />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="text-[#F97316] focus:ring-[#F97316]"
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-xs font-medium">
                  By submitting this form, you confirm that you agree to our{" "}
                  <span className="text-[#F97316]">Terms of Service</span> and{" "}
                  <span className="text-[#F97316]">Privacy Policy</span>.
                </span>
              </div>
            </div>

            <div className="w-full rounded-lg border border-[#7E97B4] p-5 shadow-sm lg:w-[23rem]">
              <h2 className="mb-5 text-2xl font-semibold">Order summary</h2>
              <p className="mb-5 text-lg font-medium">Billing cycle:</p>
              <div className="mb-10 flex w-full">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="bg-red-400 text-gray-500 focus:ring-gray-500"
                    name="billingCycle"
                    checked={true}
                  />
                  <span className="ml-2">{interval}</span>
                </div>
                <span className="ml-auto">${price}/m</span>
              </div>
              <hr className="my-4 border-t border-[#7E97B4]" />
              <div className="mb-2 flex justify-between text-lg">
                <span>Subtotal</span>
                <span>${price}.00/month</span>
              </div>
              <div className="mb-5 flex justify-between text-lg">
                <span>Tax</span>
                <span>$0.00/month</span>
              </div>
              <hr className="my-4 border-t border-[#7E97B4]" />
              <div className="mb-10 flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>${price}.00/month</span>
              </div>
              <button
                className={`w-full rounded-full bg-[#F97316] py-2 text-white ${
                  isCheckboxChecked
                    ? "hover:bg-[#FBA163]"
                    : "cursor-not-allowed opacity-50"
                }`}
                disabled={!isCheckboxChecked}
                onClick={handleStripePayment}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    Processing ...
                  </span>
                ) : (
                  "Confirm order"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
