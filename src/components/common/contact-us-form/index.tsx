"use client";

import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { z, ZodError } from "zod";

import { getApiUrl } from "~/actions/getApiUrl";
import { Toaster } from "~/components/ui/toaster";
import { useToast } from "~/components/ui/use-toast";
import { useLocalStorage } from "~/hooks/use-local-storage";
import CustomButton from "../common-button/common-button";
import InputField from "./inputfield";

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

interface TransformedData {
  full_name: string;
  email: string;
  phone_number: string;
  message: string;
  org_id: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ ...initialFormData });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<boolean | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [org_id] = useLocalStorage<string>("current_orgid", "");
  const { toast } = useToast();

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

  function transformFormData(
    formData: FormData,
    orgId: string,
  ): TransformedData {
    // Create a new object with the required structure
    const transformedData = {
      full_name: formData.name,
      email: formData.email,
      phone_number: formData.phone,
      message: formData.message,
      org_id: orgId, // Pass orgId as a parameter or obtain it from your application context
    };

    return transformedData;
  }

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
      const baseUrl = await getApiUrl();
      const apiData = transformFormData(formData, org_id);
      setLoading(true);
      const response = await fetch(`${baseUrl}/api/v1/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        // throw new Error(responseData.message || "Failed to submit the form.");
        toast({
          title: "Submission Failed",
          description:
            "There was an error submitting your message. Please check your internet connection and try again. If the problem persists, contact our support team.",
          variant: "destructive",
        });
        return;
      }

      setStatus(true);
      toast({
        title: "Message Sent!",
        description:
          "Thank you for reaching out to us. Your message has been received, and we'll get back to you shortly.",
        variant: "default",
      });
      setMessage(responseData?.message || "Form submitted successfully!");
      setFormData({ ...initialFormData });
      setErrors({});
    } catch {
      toast({
        title: "Submission Failed",
        description:
          "There was an error submitting your message. Please check your internet connection and try again. If the problem persists, contact our support team.",
        variant: "destructive",
      });
      setStatus(false);
      setMessage("Failed to submit the form. Please try again.");
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
      <div className="mx-auto w-full lg:max-w-[80%] lg:p-8">
        <form
          onSubmit={handleSubmit}
          className="mb-4 w-full rounded-[8px] p-8 lg:max-w-[80%] lg:border lg:bg-background lg:shadow-sm"
          role="form"
        >
          {inputFields.map((field) => (
            <div key={field.name} className="mb-6">
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
          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-lg">
              Message
            </label>
            <input
              id="message"
              name="message"
              placeholder="Message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full appearance-none rounded-[8px] border bg-transparent px-3 py-2 pb-[112px] leading-tight outline-none"
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
            className="w-full px-4 py-7 transition-all hover:-translate-y-2 hover:bg-destructive"
          >
            <Mail />
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

      <Toaster />
    </>
  );
};

export default ContactForm;
