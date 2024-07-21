import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import PaymentMethod from "../../components/paymentMethod/PaymentMethod";

describe("paymentMethod Component", () => {
  const defaultProps = {
    image: "../../../public/images/logo(small).svg",
    header: "MasterCard",
    width: 40,
    height: 40,
    active: false,
    onClick: vi.fn(),
    forms: <div>Form content</div>,
  };

  it("renders the component with given props", () => {
    expect.assertions(6); // Updated number of assertions in this test
    render(<PaymentMethod {...defaultProps} />);

    // Check if the header is rendered
    expect(screen.getByText("MasterCard")).toBeInTheDocument();

    // Check if the image is rendered with correct src
    const image = screen.getByAltText("MasterCard Symbol");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "../../../public/images/logo(small).svg",
    );
    expect(image).toHaveAttribute("height", "40");
    expect(image).toHaveAttribute("width", "40");

    expect(screen.getByText("Form content")).toBeInTheDocument();
  });

  it("calls onClick when the radio button is clicked", () => {
    expect.assertions(1);
    render(<PaymentMethod {...defaultProps} />);

    const radioButton = screen.getByRole("radio");
    fireEvent.click(radioButton);

    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("renders the radio button with correct checked state", () => {
    expect.assertions(2);
    const { rerender } = render(
      <PaymentMethod {...defaultProps} active={true} />,
    );

    let radioButton = screen.getByRole("radio");
    expect(radioButton).toBeChecked();

    rerender(<PaymentMethod {...defaultProps} active={false} />);

    radioButton = screen.getByRole("radio");
    expect(radioButton).not.toBeChecked();
  });

  it("conditionally renders the forms section", () => {
    expect.assertions(2);
    const { rerender } = render(
      <PaymentMethod {...defaultProps} forms={undefined} />,
    );

    expect(screen.queryByText("Form content")).not.toBeInTheDocument();

    rerender(
      <PaymentMethod {...defaultProps} forms={<div>Form content</div>} />,
    );
    expect(screen.getByText("Form content")).toBeInTheDocument();
  });
});
