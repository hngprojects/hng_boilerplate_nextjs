/* eslint-disable testing-library/await-async-utils */
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useToast } from "~/components/ui/use-toast";
import LoginMagicLink from "./page";

vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
}));

vi.mock("~/components/ui/use-toast", () => ({
  useToast: vi.fn(),
}));

describe("loginMagicLink", () => {
  const mockPush = vi.fn();
  const mockToast = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (useToast as jest.Mock).mockReturnValue({ toast: mockToast });
  });

  it("renders the login form", () => {
    expect.hasAssertions();
    render(<LoginMagicLink />);
    expect(screen.getByText("Login With Magic Link")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Email Address"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Get Magic Link" }),
    ).toBeInTheDocument();
  });

  it("displays an error message for invalid email", async () => {
    expect.hasAssertions();
    render(<LoginMagicLink />);
    const emailInput = screen.getByPlaceholderText("Enter Email Address");
    const submitButton = screen.getByRole("button", { name: "Get Magic Link" });

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    vi.waitFor(() => {
      const emailError = screen.queryByTestId("email-error");
      expect(emailError).toBeInTheDocument();
    });
  });

  it("submits the form with valid email and redirects", async () => {
    expect.hasAssertions();
    render(<LoginMagicLink />);
    const emailInput = screen.getByPlaceholderText("Enter Email Address");
    const submitButton = screen.getByRole("button", { name: "Get Magic Link" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    vi.waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/login/magic-link/link-sent");
    });
  });

  it("renders the terms and privacy policy links", () => {
    expect.hasAssertions();
    render(<LoginMagicLink />);
    expect(screen.getByText("Terms of Service")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });
});
