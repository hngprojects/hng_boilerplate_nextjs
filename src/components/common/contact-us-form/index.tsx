"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { z, ZodError } from "zod";

import InputField from "~/components/common/contact-us-form/inputfield";
import CustomButton from "../Button/button";

const schema = z.object({
  name: z.string().min(5, "Name is required"),
  email: z.string().email("Email is invalid"),
  phone: z
    .string()
    .min(8, "Phone number is required")
    .regex(/^\+?\d{10,15}$/, "Phone number is invalid"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof schema>;

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ ...initialFormData });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<boolean | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (status !== undefined) {
      const timer = setTimeout(() => {
        setStatus(undefined);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const validate = () => {
    try {
      schema.parse(formData);
      return {};
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages: { [key: string]: string } = {};
        for (const { path, message } of error.errors) {
          errorMessages[path[0]] = message;
        }
        return errorMessages;
      }
      return {};
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      setLoading(true);
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

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to submit the form.");
      }

      setStatus(true);
      setMessage(responseData?.message || "Form submitted successfully!");
      setFormData({ ...initialFormData });
      setErrors({});
    } catch (error) {
      setStatus(false);
      setMessage(
        (error as Error).message ||
          "Failed to submit the form. Please try again.",
      );
    } finally {
      setLoading(false);
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
      required: true,
    },
  ];

  return (
    <>
      <div className="mx-auto w-full max-w-[80%] p-8">
        <form
          onSubmit={handleSubmit}
          className="mb-4 w-full max-w-[80%] rounded bg-subtle px-8 pb-8 pt-6"
          role="form"
        >
          {inputFields.map((field) => (
            <div key={field.name} className="mb-4">
              <InputField
                value={formData[field.name as keyof FormData]}
                type={field.type}
                onChange={handleChange}
                placeholder={field.placeholder}
                id={field.name}
                name={field.name}
                label={field.label}
              />
              {errors[field.name] && (
                <p className="text-xs italic text-destructive">
                  {errors[field.name]}
                </p>
              )}
            </div>
          ))}
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block text-sm">
              Message
            </label>
            <input
              id="message"
              name="message"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full appearance-none rounded border-2 bg-subtle px-3 py-2 pb-[112px] leading-tight"
            />
            {errors.message && (
              <p className="text-xs italic text-destructive">
                {errors.message}
              </p>
            )}
          </div>
          <CustomButton
            variant="primary"
            size="lg"
            isLoading={loading}
            className="w-full px-4 py-3"
          >
            <Image src={"/mail.svg"} width={20} height={10} alt="send icon" />
            Send
          </CustomButton>

          {status !== undefined && (
            <p
              className={`text-xs italic ${status ? "text-default" : "text-destructive"}`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default ContactForm;
