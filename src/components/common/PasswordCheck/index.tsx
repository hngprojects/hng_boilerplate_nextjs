"use client"
import React, { useState, useEffect } from "react";
import { CircleCheck } from "lucide-react";

interface PasswordCheckProps{
  data:string
}

interface PasswordCheck{
  moreThan7:boolean;
  containsUppercase:boolean;
  containNumber:boolean;
}

const PasswordCheck: React.FC<PasswordCheckProps> = ({ data }) => {

  const [checkPassword, setCheckPassword] = useState<PasswordCheck>({
    moreThan7: false,
    containsUppercase: false,
    containNumber: false,
  });

  const handlerContainsNumber = (str: string) => {
    const regex = /\d/;
    return regex.test(str);
  };

  const handleContainsUpperCase = (str: string) => {
    const regex = /[A-Z]/;
    return regex.test(str);
  };

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
    <div className="mt-[8px] ml-4">
      <div className="flex items-center gap-[16px]">
        <div className={`w-[100px] border-[3px] border-solid ${checkPassword.moreThan7 || checkPassword.containNumber || checkPassword.containsUppercase ? "border-[#6DC347]" : "border-[#B6B6B6]"}`}></div>
        <div className={`w-[100px] border-[3px] border-solid ${checkPassword.moreThan7 && checkPassword.containNumber || checkPassword.containNumber && checkPassword.containsUppercase || checkPassword.moreThan7 && checkPassword.containsUppercase ? "border-[#6DC347]" : "border-[#B6B6B6]"}`}></div>
        <div className={`w-[100px] border-[3px] border-solid ${checkPassword.moreThan7 && checkPassword.containNumber && checkPassword.containsUppercase ? "border-[#6DC347]" : "border-[#B6B6B6]"}`}></div>
      </div>
      <div>
        <p className="mt-[24px]">Weak password. Must contains;</p>
        <div className="mt-[12px] flex items-center gap-[8px]">
          {checkPassword.containsUppercase ? <CircleCheck data-testid="circle-check-icon" color="#6DC347" /> : <CircleCheck data-testid="circle-check-icon" />}
          <p className="">At least 1 uppercase</p>
        </div>
        <div className="flex items-center gap-[8px] mt-[8px]">
          {checkPassword.containNumber ? <CircleCheck data-testid="circle-check-icon" color="#6DC347" /> : <CircleCheck data-testid="circle-check-icon" />}
          <p>At least 1 number</p>
        </div>
        <div className="flex items-center gap-[8px] mt-[8px]">
          {checkPassword.moreThan7 ? <CircleCheck data-testid="circle-check-icon" color="#6DC347" /> : <CircleCheck data-testid="circle-check-icon" />}
          <p>At least 8 characters</p>
        </div>
      </div>
    </div>
  );
};
export default PasswordCheck;
