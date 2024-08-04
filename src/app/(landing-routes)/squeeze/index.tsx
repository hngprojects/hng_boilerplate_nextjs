"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { z, ZodError } from "zod";

import { getApiUrl } from "~/actions/getApiUrl";
import { useToast } from "~/components/ui/use-toast";

const validationSchema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
});

const Page: React.FC = () => {
  const [apiUrl, setApiUrl] = useState("");
  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<{ [key: string]: string } | undefined>();
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

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

  const validateForm = (): { [key: string]: string } | undefined => {
    try {
      validationSchema.parse({
        first_name,
        last_name,
        email,
      });
      return undefined;
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMap: { [key: string]: string } = {};
        for (const error_ of error.errors) {
          if (error_.path.length > 0) {
            errorMap[error_.path[0]] = error_.message;
          }
        }
        return errorMap;
      }
      return undefined;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);

    const validationErrors = validateForm();
    if (validationErrors) {
      setErrors(validationErrors);
      setSubmitting(false);
      return;
    }

    if (!apiUrl) {
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/v1/squeeze`, {
        method: "POST",
        body: JSON.stringify({ first_name, last_name, email }),
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

      setFirst_name("");
      setLast_name("");
      setEmail("");
      router.push("/");
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
      className="flex justify-center bg-cover bg-center px-3 py-10 sm:px-8 sm:py-20 md:justify-start md:px-32 md:py-28"
      style={{ backgroundImage: "url('/images/squeeze.png')" }}
    >
      <div className="w-[480px] rounded-lg bg-background px-3 py-8 text-neutral-dark-1 md:px-6">
        <div className="items-left flex flex-col justify-between px-3">
          <h1 className="text-[26px] font-bold leading-8 md:text-[32px]">
            UNLEASH YOUR CREATIVITY WITH HNG BOILERPLATE
          </h1>

          <div className="my-6 pr-2 md:my-10">
            <div className="flex items-center space-x-3">
              <div>
                <Check size={24} color="#525252" />
              </div>
              <p className="text-lg font-medium leading-6">
                Eliminate complexity and coding headaches with our intuitive
                boilerplate
              </p>
            </div>

            <div className="my-3 flex items-center space-x-3">
              <div>
                <Check size={24} color="#525252" />
              </div>
              <p className="text-lg font-medium leading-6">
                Stay up-to-date with continuous updates and enhancements.
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <div>
                <Check size={24} color="#525252" />
              </div>
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
              value={first_name}
              onChange={(event) => setFirst_name(event.target.value)}
            />
            {errors?.first_name && (
              <div className="mt-1 text-xs text-red-600">
                {errors.first_name}
              </div>
            )}

            <input
              className="mt-2 block w-full rounded-md border border-neutral-dark-1 bg-background p-3 outline-none"
              type="text"
              placeholder="Last Name"
              value={last_name}
              onChange={(event) => setLast_name(event.target.value)}
            />
            {errors?.last_name && (
              <div className="mt-1 text-xs text-red-600">
                {errors.last_name}
              </div>
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
