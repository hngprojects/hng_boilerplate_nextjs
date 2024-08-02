import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import ForgotPassword from "./page";

vi.mock("next/link", () => ({
  default: ({ children }: { children: React.ReactNode }) => children,
}));

describe("forgot password page", () => {
  it("renders the initial email input form", () => {
    expect.hasAssertions();
    render(<ForgotPassword />);

    expect(screen.getByText(/forgot password/i)).toBeInTheDocument();

    expect(screen.getByText(/enter the email address/i)).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/enter your email/i),
    ).toBeInTheDocument();

    expect(screen.getByText(/send/i)).toBeInTheDocument();
  });

  it("shows email error for unregistered email", async () => {
    expect.hasAssertions();

    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const sendButton = screen.getByText(/send/i);

    fireEvent.change(emailInput, {
      target: { value: "unregistered@example.com" },
    });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(
        screen.getByText(/this email doesn't match our records/i),
      ).toBeInTheDocument();
    });
  });

  it("does not proceed to verification code stage if email is invalid", async () => {
    expect.hasAssertions();
    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const sendButton = screen.getByText(/send/i);

    fireEvent.change(emailInput, {
      target: { value: "invalid-email@example.com" },
    });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.queryByText("Verification Code")).not.toBeInTheDocument();
    });
  });

  it("displays an error message for an invalid email format", async () => {
    expect.hasAssertions();
    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const sendButton = screen.getByText(/send/i);
    fireEvent.change(emailInput, {
      target: { value: "invalid-email" },
    });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(
        screen.getByText(
          "This email doesn't match our records please try again",
        ),
      ).toBeInTheDocument();
    });
  });
});
