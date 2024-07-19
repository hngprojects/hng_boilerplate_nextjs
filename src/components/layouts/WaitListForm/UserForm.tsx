"use client";

import Image from "next/image";
import React, { FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};
    if (!formData.name) {
      newErrors.name = "Your name is required here";
    }
    if (!formData.email) {
      newErrors.email = "Please enter a valid email address";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    return newErrors;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log("Form data submitted:", formData);
      // Clear form and show success message
      setFormData({ name: "", email: "" });
      setErrors({});
      setSuccess(true);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[81px] ">
      <div className="text-center md:w-[623px]">
        <div className="flex justify-center items-center gap-[7px] mb-[12px] md:mb-[8px]">
          <Image
            layout="fit"
            objectFit="contain"
            width={23}
            height={21}
            src="/circle 1.svg"
            alt="Circle with Tick"
          />
          <h3
            className="font-medium text-[18px] leading-[16.94px] md:leading-[21.78px]"
            style={{ color: "rgba(25, 26, 21, 1)" }}
          >
            Deployment made easy
          </h3>
        </div>
        <h1
          className="font-bold mb-[10px] md:w-[623px] text-[24px] md:text-[36px] leading-[29.05px] md:leading-[43.57px]"
          style={{ color: "rgba(82, 82, 82, 1)" }}
        >
          You can level up your SaaS production today
        </h1>
        <p
          className="text-center font-medium text-[16px] md:text-[20px] leading-[19.36px] md:leading-[28px]"
          style={{ color: "rgba(82, 82, 82, 1)" }}
        >
          Join our waitlist and get early access to our boilerplates
        </p>
      </div>

      <div
        className="rounded-[8px] w-[383.344px] h-auto md:w-[510px] p-[28.8px] md:p-[10px] mt-[87px] md:mt-[20px] flex items-start gap-[19.2px] shrink-0"
        style={{ border: "0.5px solid rgba(228, 228, 231, 1)" }}
      >
        {!success ? (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-[24px]">
              <div className="h-[90px] mb-[24.4px]">
                <label
                  htmlFor="name"
                  className="block font-normal text-[19.2px] leading-[23.24px] text-left mb-[20px]"
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
                  className="border-[1.2px] border-[rgba(82, 82, 82, 0.3)] w-full pt-[14.4px] pr-[67.2px] pb-[14.4px] pl-[14.4px] rounded-md font-normal text-[16.8px] leading-[23.24px] text-left"
                  style={{
                    borderColor: errors.name ? "red" : "black",
                    color: "rgba(100, 116, 139, 1)",
                  }}
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
              </div>

              <div className="h-[90px] mb-[36px] md:mb-[25px]">
                <label
                  htmlFor="email"
                  className="block font-normal text-[19.2px] leading-[23.24px] text-left mb-[14.4px]"
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
                  className="border-[1.2px] border-[rgba(82, 82, 82, 0.3)] w-full pt-[14.4px] pr-[67.2px] pb-[14.4px] pl-[14.4px] rounded-md font-normal text-[16.8px] leading-[23.24px] text-left"
                  style={{
                    borderColor: errors.email ? "red" : "black",
                    color: "rgba(100, 116, 139, 1)",
                  }}
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button
                className="text-white font-bold text-[16.8px] leading-[28.8px] bg-buttonColor rounded-md w-[195.6px] h-[51.78px] flex justify-between items-center py-[9.6px] px-[19.2px]"
                type="submit"
              >
                <Image
                  layout="fit"
                  objectFit="contain"
                  width={20}
                  height={20}
                  src="/icon.svg"
                  alt="Envelope"
                />
                Join the Waitlist
              </button>
            </div>
          </form>
        ) : (
          <div className="w-full flex flex-col items-center justify-center">
            <div className="relative">
              <Image
                layout="fit"
                objectFit="contain"
                width={177}
                height={179}
                src="/BACKGROUND.png"
                alt="Success Background"
                className="mb-4"
              />
              <Image
                layout="fit"
                objectFit="contain"
                width={31}
                height={31}
                src="/icon (1).svg"
                alt="Success Tick"
                className="absolute top-20 left-2 transform translate-x-[50%] translate-y-[-50%]"
              />
            </div>
            <p className="text-center font-medium text-successText text-[16px] md:text-[20px] leading-[19.36px] md:leading-[28px]">
              You're all signed up!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserForm;
