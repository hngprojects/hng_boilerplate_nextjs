"use client";

import { useState } from "react";

/**
 * Handles form submission for the forgot password feature.
 * @param {React.FormEvent} event - The form submission event.
 * @param {string} email - The user's email address.
 */
const handleSubmit = (event: React.FormEvent, email: string): void => {
  event.preventDefault();

  // Log the email submission (replace this with actual submission logic)
  console.log(`Submitting email: ${email}`);
};

/**
 * ForgotPassword component for handling the forgot password process.
 * @returns {JSX.Element} - The ForgotPassword component.
 */
const ForgotPassword = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");

  /**
   * Handles the change in the email input field.
   * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event.
   */
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="mx-auto mt-[130px] h-auto w-full max-w-[552px] px-4 md:px-0">
      <h3 className="leading-h3height text-h3font text-ForgotPassword-hblack text-center font-semibold">
        Forgot Password
      </h3>
      <p className="leading-pheight text-ForgotPassword-pGray my-4 text-center text-lg font-normal">
        Enter the email address you used to create the account to receive
        instructions on how to reset your password.
      </p>
      <form onSubmit={(event) => handleSubmit(event, email)}>
        <label
          htmlFor="email"
          className="leading-pheight text-ForgotPassword-hblack text-xl font-normal"
        >
          Email
        </label>
        <br />
        <input
          className="my-2 w-full rounded-md border-2 p-3"
          type="email"
          id="email"
          value={email}
          placeholder="Enter your email"
          onChange={handleEmailChange}
          required
        />
        <br />
        <button
          type="submit"
          className="bg-ForgotPassword-sendBtn my-4 h-12 w-full rounded-md text-center text-white"
        >
          Send
        </button>
      </form>
      <p className="text-ForgotPassword-Rcol text-center">
        Remember your Password?{" "}
        <button className="text-ForgotPassword-sendBtn">Login</button>
      </p>
    </div>
  );
};

export default ForgotPassword;
