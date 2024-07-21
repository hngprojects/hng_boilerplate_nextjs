import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ForgotPassword from "../components/common/ForgetPassword/forgetPassword";

describe("forgotPassword Component", () => {
  it("renders the Forgot Password component", () => {
    expect.assertions(2); // Ensures that exactly 2 assertions will be made
    render(<ForgotPassword />);
    expect(screen.getByText(/forgot password/i)).toBeInTheDocument();
    expect(screen.getByText(/enter the email address/i)).toBeInTheDocument();
  });

  it("allows the user to input an email", async () => {
    expect.assertions(1); // Ensures that exactly 1 assertion will be made
    render(<ForgotPassword />);
    const input = screen.getByPlaceholderText(/enter your email/i);
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(input).toHaveValue("test@example.com");
  });

  it("submits the form", async () => {
    expect.hasAssertions(); // Ensures that at least one assertion will be made
    render(<ForgotPassword />);
    const input = screen.getByPlaceholderText(/enter your email/i);
    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /send/i }));
    await expect(
      screen.findByText(/submitting email: test@example.com/i),
    ).resolves.toBeInTheDocument();
  });
});
