"use client";

import { useEffect, useState } from "react";

import InputField from "./inputfield";

interface FormData {
  [key: string]: string;
}

const validationRules: { [key: string]: (value: string) => string | null } = {
  name: (value) => (!value ? "Name is required" : null),
  email: (value) => {
    if (!value) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(value)) return "Email is invalid";
    return null;
  },
  phone: (value) => {
    if (!value) return "Phone number is required"; // Phone number is optional
    if (!/^\+?[0-9]{10,15}$/.test(value)) return "Phone number is invalid";
    return null;
  },
  message: (value) => (!value ? "Message is required" : null),
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ ...initialFormData });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<boolean | null>(null);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (status !== null) {
      // clear existing timer
      if (timer != null) {
        clearTimeout(timer);
      }
      const newTimer = setTimeout(() => {
        setStatus(null);
      }, 3000);
      setTimer(newTimer);
    }

    return () => {
      // clear timer on unmount
      if (timer != null) {
        clearTimeout(timer);
      }
    };
  }, [status]);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    Object.keys(formData).forEach((key) => {
      const error = validationRules[key]?.(formData[key]);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await fetch(
        "https://test.gracefilledcollege.com/public/api/v1/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      // Parse the response body as JSON
      const responseData = await response.json();

      // Check if response is not OK
      if (!response.ok) {
        // Use the error message from the response, if available
        throw new Error(responseData.message || "Failed to submit the form.");
      }

      // Set success status and message
      setStatus(true);
      setMessage(responseData.message || "Form submitted successfully!");
      setFormData({ ...initialFormData });
      setErrors({});  // Clear errors
    } catch (error) {
      setStatus(false);
      setMessage(
        (error as Error).message ||
          "Failed to submit the form. Please try again.",
      );
    }
  };

  const inputFields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter full name",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter email address",
      required: true,
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "tel",
      placeholder: "Enter phone number",
      required: false,
    },
  ];

  return (
    <>
      <div className="mx-auto w-full max-w-[80%] p-8">
        <form
          onSubmit={handleSubmit}
          className="mb-4 w-full max-w-[80%] rounded bg-[#FAFAFA] px-8 pb-8 pt-6"
          role="form"
        >
          {inputFields.map((field) => (
            <div key={field.name} className="mb-4">
              <InputField
                key={field.name}
                value={formData[field.name as keyof FormData]}
                type={field.type}
                onChange={handleChange}
                placeholder={field.placeholder}
                id={field.name}
                name={field.name}
                label={field.label}
              />
              {errors[field.name] && (
                <p className="text-xs italic text-red-500">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-2 block text-sm text-gray-700"
            >
              Message
            </label>
            <input
              id="message"
              name="message"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full appearance-none rounded border-2 bg-[#FAFAFA] px-3 py-2 pb-[112px] leading-tight text-gray-700"
            />
            {errors.message && (
              <p className="text-xs italic text-red-500">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="focus:shadow-outline flex w-full items-center justify-center gap-2 rounded bg-[#F97316] px-4 py-3 text-[0.65rem] font-normal text-white focus:outline-none"
          >
            <img src="/mail.svg" alt="mail" />
            Send
          </button>
          {status && (
            <p className={`text-xs italic text-green-500`}>
              {message}
            </p>
          )}
          {status == false && (
            <p className={`text-xs italic text-red-500`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default ContactForm;
