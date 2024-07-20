"use client";

import React, {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

const SignupOtp: React.FC = () => {
  const inputReferences = useRef<(HTMLInputElement | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(
    Array.from({ length: 6 }, () => "") as string[],
  );
  useEffect(() => {
    inputReferences.current[0]?.focus();
  }, []);

  const handleOtpChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    if (/^\d$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 5) {
        inputReferences.current[index + 1]?.focus();
      }
    }
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
    <div
      className={`font-inter·mx-auto·flex·h-[496px]·max-w-[484px]·items-center·rounded-[8px]·border-[1px]·border-solid·border-[#CBD5E1]·bg-[#ffffff]·px-[32px]`}
    >
      <div className="text-center">
        <div className="mx-auto mt-[24px] w-[285px]">
          <h2 className="text-[32px] font-semibold leading-[36px] text-[#0F172A]">
            Sign Up
          </h2>
          <p className="pt-[1rem] text-[14px] text-[#64748B]">
            We sent a temporary sign-in code to your mail
          </p>
        </div>
        <p className="my-[32px] text-[14px] text-[#0F172A]">
          Please paste (or type) your 6-digit code:
        </p>
        <div className="mb-[32px] flex gap-[12px]">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(input) => {
                if (input) {
                  inputReferences.current[index] = input;
                }
              }}
              type="text"
              maxLength={1}
              className={`h-[60px] max-w-[60px] rounded-lg border text-center text-[18px] font-semibold outline-none ${value ? "border-[#EF4444]" : "border-[#CBD5E1]"}`}
              value={value}
              onChange={(event) => handleOtpChange(index, event)}
              onClick={() => handleClick(index)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              onPaste={handlePaste}
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button
            className={`font-inter mb-[32px] flex w-full items-center justify-center rounded-lg bg-[#F97316] px-5 py-3 font-medium text-[#FAF8F8]`}
          >
            Continue
          </button>
        </div>
        <div className="mx-[68px] pb-[1rem]">
          <div className="pb-[12px]">
            <p className="text-[12px] text-[#64748B]">
              Would you rather use email and password?
            </p>
            <button className={`text-[12px] font-bold text-[#F97316]`}>
              Continue with email and password
            </button>
          </div>
          <div className="text-4 text-[10px] font-[400] text-[#64748B]">
            We would process your data as set forth in our{" "}
            <span className="text-[10px]·font-bold·text-[#F97316]">
              Terms of Use
            </span>
            ,
            <span className="text-[10px]·font-bold·text-[#F97316]">
              {" "}
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-[10px]·font-bold·text-[#F97316]">
              Data Processing Agreement
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupOtp;
