import { render } from "@testing-library/react";

import ResetPasswordEmail from "../email/templates/password-reset/no-image";

describe("resetPasswordEmail", () => {
  const properties = {
    name: "John Doe",
    resetLink: "https://example.com/reset-password",
  };

  it("renders correctly", () => {
    const { getByText, getByRole } = render(
      <ResetPasswordEmail {...properties} />,
    );

    // Header (from layout)
    expect(getByText(":: Boilerplate.")).toBeInTheDocument();

    // Main content
    expect(getByText("Reset Your Password")).toBeInTheDocument();
    expect(getByText(`Hi ${properties.name},`)).toBeInTheDocument();
    expect(
      getByText(
        /You recently requested to reset your password. If you did not make this request, you can ignore this email./,
      ),
    ).toBeInTheDocument();
    expect(
      getByText(/To reset your password, please click the button below./),
    ).toBeInTheDocument();
    expect(getByRole("link", { name: "Reset Password" })).toHaveAttribute(
      "href",
      properties.resetLink,
    );
    expect(getByText(/Regards,/)).toBeInTheDocument();
    expect(getByText(/Boilerplate Team/)).toBeInTheDocument();

    // Footer (from layout)
    expect(getByText(/Thank you for choosing Boilerplate/)).toBeInTheDocument();
    expect(getByText(/Contact our customer support/)).toBeInTheDocument();
    expect(
      getByText(/You are receiving this email because you signed up/),
    ).toBeInTheDocument();
    expect(getByText(/update your preferences/)).toBeInTheDocument();
    expect(getByText(/unsubscribe from this list/)).toBeInTheDocument();
  });
});
