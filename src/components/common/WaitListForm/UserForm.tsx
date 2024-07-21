"use client";

import Image from "next/image";
import React, { FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  type FormErrorKey = keyof FormErrors;

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    const validationRules: {
      check: boolean;
      field: FormErrorKey;
      message: string;
    }[] = [
      {
        check: formData.name.trim() === "",
        field: "name",
        message: "Your name is required here",
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

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setFormData({ name: "", email: "" });
      setErrors({});
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  return (
    <div className="mt-[81px] flex flex-col items-center justify-center">
      <div className="text-center md:w-[623px]">
        <div className="mb-[12px] flex items-center justify-center gap-[7px] md:mb-[8px]">
          <Image
            width={23}
            height={21}
            src="/images/WaitListForm/circle 1.svg"
            alt="Circle with Tick"
          />
          <h3
            className="text-[18px] font-medium leading-[16.94px] md:leading-[21.78px]"
            style={{ color: "rgba(25, 26, 21, 1)" }}
          >
            Deployment made easy
          </h3>
        </div>
        <h1
          className="mb-[10px] text-[24px] font-bold leading-[29.05px] md:w-[623px] md:text-[36px] md:leading-[43.57px]"
          style={{ color: "rgba(82, 82, 82, 1)" }}
        >
          You can level up your SaaS production today
        </h1>
        <p
          className="text-center text-[16px] font-medium leading-[19.36px] md:text-[20px] md:leading-[28px]"
          style={{ color: "rgba(82, 82, 82, 1)" }}
        >
          Join our waitlist and get early access to our boilerplates
        </p>
      </div>

      <div
        className="mt-[87px] flex h-auto w-[383.344px] shrink-0 items-start gap-[19.2px] rounded-[8px] p-[28.8px] md:mt-[20px] md:w-[510px] md:p-[10px]"
        style={{ border: "0.5px solid rgba(228, 228, 231, 1)" }}
      >
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-[24px]">
            <div className="mb-[24.4px] h-[90px]">
              <label
                htmlFor="name"
                className="mb-[20px] block text-left text-[19.2px] font-normal leading-[23.24px]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Meghan Grace"
                value={formData.name}
                onChange={handleChange}
                className="border-[rgba(82, 82, 82, 0.3)] w-full rounded-md border-[1.2px] pb-[14.4px] pl-[14.4px] pr-[67.2px] pt-[14.4px] text-left text-[16.8px] font-normal leading-[23.24px]"
                style={{
                  borderColor: errors.name ? "red" : "black",
                  color: "rgba(100, 116, 139, 1)",
                }}
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>

            <div className="mb-[36px] h-[90px] md:mb-[25px]">
              <label
                htmlFor="email"
                className="mb-[14.4px] block text-left text-[19.2px] font-normal leading-[23.24px]"
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
                className="border-[rgba(82, 82, 82, 0.3)] w-full rounded-md border-[1.2px] pb-[14.4px] pl-[14.4px] pr-[67.2px] pt-[14.4px] text-left text-[16.8px] font-normal leading-[23.24px]"
                style={{
                  borderColor: errors.email ? "red" : "black",
                  color: "rgba(100, 116, 139, 1)",
                }}
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              className="flex h-[51.78px] w-[195.6px] items-center justify-between rounded-md bg-primary px-[19.2px] py-[9.6px] text-[16.8px] font-bold leading-[28.8px] text-white"
              type="submit"
            >
              <Image
                width={20}
                height={20}
                src="/images/WaitListForm/icon.svg"
                alt="Envelope"
              />
              Join the Waitlist
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
