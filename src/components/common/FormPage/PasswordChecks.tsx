import React from "react";

import CheckmarkIcon from "./CheckmarkIcon";

interface PasswordChecksProperties {
  checks: {
    uppercase: boolean;
    number: boolean;
    passwordLength: boolean;
  };
}

const PasswordChecks: React.FC<PasswordChecksProperties> = ({ checks }) => {
  return (
    <>
      <div className="flex gap-x-4">
        <div className="h-1 w-24 overflow-hidden rounded-sm bg-[#e0e0e0]">
          <div
            className={`h-full rounded-sm transition-all duration-300 ${checks.uppercase ? "bg-green-600" : "bg-[#e0e0e0]"} ${checks.uppercase ? "w-full" : "w-0"}`}
          ></div>
        </div>
        <div className="h-1 w-24 overflow-hidden rounded-sm bg-[#e0e0e0]">
          <div
            className={`h-full rounded-sm transition-all duration-300 ${checks.number ? "bg-green-600" : "bg-[#e0e0e0]"} ${checks.number || checks.uppercase ? "w-full" : "w-0"}`}
          ></div>
        </div>
        <div className="h-1 w-24 overflow-hidden rounded-sm bg-[#e0e0e0]">
          <div
            className={`h-full rounded-sm transition-all duration-300 ${checks.passwordLength ? "bg-green-600" : "bg-[#e0e0e0]"} ${checks.passwordLength || checks.number || checks.uppercase ? "w-full" : "w-0"}`}
          ></div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-x-1 text-[#434343]">
          <CheckmarkIcon color={checks.uppercase ? "#6DC347" : "#DC2626"} />
          <span>At least 1 uppercase letter</span>
        </div>
        <div className="flex items-center gap-x-1 text-[#434343]">
          <CheckmarkIcon color={checks.number ? "#6DC347" : "#DC2626"} />
          <span>At least 1 number</span>
        </div>
        <div className="flex items-center gap-x-1 text-[#434343]">
          <CheckmarkIcon
            color={checks.passwordLength ? "#6DC347" : "#DC2626"}
          />
          <span>At least 8 characters</span>
        </div>
      </div>
    </>
  );
};

export default PasswordChecks;
