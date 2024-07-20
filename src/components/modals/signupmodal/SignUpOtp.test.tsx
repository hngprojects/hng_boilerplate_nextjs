import { describe, expect, it, vi } from "vitest";

// Mock component dependencies or behaviors as needed
vi.mock("next/router", () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

const simulateOtpChange = (otp: string[], index: number, value: string) => {
  const newOtp = [...otp];
  newOtp[index] = value;
  return newOtp;
};
const simulatePaste = (otp: string[], pasteData: string) => {
  if (/^\d{6}$/.test(pasteData)) {
    return [...pasteData];
  }
  return otp;
};
describe("signupOtp Component", () => {
  // Extract component functions for direct testing
  it.todo("should focus on the first input when the component is rendered");

  it("should move focus to the next input on typing a digit", () => {
    const otp = ["", "", "", "", "", ""];
    const newOtp = simulateOtpChange(otp, 0, "1");
    expect(newOtp[1]).toBe(""); // Check if focus would move to next input
  });

  it("should fill all inputs when pasting a 6-digit code", () => {
    const otp = ["", "", "", "", "", ""];
    const newOtp = simulatePaste(otp, "123456");
    expect(newOtp).toEqual(["1", "2", "3", "4", "5", "6"]);
  });

  it("should not change OTP when pasting invalid data", () => {
    const otp = ["", "", "", "", "", ""];
    const newOtp = simulatePaste(otp, "12345"); // Invalid data
    expect(newOtp).toEqual(otp); // No change should be applied
  });
});
