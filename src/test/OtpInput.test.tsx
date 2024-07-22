import { fireEvent, render, screen } from "@testing-library/react";
import * as React from "react";

import "@testing-library/jest-dom";

import { describe, expect, it, vi } from "vitest";

import OtpInput from "../components/ui/OtpInput";

// Mock the components from shadcn-ui
vi.mock("~/components/ui/input-otp", () => ({
  InputOTP: ({
    children,
    value = "",
    onChange,
  }: {
    children: React.ReactNode;
    value: string;
    onChange: (value: string) => void;
  }) => (
    <div>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, { value, onChange }),
      )}
    </div>
  ),
  InputOTPGroup: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  InputOTPSlot: ({
    index,
    value = "",
    onChange,
    className,
  }: {
    index: number;
    value: string;
    onChange: (value: string) => void;
    className: string;
  }) => (
    <input
      type="text"
      data-testid={`otp-input-${index}`}
      maxLength={1}
      value={value[index] || ""}
      onChange={(event) => {
        const newValue = Array.from(value);
        newValue[index] = event.target.value;
        if (onChange) {
          onChange(newValue.join(""));
        }
      }}
      className={className}
    />
  ),
}));

describe("otpInput Component", () => {
  it("renders the correct number of input fields", () => {
    expect.assertions(1);
    render(<OtpInput numInputs={6} onChange={vi.fn()} />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(6);
  });

  it("only allows one character per input field", () => {
    expect.assertions(1);
    const handleChange = vi.fn();
    render(<OtpInput numInputs={6} onChange={handleChange} />);
    const input = screen.getAllByRole("textbox")[0];

    fireEvent.change(input, { target: { value: "12" } });
    expect(input).toHaveValue("");
  });

  //   it("focus moves to the next input field after entering a character", () => {
  //     expect.assertions(1);
  //     render(<OtpInput numInputs={6} onChange={vi.fn()} />);
  //     const inputs = screen.getAllByRole("textbox");

  //     fireEvent.change(inputs[0], { target: { value: "1" } });
  //     expect("inputs[1]").toHaveFocus();
  //   });

//   it("concatenated input values are returned on change", () => {
//     expect.assertions(1);
//     const handleChange = vi.fn();
//     render(<OtpInput numInputs={6} onChange={handleChange} />);

//     const inputs = screen.getAllByRole("textbox");
//     fireEvent.change(inputs[0], { target: { value: "1" } });
//     fireEvent.change(inputs[1], { target: { value: "2" } });

//     expect(handleChange).toHaveBeenLastCalledWith("");
//   });

  it("input fields have the correct styling", () => {
    expect.assertions(31); // Adjust based on the number of input checks
    render(<OtpInput numInputs={6} onChange={vi.fn()} />);
    const inputs = screen.getAllByRole("textbox");

     inputs.forEach(input => {
      expect(input).toHaveClass("border-[#CBD5E1]");
      expect(input).toHaveClass("h-[42px]");
      expect(input).toHaveClass("w-[42px]");
      expect(input).toHaveClass("md:h-[60px]");
      expect(input).toHaveClass("md:w-[60px]");
    });

    fireEvent.change(inputs[0], { target: { value: "1" } });
    expect(inputs[0]).toHaveClass(
      "h-[42px] w-[42px] border text-center md:h-[60px] md:w-[60px] border-[#CBD5E1] rounded-md focus:outline-none",
    );
  });
});
