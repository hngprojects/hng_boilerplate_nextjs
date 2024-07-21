import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import CustomRadioButton from "../../components/paymentMethod/CustomRadioButton";

describe("customRadioButton", () => {
  const defaultProps = {
    name: "custom-radio",
    value: "option1",
  };

  it("renders correctly with default properties", () => {
    expect.assertions(4); // Number of assertions in this test
    render(<CustomRadioButton {...defaultProps} />);

    const radioInput = screen.getByRole("radio");

    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveAttribute("name", "custom-radio");
    expect(radioInput).toHaveAttribute("value", "option1");
    expect(radioInput).not.toBeChecked();
  });

  it("renders correctly when checked", () => {
    expect.assertions(1); // Number of assertions in this test
    render(<CustomRadioButton {...defaultProps} checked />);

    const radioInput = screen.getByRole("radio");

    expect(radioInput).toBeChecked();
  });

  it("handles user interactions", () => {
    expect.assertions(1); // Number of assertions in this test
    render(<CustomRadioButton {...defaultProps} />);

    const radioInput = screen.getByRole("radio");
    fireEvent.click(radioInput);

    // Assuming the component updates checked status on click.
    // Adjust according to how your component handles state changes.
    expect(radioInput).toBeChecked();
  });
});
