import { fireEvent, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import { renderWithIntl } from "~/test/utils";
import Login from "./page";

vi.mock("next/link", () => ({
  default: ({ children }: { children: React.ReactNode }) => children,
}));

const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

type FieldType = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  value: string;
  name: string;
  ref: React.RefCallback<HTMLInputElement> | null;
};

vi.mock("~/components/ui/form", () => ({
  Form: function Form({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  },
  FormField: function FormField({
    render,
  }: {
    render: (properties: { field: FieldType }) => React.ReactNode;
  }) {
    return render({
      field: {
        onChange: vi.fn(),
        onBlur: vi.fn(),
        value: "",
        name: "",
        ref: () => {},
      },
    });
  },
  FormItem: function FormItem({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>;
  },
  FormLabel: function FormLabel({ children }: { children: React.ReactNode }) {
    return <label>{children}</label>;
  },
  FormControl: React.forwardRef(function FormControl(
    { children }: { children: React.ReactNode },
    reference: React.Ref<HTMLDivElement>,
  ) {
    return <div ref={reference}>{children}</div>;
  }),
  FormMessage: function FormMessage({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return children;
  },
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

describe("login", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });
  it("renders login form", () => {
    expect.hasAssertions();

    renderWithIntl(<Login />);

    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Email Address"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("toggles password visibility", () => {
    expect.hasAssertions();

    renderWithIntl(<Login />);

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

    renderWithIntl(<Login />);

    const magicLinkButton = screen.getByRole("button", {
      name: /sign in with magic link/i,
    });
    expect(magicLinkButton).toBeInTheDocument();
    expect(magicLinkButton).toHaveTextContent("Sign in with magic link");
  });

  it("renders Terms of Service and Privacy Policy links", () => {
    expect.hasAssertions();

    renderWithIntl(<Login />);

    const termsLink = screen.getByRole("link", { name: /terms of service/i });
    expect(termsLink).toBeInTheDocument();
    expect(termsLink).toHaveTextContent("Terms of Service");
    expect(termsLink).toHaveAttribute("href", "#");

    const privacyLink = screen.getByRole("link", { name: /privacy policy/i });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveTextContent("Privacy Policy");
    expect(privacyLink).toHaveAttribute("href", "#");
  });

  it("submits form with valid inputs", async () => {
    expect.hasAssertions();

    renderWithIntl(<Login />);

    const emailInput = screen.getByPlaceholderText("Enter Email Address");
    const passwordInput = screen.getByPlaceholderText("Enter Password");
    const submitButton = screen.getByRole("button", { name: /login/i });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(submitButton);

    await vi.waitFor(
      () => {
        // expect(mockPush).toHaveBeenCalledWith("/");
        const emailError = screen.queryByTestId("email-error");
        const passwordError = screen.queryByTestId("password-error");
        expect(emailError).not.toBeInTheDocument();
        expect(passwordError).not.toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });

  // it("displays error messages for invalid inputs", async () => {
  //   expect.hasAssertions();

  //   render(<LoginPage />);

  //   const emailInput = screen.getByPlaceholderText("Enter Email Address");
  //   const passwordInput = screen.getByPlaceholderText("Enter Password");
  //   const submitButton = screen.getByRole("button", { name: /login/i });

  //   await userEvent.type(emailInput, "invalid-email");
  //   await userEvent.type(passwordInput, "short");
  //   await userEvent.click(submitButton);

  //   await vi.waitFor(
  //     () => {
  //       const emailError = screen.queryByTestId("email-error");
  //       const passwordError = screen.queryByTestId("password-error");
  //       expect(emailError).toBeInTheDocument();
  //       expect(passwordError).toBeInTheDocument();
  //     },
  //     { timeout: 3000 },
  //   );
  // });
});
