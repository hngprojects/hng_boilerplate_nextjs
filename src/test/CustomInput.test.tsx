import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it, vi } from "vitest";

import CustomInput from "~/components/common/Input/input";

describe("customInput", () => {
  it("renders the input with the correct placeholder", () => {
    expect.hasAssertions();

    render(<CustomInput placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders the label when provided", () => {
    expect.hasAssertions();

    render(<CustomInput label="Label" placeholder="Enter text" />);
    const labelElement = screen.getByText("Label");
    expect(labelElement).toBeInTheDocument();
  });

  it("handles value change", () => {
    expect.hasAssertions();

    const handleChange = vi.fn();
    render(
      <CustomInput placeholder="Enter text" value="" onChange={handleChange} />,
    );
    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "new value" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("handles focus event", () => {
    expect.hasAssertions();

    const handleFocus = vi.fn();
    render(<CustomInput placeholder="Enter text" onFocus={handleFocus} />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.focus(inputElement);
    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it("displays button when isButtonVisible is true", () => {
    expect.hasAssertions();

    render(<CustomInput placeholder="Enter text" isButtonVisible />);
    const buttonElement = screen.getByText("Button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("handles button click event", () => {
    expect.hasAssertions();

    const handleClick = vi.fn();
    render(
      <CustomInput
        placeholder="Enter text"
        isButtonVisible
        onButtonClick={handleClick}
      />,
    );
    const buttonElement = screen.getByText("Button");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables button when isDisabled is true", () => {
    expect.hasAssertions();

    render(
      <CustomInput
        placeholder="Enter text"
        isButtonVisible={true}
        isDisabled={true}
      />,
    );
    const buttonElement = screen.getByText("Button");
    expect(buttonElement).toBeDisabled();
  });
});
