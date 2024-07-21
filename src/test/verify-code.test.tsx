import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import VerifyCodePage from "~/app/auth/forgot-password/verify-otp/page";

describe("verifyCodePage Component", () => {
  it("renders correctly", () => {
    expect.assertions(1);
    render(<VerifyCodePage />);
    expect(screen.getByText("Verification Code")).toBeInTheDocument();
  });

  it("displays the correct email and timer", () => {
    expect.assertions(2);
    render(<VerifyCodePage />);
    expect(screen.getByText("ellafedora@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("00:59")).toBeInTheDocument();
  });

  it("renders the OTP input component", () => {
    expect.assertions(1);
    render(<VerifyCodePage />);
    const otpInputs = screen.getAllByRole("textbox");
    expect(otpInputs).toHaveLength(6); // Assuming 6 OTP input slots
  });

  it("renders the verify button as disabled initially", () => {
    expect.assertions(1);
    render(<VerifyCodePage />);
    const button = screen.getByText("Verify");
    expect(button).toBeDisabled();
  });

  it("renders the resend OTP link", () => {
    expect.assertions(1);
    render(<VerifyCodePage />);
    expect(screen.getByText("Resend OTP")).toBeInTheDocument();
  });
});
