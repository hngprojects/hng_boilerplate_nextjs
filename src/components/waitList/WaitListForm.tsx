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
  const timeoutReference = useRef<NodeJS.Timeout | null>(null);

  type FormErrorKey = keyof FormErrors;

  useEffect(() => {
    // Clear the timeout if the component unmounts
    return () => {
      if (timeoutReference.current) {
        clearTimeout(timeoutReference.current);
      }
    };
  }, []);

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    const validationRules: {
      check: boolean;
      field: FormErrorKey;
      message: string;
    }[] = [
      {
        check: formData.full_name.trim() === "",
        field: "full_name",
        message: "Your full name is required here",
      },
      {
        check: formData.email.trim() === "",
        field: "email",
        message: "Please enter a valid email address",
      },
      {
        check:
          formData.email.trim() !== "" && !/\S+@\S+\.\S+/.test(formData.email),
        field: "email",
        message: "Please enter a valid email address",
      },
    ];

    for (const rule of validationRules) {
      if (rule.check) {
        newErrors[rule.field] = rule.message;
      }
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
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL as string,
          {
            method: "POST",
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
        // eslint-disable-next-line no-console
        console.error("There was a problem with the fetch operation:", errors);
      }
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  return (
    <div className="mt-20 flex flex-col items-center justify-center text-neutral-dark-2">
      <div className="flex flex-col items-center justify-center text-center md:mb-[50px] md:w-[623px]">
        <div className="mb-4 flex items-center justify-center gap-2 md:mb-[18px]">
          <Image
            width={23}
            height={21}
            src="/images/WaitList/circle 1.svg"
            alt="Circle with Tick"
          />
          <h3 className="text-[18px] font-normal leading-5 md:text-[24px]">
            Deployment made easy
          </h3>
        </div>
        <h1 className="mb-2 w-[320px] text-[24px] font-bold leading-7 md:h-[108px] md:w-[623px] md:text-[36px] md:leading-10">
          You can level up your SaaS production today
        </h1>
        <h1 className="text-center text-[16px] font-normal leading-5 md:text-[20px] md:leading-7">
          Join our waitlist and get early access to our boilerplates
        </h1>
      </div>

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
                className="flex h-[51.78px] w-[195.6px] items-center justify-between rounded-md px-[19.2px] py-[9.6px] text-[16.8px] font-bold leading-[28.8px] text-white transition-transform duration-300 hover:scale-105 hover:bg-destructive hover:shadow-lg"
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
