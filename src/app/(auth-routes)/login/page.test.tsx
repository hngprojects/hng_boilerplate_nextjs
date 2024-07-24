import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import LoginPage from "./page";

// Mock the next/link component
vi.mock("next/link", () => ({
  default: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock the useRouter hook
const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Define a type for the field object
type FieldType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  value: string;
  name: string;
  ref: React.RefCallback<HTMLInputElement> | null;
};

// Mock UI components
vi.mock("~/components/ui/form", () => ({
  Form: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  FormField: ({
    render,
  }: {
    render: (properties: { field: FieldType }) => React.ReactNode;
  }) =>
    render({
      field: {
        onChange: vi.fn(),
        onBlur: vi.fn(),
        value: "",
        name: "",
        ref: () => {},
      },
    }),
  FormItem: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  FormLabel: ({ children }: { children: React.ReactNode }) => (
    <label>{children}</label>
  ),
  FormControl: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  FormMessage: ({ children }: { children: React.ReactNode }) => children,
}));

vi.mock("~/components/ui/input", () => ({
  Input: (properties: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...properties} />
  ),
}));

vi.mock("~/components/ui/checkbox", () => ({
  Checkbox: (properties: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input type="checkbox" {...properties} />
  ),
}));

vi.mock("~/components/ui/button", () => ({
  Button: ({
    children,
    ...properties
  }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <button {...properties}>{children}</button>
  ),
}));

describe("loginPage", () => {
  // Ensure mocks are reset after each test
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("renders login form", () => {
    expect.hasAssertions();

    render(<LoginPage />);

    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Email Address"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("toggles password visibility", () => {
    expect.hasAssertions();

    render(<LoginPage />);

    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const toggleButton = screen.getByRole("button", { name: "" });

    expect(passwordInput).toHaveAttribute("type", "password");
    expect(screen.getByTestId("eye-off-icon")).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute("type", "text");
    expect(screen.getByTestId("eye-icon")).toBeInTheDocument();

    fireEvent.click(toggleButton);

    expect(passwordInput).toHaveAttribute("type", "password");
    expect(screen.getByTestId("eye-off-icon")).toBeInTheDocument();
  });

  it('renders "Sign in with magic link" button', () => {
    expect.hasAssertions();

    render(<LoginPage />);

    const magicLinkButton = screen.getByRole("button", {
      name: /sign in with magic link/i,
    });
    expect(magicLinkButton).toBeInTheDocument();
    expect(magicLinkButton).toHaveTextContent("Sign in with magic link");
  });

  it('renders "Sign Up" link', () => {
    expect.hasAssertions();

    render(<LoginPage />);

    const signUpLink = screen.getByRole("link", { name: /sign up/i });
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink).toHaveTextContent("Sign Up");
    expect(signUpLink).toHaveAttribute("href", "#");
  });

  it("renders Terms of Service and Privacy Policy links", () => {
    expect.hasAssertions();

    render(<LoginPage />);

    const termsLink = screen.getByRole("link", { name: /terms of service/i });
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveTextContent("Terms of Service");
    expect(termsLink).toHaveAttribute("href", "#");

    const privacyLink = screen.getByRole("link", { name: /privacy policy/i });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveTextContent("Privacy Policy");
    expect(privacyLink).toHaveAttribute("href", "#");
  });

  it("submits form with valid inputs", () => {
    expect.hasAssertions();

    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText("Enter Email Address");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const submitButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(submitButton);

    // eslint-disable-next-line testing-library/await-async-utils
    vi.waitFor(
      () => {
        expect(mockPush).toHaveBeenCalledWith("/");

        const emailError = screen.queryByTestId("email-error");
        const passwordError = screen.queryByTestId("password-error");
        expect(emailError).not.toBeInTheDocument();
        expect(passwordError).not.toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });

  it("displays error messages for invalid inputs", async () => {
    expect.hasAssertions();
    render(<LoginPage />);

    const emailInput = screen.getByPlaceholderText("Enter Email Address");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const submitButton = screen.getByRole("button", { name: /login/i });

    await userEvent.type(emailInput, "invalid-email");
    await userEvent.type(passwordInput, "short");
    await userEvent.click(submitButton);

    // eslint-disable-next-line testing-library/await-async-utils
    vi.waitFor(
      () => {
        const emailError = screen.queryByTestId("email-error");
        const passwordError = screen.queryByTestId("password-error");
        expect(emailError).toBeInTheDocument();
        expect(passwordError).toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });
});
