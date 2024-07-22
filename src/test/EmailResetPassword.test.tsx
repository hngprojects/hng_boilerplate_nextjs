import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ResetPasswordEmail from "../email/templates/password-reset/no-image";

// eslint-disable-next-line vitest/no-disabled-tests
describe.skip("resetPasswordEmail", () => {
  const properties = {
    name: "John Doe",
    resetLink: "https://example.com/reset-password",
  };

  it("renders correctly", () => {
    expect.hasAssertions();
    render(<ResetPasswordEmail {...properties} />);

    // Header (from layout)
    expect(screen.getByText("Boilerplate.")).toBeInTheDocument();

    // Main content
    expect(screen.getByText(`Hi ${properties.name},`)).toBeInTheDocument();
    expect(
      screen.getByText(/You recently requested to reset your password./),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /To reset your password, please click the button below./,
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Reset Password" }),
    ).toHaveAttribute("href", properties.resetLink);

    // Footer (from layout)
    expect(
      screen.getByText(/Thank you for choosing Boilerplate/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Contact our customer support/),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/You are receiving this email because you signed up/),
    ).toBeInTheDocument();
    expect(screen.getByText(/update your preferences/)).toBeInTheDocument();
    expect(screen.getByText(/unsubscribe from this list/)).toBeInTheDocument();
  });
});
