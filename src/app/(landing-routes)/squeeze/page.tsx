"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

import { useToast } from "~/components/ui/use-toast";
import { getApiUrl } from "~/utils/getApiUrl";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Page: React.FC = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string } | undefined>();
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchApiUrl = async () => {
      try {
        const url = await getApiUrl();
        setApiUrl(url);
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch API URL",
          variant: "destructive",
        });
      }
    };

    fetchApiUrl();
  }, [toast]);

  const validateForm = async () => {
    try {
      await validationSchema.validate(
        { firstName, lastName, email },
        { abortEarly: false },
      );
      setErrors(undefined);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errorMap: { [key: string]: string } = {};
        for (const error_ of error.inner) {
          if (error_.path) errorMap[error_.path] = error_.message;
        }
        setErrors(errorMap);
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    await validateForm();

    if (errors) {
      return;
    }

    if (!apiUrl) return;

    try {
      const response = await fetch(`${apiUrl}/api/v1/squeeze`, {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      toast({
        title: "Success",
        description: "Template sent successfully",
        variant: "default",
      });

      setFirstName("");
      setLastName("");
      setEmail("");
    } catch {
      toast({
        title: "Error",
        description: "Failed to send details",
        variant: "destructive",
      });
    }

    setSubmitting(false);
  };

  return (
    <div
      className="flex justify-center bg-cover bg-center px-8 py-20 md:justify-start md:px-32 md:py-28"
      style={{ backgroundImage: "url('/images/squeeze.png')" }}
    >
      <div className="w-[480px] rounded-lg bg-background px-3 py-8 text-neutral-dark-1 md:px-6">
        <div className="items-left flex flex-col justify-between px-3">
          <h1 className="text-[26px] font-bold leading-8 md:text-[32px]">
            UNLEASH YOUR CREATIVITY WITH HNG BOILERPLATE
          </h1>

          <div className="my-6 pr-2 md:my-10">
            <div className="flex items-center space-x-3">
              <Image src="/images/tick.svg" width={24} height={24} alt="tick" />
              <p className="text-lg font-medium leading-6">
                Eliminate complexity and coding headaches with our intuitive
                boilerplate
              </p>
            </div>

            <div className="my-3 flex items-center space-x-3">
              <Image src="/images/tick.svg" width={24} height={24} alt="tick" />
              <p className="text-lg font-medium leading-6">
                Stay up-to-date with continuous updates and enhancements.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <Image src="/images/tick.svg" width={24} height={24} alt="tick" />
              <p className="text-lg font-medium leading-6">
                Simplify development with an intuitive solution.
              </p>
            </div>
          </div>

          <form className="mb-4" onSubmit={handleSubmit}>
            <input
              className="block w-full rounded-md border border-neutral-dark-1 bg-background p-3 text-neutral-dark-1 outline-none"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            {errors?.firstName && (
              <div className="mt-1 text-xs text-red-600">
                {errors.firstName}
              </div>
            )}

            <input
              className="mt-2 block w-full rounded-md border border-neutral-dark-1 bg-background p-3 outline-none"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            {errors?.lastName && (
              <div className="mt-1 text-xs text-red-600">{errors.lastName}</div>
            )}

            <input
              className="mt-2 block w-full rounded-md border border-neutral-dark-1 bg-background p-3 outline-none"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors?.email && (
              <div className="mt-1 text-xs text-red-600">{errors.email}</div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-4 block w-full rounded-md bg-primary py-3 font-medium text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Send me the template"}
            </button>
          </form>
          <p className="text-center text-xs font-semibold">
            We respect your privacy, unsubscribe anytime, view our{" "}
            <Link href="/privacy-policy" className="text-primary">
              privacy policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
