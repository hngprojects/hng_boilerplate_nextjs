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

  it("proceeds to verification code stage on valid email", async () => {
    expect.hasAssertions();

    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const sendButton = screen.getByText(/send/i);

    fireEvent.change(emailInput, {
      target: { value: "akinsanyaadeyinka4166@gmail.com" },
    });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText("Verification Code")).toBeInTheDocument();
    });
  });

  it("shows error for incorrect OTP", async () => {
    expect.hasAssertions();

    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const sendButton = screen.getByText(/send/i);

    fireEvent.change(emailInput, {
      target: { value: "akinsanyaadeyinka4166@gmail.com" },
    });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText("Verification Code")).toBeInTheDocument();
    });

    const otpInput = screen.getByTestId("forgot-password-otp-input");
    fireEvent.change(otpInput, { target: { value: "000000" } });

    await waitFor(() => {
      expect(
        screen.getByText(/the otp entered is not correct/i),
      ).toBeInTheDocument();
    });
  });

  it("proceeds to reset password stage on correct OTP", async () => {
    expect.hasAssertions();

    render(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const sendButton = screen.getByText(/send/i);

    fireEvent.change(emailInput, {
      target: { value: "akinsanyaadeyinka4166@gmail.com" },
    });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText("Verification Code")).toBeInTheDocument();
    });

    const otpInput = screen.getByTestId("forgot-password-otp-input");
    fireEvent.change(otpInput, { target: { value: "123456" } });
    const verifyButton = screen.getByText(/verify/i);
    fireEvent.click(verifyButton);

    await waitFor(() => {
      expect(screen.getByText(/verification successful/i)).toBeInTheDocument();
    });
  });
});
