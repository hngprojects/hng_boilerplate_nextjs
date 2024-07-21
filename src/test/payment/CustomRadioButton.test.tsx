import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CustomRadioButton from "../../components/paymentMethod/CustomRadioButton";

describe("CustomRadioButton", () => {
  const defaultProps = {
    name: "custom-radio",
    value: "option1",
  };

  it("renders correctly with default properties", () => {
    render(<CustomRadioButton {...defaultProps} />);
    const radioInput = screen.getByRole("radio");
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveAttribute("name", "custom-radio");
    expect(radioInput).toHaveAttribute("value", "option1");
    expect(radioInput).not.toBeChecked();
  });

  it("renders correctly when checked", () => {
    render(<CustomRadioButton {...defaultProps} checked />);
    const radioInput = screen.getByRole("radio");
    expect(radioInput).toBeChecked();
  });

  it("handles user interactions", () => {
    render(<CustomRadioButton {...defaultProps} />);
    const radioInput = screen.getByRole("radio");
    fireEvent.click(radioInput);
    // This assumes the component updates checked status on click.
    // Adjust according to how your component handles state changes.
    expect(radioInput).toBeChecked();
  });
});
