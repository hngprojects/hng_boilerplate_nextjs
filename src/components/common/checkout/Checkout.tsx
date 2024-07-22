"use client";

import { useState } from "react";

import CustomButton from "../Button/button";

import "./Page.css";

import AdminLayout from "~/components/superadminlayout";
import ErrorModal from "../../modals/FormErrorModal/ErrorModal";
import SuccessModal from "../../modals/FormSuccessModal/SuccessModal";
import Arrow from "../../ui/ArrowLeft";

interface ErrorData {
  fullName: boolean;
  businessName: boolean;
  cardNumber: boolean;
  cvv: boolean;
  cardExpiry: boolean;
}

interface FormData {
  fullName: string;
  businessName: string;
  cardNumber: string;
  cvv: string;
  cardExpiry: string;
}

const validator = (inputFields: FormData, requiredinputFields: ErrorData) => {
  let firstErrorId: string | undefined;
  let result: { status: boolean; data: ErrorData; id?: string } = {
    status: true,
    data: {
      fullName: false,
      businessName: false,
      cardNumber: false,
      cvv: false,
      cardExpiry: false,
    },
  };
  for (const key in inputFields) {
    if (Object.prototype.hasOwnProperty.call(requiredinputFields, key)) {
      if (inputFields[key as keyof FormData]) {
        result = {
          status: result.status,
          data: { ...result.data, [key]: false },
          id: firstErrorId,
        };
      } else {
        if (!firstErrorId) {
          firstErrorId = key;
        }
        result = {
          status: false,
          data: { ...result.data, [key]: true },
          id: firstErrorId,
        };
      }
    }
  }

  return result;
};

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    businessName: "",
    cardNumber: "",
    cardExpiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<ErrorData>({
    fullName: false,
    businessName: false,
    cardNumber: false,
    cvv: false,
    cardExpiry: false,
  });

  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [billingOption, setBillingOption] = useState("monthly");
  const [showDetails, setShowDetails] = useState(false);

  const handleInputChange = (event_: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event_.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const validateForm = () => {
    const { status, data } = validator(formData, errors);
    if (status) {
      return true; // No errors, form is valid
    } else {
      try {
        // Simulate a validation error throw for demonstration
        throw new Error("Validation error");
      } catch (error) {
        console.log(error);
      }

      setErrors((previousData) => ({ ...previousData, ...data }));
      return false; // Form is invalid
    }
  };

  const handleSubmit = async (event_: { preventDefault: () => void }) => {
    event_.preventDefault();
    if (validateForm()) {
      try {
        setSuccessModalOpen(true);
      } catch {
        setErrorModalOpen(true);
      }
    }
  };

  const handleBillingChange = (option: string) => {
    setBillingOption(option);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <AdminLayout>
      {/* Modals */}
      {successModalOpen && (
        <SuccessModal onClose={() => setSuccessModalOpen(false)} />
      )}
      {errorModalOpen && (
        <ErrorModal onClose={() => setErrorModalOpen(false)} />
      )}
      <div className="mx-5">
        <form className="w-6/11 space-y-4" onSubmit={handleSubmit}>
          <div className="bg-white px-10 py-10 md:px-0">
            <div className="w-full">
              <div className="flex items-center gap-2">
                <Arrow />
                <h1 className="font-bold">Upgrade to Basic</h1>
              </div>
              <p className="pt-2 text-sm">
                Do more with unlimited users and Integration when you upgrade
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <div className="mt-6 block">
                  <label
                    htmlFor="fullName"
                    className="mb-3 block text-sm font-semibold"
                  >
                    Full Name
                  </label>
                  <div
                    className={`mt-1 flex max-w-lg gap-2 rounded-sm border border-[#CBD5E1] px-4 py-2 ${errors.fullName ? "border-red-500" : "border-[#CBD5E1]"} bg-white`}
                  >
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Enter full name"
                      className="w-full bg-transparent text-sm outline-none"
                      value={formData.fullName}
                      onChange={handleInputChange}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">
                      Fullname cannot be empty
                    </p>
                  )}
                </div>

                <div className="my-3 block">
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-semibold"
                  >
                    Business Name (Optional)
                  </label>
                  <div
                    className={`mt-1 flex max-w-lg gap-2 rounded-sm border border-[#CBD5E1] px-4 py-2 ${errors.businessName ? "border-red-500" : "border-[#CBD5E1]"} bg-white`}
                  >
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      placeholder="Enter Business name"
                      className="w-full bg-transparent text-sm outline-none"
                      value={formData.businessName}
                      onChange={handleInputChange}
                    />
                  </div>
                  {errors.businessName && (
                    <p className="mt-1 text-xs text-red-500">
                      Business name cannot be empty
                    </p>
                  )}
                </div>

                <div className="my-3 block">
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-semibold"
                  >
                    Card Number
                  </label>
                  <div
                    className={`mt-1 flex max-w-lg gap-2 rounded-sm border border-[#CBD5E1] px-4 py-2 ${errors.cardNumber ? "border-red-500" : "border-[#CBD5E1]"} bg-white`}
                  >
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="w-full bg-transparent text-sm outline-none"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                  {errors.cardNumber && (
                    <p className="mt-1 text-xs text-red-500">
                      Card Number is required
                    </p>
                  )}
                </div>

                <div className="flex max-w-lg gap-3">
                  <div className="w-1/2">
                    <label
                      htmlFor="cardExpiry"
                      className="block text-sm font-semibold"
                    >
                      Exp. Date
                    </label>
                    <div
                      className={`mt-1 flex gap-2 rounded-sm border border-[#CBD5E1] px-4 py-2 ${errors.cardExpiry ? "border-red-500" : "border-[#CBD5E1]"} bg-white`}
                    >
                      <input
                        type="text"
                        id="cardExpiry"
                        name="cardExpiry"
                        placeholder="12/04"
                        className="w-full bg-transparent text-sm outline-none"
                        value={formData.cardExpiry}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.cardExpiry && (
                      <p className="mt-1 text-xs text-red-500">
                        Card expiry cannot be empty
                      </p>
                    )}
                  </div>

                  <div className="w-1/2">
                    <label
                      htmlFor="cvv"
                      className="block text-sm font-semibold"
                    >
                      CVV
                    </label>
                    <div
                      className={`mt-1 flex gap-2 rounded-sm border border-[#CBD5E1] px-4 py-2 ${errors.cvv ? "border-red-500" : "border-[#CBD5E1]"} bg-white`}
                    >
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        className="w-full bg-transparent text-sm outline-none"
                        value={formData.cvv}
                        onChange={handleInputChange}
                      />
                    </div>
                    {errors.cvv && (
                      <p className="mt-1 text-xs text-red-500">
                        CVV is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="text-sm">
                    <p className="text-xs">
                      By submitting this form, you confirm that you agree to our
                      <span className="cursor-pointer text-blue-600">
                        {" "}
                        Terms of Service{" "}
                      </span>
                      and
                      <span className="cursor-pointer text-blue-600">
                        {" "}
                        Privacy Policy.
                      </span>
                    </p>
                  </label>
                </div>
              </div>

              <div className="mr-10 mt-6 max-w-lg">
                <p className="text-sm font-semibold">Billing Option</p>
                <div
                  className="mt-3 flex cursor-pointer gap-6 rounded-sm border-[0.5px] border-[#CBD5E1] px-4 py-5"
                  onClick={() => handleBillingChange("monthly")}
                >
                  <input
                    type="radio"
                    name="billing"
                    id="monthly"
                    checked={billingOption === "monthly"}
                    readOnly
                    className="form-radio h-4 w-4"
                  />
                  <div>
                    <p className="pb-1 text-sm font-semibold">Pay monthly</p>
                    <p className="text-xs text-[#525252]">$20/ month/member </p>
                  </div>
                </div>
                <div
                  className="mt-3 flex cursor-pointer gap-6 rounded-sm border-[0.5px] border-[#CBD5E1] px-4 py-5"
                  onClick={() => handleBillingChange("yearly")}
                >
                  <input
                    type="radio"
                    name="billing"
                    id="yearly"
                    checked={billingOption === "yearly"}
                    readOnly
                    className="form-radio h-4 w-4"
                  />
                  <div>
                    <p className="pb-1 text-sm font-semibold">Pay Yearly</p>
                    <p className="text-xs text-[#525252]">$200/ year/member </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-sm font-semibold">$20 /month</p>
                  <p
                    className="flex cursor-pointer items-center bg-[#fafafa] px-3 py-1 text-xs text-[#525252]"
                    onClick={toggleDetails}
                  >
                    Details
                  </p>
                </div>
                {showDetails && (
                  <div>
                    {billingOption === "monthly" ? (
                      <div className="pb-3">
                        <div className="flex items-center justify-between pt-3">
                          <p className="text-sm text-[#525252]">
                            Members in your workspace
                          </p>
                          <p className="text-sm text-[#525252]">1</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-[#525252]">
                            x$20/month/member
                          </p>
                          <p className="text-sm text-[#525252]">$20</p>
                        </div>
                      </div>
                    ) : (
                      <div className="pb-3">
                        <div className="flex items-center justify-between pt-3">
                          <p className="text-sm text-[#525252]">
                            Members yearly in your workspace
                          </p>
                          <p className="text-sm text-[#525252]">1</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-[#525252]">
                            x$200/year/member
                          </p>
                          <p className="text-sm text-[#525252]">$200</p>
                        </div>
                      </div>
                    )}
                    <div className="relative w-full border-t-[1px] border-subtle"></div>
                    <div>
                      <div className="flex items-center justify-between pt-3">
                        <p className="text-sm text-[#525252]">Subtotal</p>
                        <p className="text-sm text-[#525252]">$20</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-[#525252]">
                          Tax if applicable
                        </p>
                        <p className="text-sm text-[#525252]">$20</p>
                      </div>
                    </div>
                  </div>
                )}
                <div className="mt-5 flex items-center">
                  <CustomButton
                    variant="primary"
                    size="lg"
                    isLoading={false}
                    ariaLabel="Upgrade Now"
                    onClick={handleSubmit}
                  >
                    Upgrade to basic
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Page;
