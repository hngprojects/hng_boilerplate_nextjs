"use client";

import { CircleCheck } from "lucide-react";
import React, { useEffect, useState } from "react";

interface PasswordCheckProperties {
  minLength: number;
  password: string;
  onStrengthChange: (strength: PasswordCheck) => void;
}

interface PasswordCheck {
  minLengthCheck: boolean;
  containsUppercase: boolean;
  containNumber: boolean;
}

const handlerContainsNumber = (value: string) => {
  const regex = /\d/;
  return regex.test(value);
};

const handleContainsUpperCase = (value: string) => {
  const regex = /[A-Z]/;
  return regex.test(value);
};

const PasswordCheck: React.FC<PasswordCheckProperties> = ({
  password,
  minLength,
  onStrengthChange,
}) => {
  const [checkPassword, setCheckPassword] = useState<PasswordCheck>({
    minLengthCheck: false,
    containsUppercase: false,
    containNumber: false,
  });

  useEffect(() => {
    const handleCheckPassword = (password: string) => {
      const containsUpperCase = handleContainsUpperCase(password);
      const containsNumber = handlerContainsNumber(password);
      const minLengthCheck = password.length >= minLength;

      const newStrength: PasswordCheck = {
        minLengthCheck,
        containsUppercase: containsUpperCase,
        containNumber: containsNumber,
      };

      setCheckPassword(newStrength);
      onStrengthChange(newStrength);
    };
    handleCheckPassword(password);
  }, [password, minLength, onStrengthChange]);

  return (
    <div className="l-4 mt-[8px]">
      <div className="flex items-center gap-[16px]">
        <div
          className={`w-[100px] border-[3px] border-solid ${checkPassword.minLengthCheck || checkPassword.containNumber || checkPassword.containsUppercase ? "border-[#6DC347]" : "border-[#B6B6B6]"}`}
        ></div>
        <div
          className={`w-[100px] border-[3px] border-solid ${(checkPassword.minLengthCheck && checkPassword.containNumber) || (checkPassword.containNumber && checkPassword.containsUppercase) || (checkPassword.minLengthCheck && checkPassword.containsUppercase) ? "border-[#6DC347]" : "border-[#B6B6B6]"}`}
        ></div>
        <div
          className={`w-[100px] border-[3px] border-solid ${checkPassword.minLengthCheck && checkPassword.containNumber && checkPassword.containsUppercase ? "border-[#6DC347]" : "border-[#B6B6B6]"}`}
        ></div>
      </div>
      <div>
        <p className="mt-[24px]">Weak password. Must contain:</p>
        <div className="mt-[12px] flex items-center gap-[8px]">
          <CircleCheck
            data-testid="circle-check-icon"
            style={{
              color: checkPassword.containsUppercase ? "#6DC347" : "#B6B6B6",
            }}
          />
          <p className="">At least 1 uppercase</p>
        </div>
        <div className="mt-[8px] flex items-center gap-[8px]">
          <CircleCheck
            data-testid="circle-check-icon"
            style={{
              color: checkPassword.containNumber ? "#6DC347" : "#B6B6B6",
            }}
          />
          <p>At least 1 number</p>
        </div>
        <div className="mt-[8px] flex items-center gap-[8px]">
          <CircleCheck
            data-testid="circle-check-icon"
            style={{
              color: checkPassword.minLengthCheck ? "#6DC347" : "#B6B6B6",
            }}
          />
          <p>At least {minLength} characters</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordCheck;
