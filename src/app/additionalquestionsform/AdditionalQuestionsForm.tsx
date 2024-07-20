"use client";

import { ChangeEvent, FocusEvent, FormEvent, useState } from "react";

const AdditionalQuestionsForm = () => {
  const userInquiryData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(userInquiryData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const clearErrorMessage = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = event.target;
    setErrors({ ...errors, [name]: "" });
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // eslint-disable-next-line unicorn/consistent-function-scoping
  const validateEmail = (email: string) => {
    const emailCheck = /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/;
    return emailCheck.test(email);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    const { name, email, message } = formData;

    if (!name) errors.name = "Name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!validateEmail(email)) {
      errors.email = "Email is invalid";
    }
    if (!message) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await fetch("/api/submit-question", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSuccessMessage("Your question has been submitted successfully.");
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        setErrorMessage(
          "There was an error submitting your question. Please try again.",
        );
        setSuccessMessage("");
        setFormData({ name: "", email: "", message: "" });
        console.log(error);
      }
    }
  };

  return (
    <div className="mb-[11.375rem] mt-[2.75rem] flex w-full max-w-[676px] flex-col gap-[28px] md:mb-[4rem] md:gap-[4.125rem]">
      <div className="flex flex-col items-center gap-[.9375rem] text-center md:gap-[9px]">
        <h3 className="text-[1.25rem] font-[700] leading-[33.89px] text-[#F97316] md:text-[1.75rem]">
          Still have questions?
        </h3>
        <p className="text-[1rem] font-[400] leading-[1.3613rem] text-[#525252] md:text-[1.125rem]">
          Fill the form and enter your message
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-[27px] md:gap-[1.5rem]"
        noValidate
      >
        <div className="flex flex-col gap-[8px] md:gap-[.75rem]">
          <label
            htmlFor="email"
            className="text-[1rem] font-[400] leading-[1.5rem] text-[#434343] md:text-[1.25rem]"
          >
            Email:
          </label>
          <input
            onFocus={clearErrorMessage}
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full rounded-md border-[1px] border-[#B2B0B0] px-[1rem] py-[.75rem] font-[400] leading-[1.35rem] text-foreground outline-none placeholder:text-[.875rem] md:px-0 md:py-[1.25rem] md:pl-[1rem] md:pr-[1.5rem] md:placeholder:text-[18px]"
          />
          {errors.email && <span className="text-red-600">{errors.email}</span>}
        </div>
        <div className="flex flex-col gap-[8px] md:gap-[.75rem]">
          <label
            htmlFor="name"
            className="text-[1rem] font-[400] leading-[1.5rem] text-[#434343] md:text-[1.25rem]"
          >
            Name:
          </label>
          <input
            id="name"
            onFocus={clearErrorMessage}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full rounded-md border-[1px] border-[#B2B0B0] px-[1rem] py-[.75rem] font-[400] leading-[1.35rem] text-foreground outline-none placeholder:text-[.875rem] md:px-0 md:py-[1.25rem] md:pl-[1rem] md:pr-[1.5rem] md:placeholder:text-[18px]"
          />
          {errors.name && <span className="text-red-600">{errors.name}</span>}
        </div>
        <div className="flex flex-col gap-[8px] md:gap-[.75rem]">
          <label
            htmlFor="message"
            className="text-[1rem] font-[400] leading-[1.5rem] text-[#434343] md:text-[1.25rem]"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            onFocus={clearErrorMessage}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message..."
            className="h-[12.75rem] w-full rounded-md border-[1px] border-[#B2B2B2] pb-[7rem] pl-[1rem] pr-[10px] pt-[10px] text-[.8125rem] outline-none md:text-[1.125rem]"
          />
          {errors.message && (
            <span className="text-red-600">{errors.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="mt-[1.75rem] h-[3.75rem] w-full rounded-md bg-[#F97316] px-4 py-2 text-[1rem] font-[400] leading-[1.3613rem] text-white md:mt-[5.1875rem] md:text-[1.125rem]"
        >
          Submit
        </button>
        {successMessage && (
          <div className="text-green-600">{successMessage}</div>
        )}
        {errorMessage && <div className="text-red-600">{errorMessage}</div>}
      </form>
    </div>
  );
};

export default AdditionalQuestionsForm;
