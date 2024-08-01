"use client";

import Image from "next/image";
import React, { FormEvent, useEffect, useRef, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";

interface FormData {
  full_name: string;
  email: string;
}

interface FormErrors {
  full_name?: string;
  email?: string;
  server?: string;
}

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const timeoutReference = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutReference.current) {
        clearTimeout(timeoutReference.current);
      }
    };
  }, []);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (formData.full_name.trim() === "") {
      newErrors.full_name = "Your full name is required here";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Please enter a valid email address";
      /* eslint-disable vitest/no-conditional-tests */
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    return newErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setIsLoading(true); // Set loading state to true

      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL as string,
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              full_name: formData.full_name,
              email: formData.email,
            }),
          },
        );

        if (!response.ok) {
          const errorData = await response.json();
          if (errorData.message.message === "Email already registered") {
            setErrors({ server: "Email already registered" });
          } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return;
        }

        setFormData({ full_name: "", email: "" });
        setIsSubmitted(true);
        timeoutReference.current = setTimeout(() => {
          setIsSubmitted(false);
        }, 6000);
      } catch {
        setErrors({
          server: "An unexpected error occurred. Please try again later.",
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center text-neutral-dark-2">
      <div className="mt-[52px] flex h-auto w-[383.344px] shrink-0 items-start gap-[19.2px] rounded-md border border-gray-300 p-7 md:mt-5 md:w-[510px] md:p-2.5">
        {isSubmitted ? (
          <div className="flex w-full flex-col items-center justify-center">
            <Image
              src="/images/WaitList/BACKGROUND.svg"
              alt="Success"
              width="177"
              height="179"
            />
            <p className="mt-[24px] text-[24px] font-bold leading-normal text-gray-600 md:text-[28px] md:font-semibold">
              You&apos;re all Signed up!
            </p>
          </div>
        ) : (
          <form id="waitlist-form" onSubmit={handleSubmit} className="w-full">
            <div className="mb-6">
              <div className="mb-6 h-[90px]">
                <label
                  htmlFor="full_name"
                  className="mb-5 block text-left text-lg font-normal text-neutral-dark-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  placeholder="Meghan Grace"
                  value={formData.full_name}
                  onChange={handleChange}
                  className={`w-full rounded-md border px-3.5 py-3 text-left text-lg font-normal leading-6 ${
                    errors.full_name ? "border-red-500" : "border-gray-300"
                  } text-gray-600`}
                  aria-invalid={errors.full_name ? "true" : "false"}
                />
                {errors.full_name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.full_name}
                  </p>
                )}
              </div>

              <div className="mb-9 h-[90px] md:mb-6">
                <label
                  htmlFor="email"
                  className="mb-3.5 block text-left text-lg font-normal text-neutral-dark-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-md border px-3.5 py-3 text-left text-lg font-normal leading-6 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } text-gray-600`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
                {errors.server && (
                  <p className="mt-1 text-sm text-red-500">{errors.server}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <CustomButton
                variant="primary"
                isLoading={isLoading}
                className="flex h-[51.78px] w-[195.6px] items-center justify-between rounded-md px-[19.2px] py-[9.6px] text-[16.8px] font-bold leading-[28.8px] text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                type="submit"
              >
                <Image
                  width={20}
                  height={20}
                  src="/images/WaitList/icon.svg"
                  alt="Envelope"
                />
                Join the Waitlist
              </CustomButton>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default WaitlistForm;
