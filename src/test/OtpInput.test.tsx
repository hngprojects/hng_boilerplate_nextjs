// __tests__/OtpInput.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import OtpInput from "../components/ui/OtpInput";

describe("OtpInput", () => {
  it("should render the correct number of inputs", () => {
    const { getAllByRole } = render(
      <OtpInput numInputs={6} onInputChange={() => {}} />,
    );
    const inputs = getAllByRole("textbox");
    expect(inputs.length).toBe(6);
  });

  it("should only allow one character per input", () => {
    render(<OtpInput numInputs={6} onInputChange={() => {}} />);
    const input = screen.getAllByRole("textbox")[0];

    fireEvent.change(input, { target: { value: "12" } });
    expect(input).toHaveValue("1");
  });

  it("should focus the next input on character entry", () => {
    const { getAllByRole } = render(
      <OtpInput numInputs={6} onInputChange={() => {}} />,
    );
    const inputs = getAllByRole("textbox");

    fireEvent.change(inputs[0], { target: { value: "1" } });
    expect(inputs[1]).toHaveFocus();
  });

  it("should return the concatenated OTP on input change", () => {
    let otp = "";
    const handleOtpChange = (value: string) => {
      otp = value;
    };

    const { getAllByRole } = render(
      <OtpInput numInputs={6} onInputChange={handleOtpChange} />,
    );
    const inputs = getAllByRole("textbox");

    fireEvent.change(inputs[0], { target: { value: "1" } });
    fireEvent.change(inputs[1], { target: { value: "2" } });
    fireEvent.change(inputs[2], { target: { value: "3" } });
    fireEvent.change(inputs[3], { target: { value: "4" } });
    fireEvent.change(inputs[4], { target: { value: "5" } });
    fireEvent.change(inputs[5], { target: { value: "6" } });

    expect(otp).toBe("123456");
  });

  //   it("should allow backspace to focus the previous input", () => {
  //     const { getAllByRole } = render(
  //       <OtpInput numInputs={6} onInputChange={() => {}} />,
  //     );
  //     const inputs = getAllByRole("textbox");

  //     fireEvent.change(inputs[0], { target: { value: "1" } });
  //     fireEvent.change(inputs[1], { target: { value: "2" } });
  //     fireEvent.change(inputs[2], { target: { value: "3" } });

  //     fireEvent.keyDown(inputs[2], { key: "Backspace" });
  //     expect(inputs[2].value).toBe("");
  //     expect(inputs[1]).toHaveFocus();
  //   });
});
