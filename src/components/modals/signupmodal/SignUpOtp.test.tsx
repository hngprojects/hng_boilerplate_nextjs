import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import SignupOtp from "./signUpOtp";

vi.mock("next/router", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("signupOtp Component", () => {
  it("should render the SignupOtp component", () => {
    render(<SignupOtp />);
    expect(screen.getByText("Sign Up")).toBeInTheDocument(); // Using Testing Library method
  });

  it("should focus on the first input when the component is rendered", () => {
    render(<SignupOtp />);
    const firstInput = screen.getAllByRole("textbox")[0];
    expect(firstInput).toHaveFocus(); // Using Testing Library method
  });

  it("should move focus to the next input on typing a digit", async () => {
    render(<SignupOtp />);
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], { target: { value: "1" } });
    await new Promise((r) => setTimeout(r, 100)); // Adding a small delay
    expect(inputs[1]).toHaveFocus();
  });
  it("should fill all inputs when pasting a 6-digit code", () => {
    render(<SignupOtp />);
    const inputs = screen.getAllByRole("textbox");
    fireEvent.paste(inputs[0], { clipboardData: { getData: () => "123456" } });
    for (const [index, input] of inputs.entries()) {
      expect(input.value).toBe("123456"[index]); // Check against pasted value
    }
  });
});
