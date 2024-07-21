import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import PaymentMethod from "../../components/paymentMethod/PaymentMethod";

describe("PaymentMethod Component", () => {
  const defaultProps = {
    image: "../../../public/images/logo(small).svg",
    header: "MasterCard",
    width: 50,
    height: 50,
    active: false,
    onClick: vi.fn(),
    forms: <div>Form content</div>,
  };

  it("renders the component with given props", () => {
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
    expect(image).toHaveAttribute("height", "50");
    expect(image).toHaveAttribute("width", "50");

    // Check if the forms are rendered
    expect(screen.getByText("Form content")).toBeInTheDocument();
  });

  it("calls onClick when the radio button is clicked", () => {
    render(<PaymentMethod {...defaultProps} />);

    const radioButton = screen.getByRole("radio");
    fireEvent.click(radioButton);

    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("renders the radio button with correct checked state", () => {
    const { rerender } = render(
      <PaymentMethod {...defaultProps} active={true} />);

    let radioButton = screen.getByRole("radio");
    expect(radioButton).toBeChecked();

    rerender(<PaymentMethod {...defaultProps} active={false} />);

    radioButton = screen.getByRole("radio");
    expect(radioButton).not.toBeChecked();
  });

  it("conditionally renders the forms section", () => {
    const { rerender } = render(
      <PaymentMethod {...defaultProps} forms={undefined} />);

    // Forms section should not be rendered
    expect(screen.queryByText("Form content")).not.toBeInTheDocument();

    // Forms section should be rendered
    rerender(
      <PaymentMethod {...defaultProps} forms={<div>Form content</div>} />,
    );
    expect(screen.getByText("Form content")).toBeInTheDocument();
  });
});
