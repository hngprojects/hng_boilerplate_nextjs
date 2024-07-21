// components/OtpInput.tsx

"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import * as React from "react";

interface InputOtpProps {
  numInputs: number;
  onChange: (value: string) => void;
  [key: string]: any;
}

const InputOtp: React.FC<InputOtpProps> = ({
  numInputs = 6,
  onChange,
  ...props
}) => {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value, onChange]);

  return (
    <div className="space-y-2">
      <InputOTP
        maxLength={numInputs}
        value={value}
        onChange={(value) => setValue(value)}
        {...props}
      >
        <InputOTPGroup>
          {Array.from({ length: numInputs }).map((_, index) => (
            <InputOTPSlot key={index} index={index} className="otp-input" />
          ))}
        </InputOTPGroup>
      </InputOTP>
      <style jsx>{`
        .otp-input {
          width: 60px;
          height: 60px;
          text-align: center;
          font-size: 24px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        @media (max-width: 768px) {
          .otp-input {
            width: 42px;
            height: 42px;
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default InputOtp;
