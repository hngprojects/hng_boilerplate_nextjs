"use client";

import { CircleCheck } from "lucide-react";
import React, { useEffect, useState } from "react";

interface PasswordCheckProperties {
  data: string;
}

interface PasswordCheck {
  moreThan7: boolean;
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

const PasswordCheck: React.FC<PasswordCheckProperties> = ({ data }) => {
  const [checkPassword, setCheckPassword] = useState<PasswordCheck>({
    moreThan7: false,
    containsUppercase: false,
    containNumber: false,
  });

  const handleCheckPassword = (data: string) => {
    const containsUpperCase = handleContainsUpperCase(data);
    const containsNumber = handlerContainsNumber(data);
    if (containsUpperCase) {
      setCheckPassword((previousData) => {
        return { ...previousData, containsUppercase: true };
      });
    }
    if (containsNumber) {
      setCheckPassword((previousData) => {
        return { ...previousData, containNumber: true };
      });
    }
    if (data.length > 7) {
      setCheckPassword((previousData) => {
        return { ...previousData, moreThan7: true };
      });
    }
    if (!containsUpperCase) {
      setCheckPassword((previousData) => {
        return { ...previousData, containsUppercase: false };
      });
    }
    if (!containsNumber) {
      setCheckPassword((previousData) => {
        return { ...previousData, containNumber: false };
      });
    }
    if (data.length < 8) {
      setCheckPassword((previousData) => {
        return { ...previousData, moreThan7: false };
      });
    }
  };

  useEffect(() => {
    handleCheckPassword(data);
  }, [data]);

  return (
    <div className="l-4 mt-[8px]">
      <div className="flex items-center gap-[16px]">
        <div
          className={`w-[100px] border-[3px] border-solid ${checkPassword.moreThan7 || checkPassword.containNumber || checkPassword.containsUppercase ? "border-[#6DC347]" : "border-[#B6B6B6]"}`}
        ></div>
        <div
          className={`w-[100px] border-[3px] border-solid ${(checkPassword.moreThan7 && checkPassword.containNumber) || (checkPassword.containNumber && checkPassword.containsUppercase) || (checkPassword.moreThan7 && checkPassword.containsUppercase) ? "border-[#6DC347]" : "border-[#B6B6B6]"}`}
        ></div>
        <div
          className={`w-[100px] border-[3px] border-solid ${checkPassword.moreThan7 && checkPassword.containNumber && checkPassword.containsUppercase ? "border-[#6DC347]" : "border-[#B6B6B6]"}`}
        ></div>
      </div>
      <div>
        <p className="mt-[24px]">Weak password. Must contains;</p>
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
            style={{ color: checkPassword.moreThan7 ? "#6DC347" : "#B6B6B6" }}
          />
          <p>At least 8 characters</p>
        </div>
      </div>
    </div>
  );
};
export default PasswordCheck;
