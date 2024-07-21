import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { InputOtp } from "~/components/common/Input-otp/page";

describe("inputOtp Component", () => {
  it("renders correctly with 6 input slots", () => {
    expect.assertions(1);
    render(<InputOtp />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(6);
  });

  it("handles input changes correctly", () => {
    expect.assertions(6);
    render(<InputOtp />);
    const inputs = screen.getAllByRole("textbox");

    for (let index = 0; index < inputs.length; index++) {
      const input = inputs[index];
      fireEvent.change(input, { target: { value: (index + 1).toString() } });
      expect((input as HTMLInputElement).value).toBe((index + 1).toString());
    }
  });

  it("applies focus styles correctly", () => {
    expect.assertions(6);
    render(<InputOtp />);
    const inputs = screen.getAllByRole("textbox");

    for (let index = 0; index < inputs.length; index++) {
      const input = inputs[index];
      fireEvent.focus(input);
      expect(input).toHaveClass("ring-2 ring-[#F97316] ring-offset-background");
    }
  });

  it("displays the correct value when typing in each input slot", () => {
    expect.assertions(6);
    render(<InputOtp />);
    const inputs = screen.getAllByRole("textbox");

    for (let index = 0; index < inputs.length; index++) {
      const input = inputs[index];
      fireEvent.change(input, { target: { value: (index + 1).toString() } });
      expect((input as HTMLInputElement).value).toBe((index + 1).toString());
    }
  });
});
