"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { useToast } from "~/components/ui/use-toast";

function Upgrade() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const searchParameters = useSearchParams();
  const price = searchParameters.get("price");
  const interval = searchParameters.get("interval");
  const planName = searchParameters.get("planName");

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
      toast({
        title: "Stripe Payment Failed",
        description: "Something went wrong in the request",
      });
    } finally {
      toast({
        title: "Redirecting...",
        description: "Redirecting you to stripe payment gateway...",
      });
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
              <h2 className="text-2xl font-semibold">Upgrade to {planName}</h2>
              <div className="my-5 flex w-full flex-col lg:flex-row lg:items-end">
                <div className="mb-5 w-full lg:mb-0 lg:mr-4">
                  <label className="mb-2 block">First Name</label>
                  <input
                    placeholder="Enter your first name"
                    type="text"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:outline-none focus:ring-[#F97316]"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:outline-none focus:ring-[#F97316]"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="mb-2 block">Business Name (Optional)</label>
                <input
                  type="text"
                  placeholder="Enter your business name"
                  className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:outline-none focus:ring-[#F97316]"
                />
              </div>
              <div className="my-5 flex w-full flex-col lg:flex-row lg:items-end">
                <div className="mb-5 w-full lg:mb-0 lg:mr-4">
                  <label className="mb-2 block">Country</label>
                  <input
                    placeholder="Enter your country"
                    type="text"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:outline-none focus:ring-[#F97316]"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block">City</label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:outline-none focus:ring-[#F97316]"
                  />
                </div>
              </div>

              <div className="my-5 flex w-full flex-col lg:flex-row lg:items-end">
                <div className="mb-5 w-full lg:mb-0 lg:mr-4">
                  <label className="mb-2 block">
                    State / Province / Region
                  </label>
                  <input
                    placeholder="Enter your state or region"
                    type="text"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:outline-none focus:ring-[#F97316]"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-2 block">Zip / Post code</label>
                  <input
                    type="text"
                    placeholder="Enter your zip or post code"
                    className="w-full rounded border border-[#7E97B4] p-2 focus:border-[#F97316] focus:outline-none focus:ring-[#F97316]"
                  />
                </div>
              </div>
              <hr className="my-4 border-t border-[#7E97B4]" />
              <div className="flex w-full justify-between">
                <div className="flex w-full items-center">
                  <input
                    type="radio"
                    className="accent-red-500 focus:ring-red-500"
                    name="paymentMethod"
                    checked={true}
                  />
                  <span className="ml-2">Pay with Stripe</span>
                </div>
                <svg
                  width="80"
                  height="34"
                  viewBox="0 0 80 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Stripe" clipPath="url(#clip0_34880_39228)">
                    <path
                      id="Vector"
                      d="M5.62219 13.3256C5.62219 12.4591 6.33328 12.1256 7.51125 12.1256C9.2 12.1256 11.3333 12.6369 13.0222 13.548V8.32562C11.1778 7.59234 9.35563 7.30344 7.51125 7.30344C3 7.30344 0 9.65906 0 13.5925C0 19.7256 8.44438 18.748 8.44438 21.3925C8.44438 22.4145 7.55562 22.748 6.31109 22.748C4.46672 22.748 2.11109 21.9923 0.244375 20.9701V26.2591C2.31109 27.148 4.4 27.5256 6.31109 27.5256C10.9333 27.5256 14.1111 25.2369 14.1111 21.2591C14.0889 14.6369 5.62219 15.8145 5.62219 13.3256ZM20.6444 2.85906L15.2222 4.01453L15.2 21.8145C15.2 25.1036 17.6667 27.5256 20.9556 27.5256C22.7778 27.5256 24.1111 27.1923 24.8444 26.7923V22.2812C24.1334 22.5702 20.6222 23.5923 20.6222 20.3034V12.4145H24.8444V7.68125H20.6222L20.6444 2.85906ZM31.7556 9.32562L31.4 7.68125H26.6V27.1256H32.1556V13.948C33.4666 12.2369 35.6889 12.548 36.3778 12.7923V7.68125C35.6667 7.41453 33.0667 6.92562 31.7556 9.32562ZM37.7333 7.68125H43.3111V27.1256H37.7333V7.68125ZM37.7333 5.99234L43.3111 4.79234V0.28125L37.7333 1.45906V5.99234ZM54.9111 7.30344C52.7333 7.30344 51.3333 8.32562 50.5556 9.03687L50.2666 7.65906H45.3778V33.57L50.9333 32.3923L50.9556 26.1034C51.7556 26.6812 52.9333 27.5034 54.8889 27.5034C58.8667 27.5034 62.4889 24.3034 62.4889 17.2591C62.4667 10.8145 58.8 7.30344 54.9111 7.30344ZM53.5778 22.6145C52.2667 22.6145 51.4888 22.148 50.9556 21.5701L50.9333 13.3256C51.5111 12.6812 52.3111 12.2369 53.5778 12.2369C55.6 12.2369 57 14.5034 57 17.4145C57 20.3923 55.6222 22.6145 53.5778 22.6145ZM80 17.4812C80 11.7923 77.2444 7.30344 71.9778 7.30344C66.6888 7.30344 63.4888 11.7925 63.4888 17.4369C63.4888 24.1256 67.2667 27.5034 72.6888 27.5034C75.3333 27.5034 77.3333 26.9034 78.8444 26.0591V21.6145C77.3334 22.3702 75.6 22.8369 73.4 22.8369C71.2444 22.8369 69.3333 22.0812 69.0889 19.4591H79.9556C79.9556 19.17 80 18.0145 80 17.4812ZM69.0222 15.3702C69.0222 12.8591 70.5556 11.8145 71.9556 11.8145C73.3111 11.8145 74.7556 12.8591 74.7556 15.3702H69.0222Z"
                      fill="#6772E5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34880_39228">
                      <rect
                        width="80"
                        height="33.44"
                        fill="white"
                        transform="translate(0 0.28125)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <hr className="my-4 border-t border-[#7E97B4]" />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="accent-[#F97316] checked:border-transparent checked:bg-[#F97316] focus:ring-[#F97316]"
                  style={{ color: "white" }}
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
                    className="accent-red-500 focus:ring-red-500"
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
                    <span className="animate-pulse">Processing</span>{" "}
                    <LoadingSpinner className="size-4 animate-spin sm:size-5" />
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

export default Upgrade;
