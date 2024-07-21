import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ForgotPassword from "../components/common/ForgetPassword/forgetPassword";

describe("forgotPassword", () => {
  it("renders the Forgot Password component", () => {
    expect.assertions(2);
    render(<ForgotPassword />);
    expect(screen.getByText("Forgot Password")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Enter the email address you used to create the account to receive instructions on how to reset your password",
      ),
    ).toBeInTheDocument();
  });

  it("allows the user to input an email", () => {
    expect.assertions(1);
    render(<ForgotPassword />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput).toHaveValue("test@example.com");
  });

  it("submits the form", async () => {
    expect.hasAssertions();
    render(<ForgotPassword />);
    const emailInput = screen.getByPlaceholderText("Enter your email");
    await userEvent.type(emailInput, "test@example.com");
    const submitButton = screen.getByRole("button", { name: /send/i });
    await userEvent.click(submitButton);
    expect(
      screen.getByText("Submitting email: test@example.com"),
    ).toBeInTheDocument();
  });
});
