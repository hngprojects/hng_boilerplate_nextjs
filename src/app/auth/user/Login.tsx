"use client";

import Image from "next/image";
import { useState } from "react";

import Footer from "~/components/layouts/Footer";
import Navbar from "~/components/layouts/Navbar";
import { Button } from "~/components/ui/button";

const MagicLogin = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const emailBlacklist = new Set(["gail.com", "yhoo.com", "hotmal.com"]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailDomain = email.split("@")[1];
    return emailRegex.test(email) && !emailBlacklist.has(emailDomain);
  };

  const handleSubmit = () => {
    const isEmailValid = validateEmail(email);
    setIsValidEmail(isEmailValid);
    setError(isEmailValid ? "" : "Please enter a valid email");
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white p-4">
        <h2 className="mb-4 text-center text-4xl font-semibold text-neutral-dark-2 sm:text-sm md:text-4xl">
          Login With Email Link
        </h2>
        <div className="w-full max-w-md px-4">
          <div className="mb-4 flex flex-col">
            <label
              className="mb-2 text-sm font-normal text-neutral-dark-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`h-12 w-full rounded-lg border bg-white px-4 py-2 focus:border-primary focus:bg-background focus:outline-none sm:h-16 ${
                error
                  ? "border-error"
                  : isValidEmail
                    ? "border-primary"
                    : "border-border"
              }`}
              id="email"
              placeholder="Enter Email Address"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {error && <p className="mt-2 text-sm text-error">{error}</p>}
          </div>
          <Button
            className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            role="button"
            onClick={handleSubmit}
          >
            Get Magic Link
          </Button>
        </div>
        <div className="mt-4 flex w-full max-w-md items-center justify-start px-4 text-center text-sm text-foreground md:text-xs">
          <Image
            alt="shield image"
            className="mr-1 hidden md:block"
            src="/images/shield.svg"
            width={12}
            height={12}
          />
          <span>
            By logging in, you agree to the{" "}
            <a className="font-bold text-primary" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="font-bold text-primary" href="#">
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MagicLogin;
