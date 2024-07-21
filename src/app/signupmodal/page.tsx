"use client";

import React, {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

import CustomButton from "~/components/common/Button/button";
import { Input } from "~/components/ui/input";

const SignupOtp: React.FC = () => {
  const inputReferences = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(Array.from({ length: 6 }, () => ""));

  useEffect(() => {
    inputReferences.current[0]?.focus();
  }, []);

  const handleOtpChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    const newOtp =
      /^\d$/.test(value) || value === ""
        ? ((otpCopy) => {
            otpCopy[index] = value;
            setOtp(otpCopy);
            return otpCopy;
          })([...otp])
        : otp;

    console.log(newOtp);
    value !== "" && index < 5 && inputReferences.current[index + 1]?.focus();
  };

  const handlePaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const pasteData = event.clipboardData.getData("text");
    if (/^\d{6}$/.test(pasteData)) {
      const newOtp = [...pasteData];
      setOtp(newOtp);
      for (const [index, value] of newOtp.entries()) {
        if (inputReferences.current[index]) {
          inputReferences.current[index]!.value = value;
        }
      }
      inputReferences.current[5]?.focus(); // Focus the last input after pasting
    }
    event.preventDefault();
  };

  const handleClick = (index: number) => {
    inputReferences.current[index]?.select();
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      inputReferences.current[index - 1]?.focus();
    }
  };

  return (
    <div className="font-inter mx-auto flex h-[496px] max-w-[484px] items-center rounded-lg border border-solid border-gray-300 bg-white px-8">
      <div className="text-center">
        <div className="mx-auto mt-6 w-72">
          <h2 className="text-[32px] font-semibold leading-9 text-gray-900">
            Sign Up
          </h2>
          <p className="pt-4 text-sm text-gray-500">
            We sent a temporary sign-in code to your mail
          </p>
        </div>
        <p className="my-8 text-sm text-gray-900">
          Please paste (or type) your 6-digit code:
        </p>
        <div className="mb-8 flex gap-3">
          {otp.map((value, index) => (
            <Input
              key={index}
              ref={(input) => {
                if (input) {
                  inputReferences.current[index] = input;
                }
              }}
              type="text"
              maxLength={1}
              className={`h-[60px] w-[60px] rounded-lg border text-center text-lg font-semibold outline-none ${
                value ? "border-red-500" : "border-gray-300"
              }`}
              value={value}
              onChange={(event) => handleOtpChange(index, event)}
              onClick={() => handleClick(index)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              onPaste={handlePaste}
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <CustomButton variant="destructive" className="mb-8 w-full py-[1.5rem]">
            Continue
          </CustomButton>
        </div>
        <div className="mx-16 pb-4">
          <div className="pb-3">
            <p className="text-xs text-gray-500">
              Would you rather use email and password?
            </p>
            <CustomButton variant="link" className="text-xs">
              Continue with email and password
            </CustomButton>
          </div>
          <div className="text-xs font-normal text-gray-500">
            We would process your data as set forth in our{" "}
            <span className="font-bold text-orange-500">Terms of Use</span>,{" "}
            <span className="font-bold text-orange-500">Privacy Policy</span>{" "}
            and{" "}
            <span className="font-bold text-orange-500">
              Data Processing Agreement
            </span>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupOtp;
