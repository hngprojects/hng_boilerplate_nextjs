"use client";

import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";

interface OtpInputProperties {
  numInputs: number;
  onChange: (value: string) => void;
  [key: string]: unknown;
}

const OtpInput: React.FC<OtpInputProperties> = ({
  numInputs: numberInputs = 6,
  onChange,
  ...properties
}) => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value, onChange]);

  const handleChange = (newValue: string) => {
    setValue(newValue);

    // Automatically focus the next input
    const nextInput = document.querySelector(
      `[data-testid="otp-input-${newValue.length}"]`,
    ) as HTMLInputElement;
    if (nextInput) {
      nextInput.focus();
    }
  };

  return (
    <div className="space-y-2">
      <InputOTP
        maxLength={numberInputs}
        value={value}
        onChange={handleChange}
        {...properties}
      >
        <InputOTPGroup>
          <div className="flex gap-2">
            {Array.from({ length: numberInputs }).map((_, index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className={`h-[42px] w-[42px] border text-center md:h-[60px] md:w-[60px] ${
                  value[index] ? "border-[#DC2626]" : "border-[#CBD5E1]"
                } rounded-md focus:outline-none`}
              />
            ))}
          </div>
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default OtpInput;
