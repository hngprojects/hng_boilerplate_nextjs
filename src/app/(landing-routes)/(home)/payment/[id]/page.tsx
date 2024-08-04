"use client";

import { useParams } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";

interface BillingPlan {
  id: string;
  name: string;
  price: number;
}

interface FormData {
  paymentMethod: string;
  email: string;
  cardInformation: string;
  expiryDate: string;
  cvc: string;
  cardholderName: string;
  countryOrRegion: string;
}

interface FormErrors {
  paymentMethod?: string;
  email?: string;
  cardInformation?: string;
  expiryDate?: string;
  cvc?: string;
  cardholderName?: string;
  countryOrRegion?: string;
}

const Payment = () => {
  const { id } = useParams<{ id: string }>(); // Assuming the ID is obtained from the URL params
  const [plan, setPlan] = useState<BillingPlan | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    paymentMethod: "",
    email: "",
    cardInformation: "",
    expiryDate: "",
    cvc: "",
    cardholderName: "",
    countryOrRegion: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [error, setError] = useState<string | undefined>();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Please select a payment method.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.cardInformation)
      newErrors.cardInformation = "Card information is required.";
    if (!formData.expiryDate) newErrors.expiryDate = "Expiry date is required.";
    if (!formData.cvc) newErrors.cvc = "CVC is required.";
    if (!formData.cardholderName)
      newErrors.cardholderName = "Cardholder name is required.";
    if (!formData.countryOrRegion)
      newErrors.countryOrRegion = "Country or region is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      // console.log("Form submitted:", formData);
    }
  };

  useEffect(() => {
    const fetchPlan = async () => {
      if (!id) return;

      try {
        const url = await getApiUrl();
        const response = await fetch(`${url}/api/v1/billing-plans/${id}`);
        const data = await response.json();

        setPlan(data.data);
      } catch {
        setError("Failed to fetch billing plan");
      } finally {
        setLoading(false);
      }
    };

    fetchPlan();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!plan) {
    return <div>No plan found</div>;
  }
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
      <div className="min-h-screen p-4">
        <div className="lg:gap- flex w-full flex-col justify-between md:flex-col md:gap-20 lg:flex-row">
          {/* Summary Section */}
          <div className="mb-5 md:mb-0 md:w-full lg:mb-0 lg:w-1/2">
            <h2 className="text-[20px] font-normal leading-[24.2px] text-[#71717A]">
              Subscribe to Boilerplates
            </h2>
            <p className="mb-[18.5px] mt-2 text-[36px] font-semibold leading-[43.57px]">
              ${plan.price}{" "}
              <span className="text-sm text-[#71717A]">per month</span>
            </p>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                className="mr-2 h-[24px] w-[24px]"
                onChange={handleChange}
              />
              <p>
                Pay annually <span className="text-[#E77F1E]">Save 20%</span>
              </p>
            </label>
            <div className="mt-6 pt-4">
              <div>
                <div className="flex justify-between pb-[25px]">
                  <div>
                    <span className="mb-[4px] text-[16px] font-medium leading-[24px]">
                      Boilerplates {plan.name}
                    </span>
                    <p className="max-w-[345px] text-[14px] leading-[16.94px] text-[#71717A]">
                      The essentials to provide your best work for clients.
                      Billed monthly
                    </p>
                  </div>
                  <span className="text-[16px] font-medium leading-[24px]">
                    ${plan.price}
                  </span>
                </div>
                <hr className="pb-[25px]" />
                <div className="flex justify-between pb-[25px]">
                  <div>
                    <span className="mb-[4px] text-[16px] font-medium leading-[24px]">
                      Subtotal
                    </span>
                    <p className="max-w-[345px] text-[14px] leading-[16.94px] text-[#71717A]">
                      Add promotional code
                    </p>
                  </div>
                  <span className="text-[16px] font-medium leading-[24px]">
                    ${plan.price}
                  </span>
                </div>
                <hr />
              </div>
              <div className="flex justify-between pt-[25px]">
                <span className="mb-[4px] text-[16px] font-medium leading-[24px]">
                  Total due today
                </span>
                <span className="mb-[4px] text-[16px] font-medium leading-[24px]">
                  ${plan.price}
                </span>
              </div>
            </div>
          </div>

          {error && (
            <div className="align-center mt-[50px] flex min-h-[650px] flex-col justify-center gap-5 text-lg text-red-400 sm:flex-row">
              {error}
            </div>
          )}

          {/* Form Section */}
          <div className="md:w-full lg:w-1/2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col rounded-[8px] border border-[#939393]">
                <div className="px-[12px] py-[16px]">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      className="mr-2 h-[24px] w-[24px]"
                      onChange={handleChange}
                    />
                    PayPal
                  </label>
                </div>
                <hr />
                <div className="px-[12px] py-[16px]">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="creditCard"
                      className="mr-2 h-[24px] w-[24px]"
                      onChange={handleChange}
                    />
                    Debit/Credit Card
                  </label>
                </div>
                {errors.paymentMethod && (
                  <span className="text-red-500">{errors.paymentMethod}</span>
                )}
              </div>

              <div className="space-y-4">
                <label htmlFor="email" className="block">
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Johnsmith@gmail.com"
                    className="mt-1 h-[64px] w-full rounded-[8px] border border-[#B2B0B0] p-3"
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email}</span>
                  )}
                </label>

                <label htmlFor="cardInformation" className="block">
                  <span>Card Information </span>
                  <input
                    type="text"
                    name="cardInformation"
                    placeholder="Card Information"
                    className="mt-1 h-[64px] w-full rounded-[8px] border border-[#B2B0B0] p-3"
                    onChange={handleChange}
                  />
                  {errors.cardInformation && (
                    <span className="text-red-500">
                      {errors.cardInformation}
                    </span>
                  )}
                </label>

                <div className="flex space-x-4">
                  <div>
                    <label htmlFor="expiryDate" className="block">
                      <span>Expiry Date</span>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="01/23"
                        className="mt-1 h-[64px] w-full rounded-[8px] border border-[#B2B0B0] p-3"
                        onChange={handleChange}
                      />
                      {errors.expiryDate && (
                        <span className="text-red-500">
                          {errors.expiryDate}
                        </span>
                      )}
                    </label>
                  </div>

                  <div>
                    <label htmlFor="cvc" className="block">
                      <span>CVC</span>
                      <input
                        type="text"
                        name="cvc"
                        placeholder="CVC"
                        className="mt-1 h-[64px] w-full rounded-[8px] border border-[#B2B0B0] p-3"
                        onChange={handleChange}
                      />
                      {errors.cvc && (
                        <span className="text-red-500">{errors.cvc}</span>
                      )}
                    </label>
                  </div>
                </div>

                <label htmlFor="cardholderName" className="block">
                  <span>Cardholder Name</span>
                  <input
                    type="text"
                    name="cardholderName"
                    placeholder="John Doe"
                    className="mt-1 h-[64px] w-full rounded-[8px] border border-[#B2B0B0] p-3"
                    onChange={handleChange}
                  />
                  {errors.cardholderName && (
                    <span className="text-red-500">
                      {errors.cardholderName}
                    </span>
                  )}
                </label>

                <label htmlFor="countryOrRegion" className="block">
                  <span>Country or Region</span>
                  <input
                    type="text"
                    name="countryOrRegion"
                    placeholder="Country or Region"
                    className="mt-1 h-[64px] w-full rounded-[8px] border border-[#B2B0B0] p-3"
                    onChange={handleChange}
                  />
                  {errors.countryOrRegion && (
                    <span className="text-red-500">
                      {errors.countryOrRegion}
                    </span>
                  )}
                </label>
              </div>

              <button
                type="submit"
                className="h-[64px] w-full rounded-[8px] bg-[#E77F1E] p-3 text-[16px] font-medium leading-[24px] text-white"
              >
                Pay ${plan.price}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
