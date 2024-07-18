"use client";

import { useState } from "react";

// import { Input } from "~/components/ui/input";
import { Input } from "../../ui/input";

interface PasswordToggleProps {
  password: string;
  onPasswordChange: (password: string) => void;
  name: string;
  placeholder: string;
  id: string;
}

const PasswordInput: React.FC<PasswordToggleProps> = ({
  password,
  onPasswordChange,
  name,
  id,
  placeholder,
}) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPasswordChange(e.target.value);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="relative w-full">
        <button
          type="button"
          className="text-[#939393] active:text-[#434343] absolute right-3 inset-y-0 my-auto"
          onClick={() => setPasswordHidden(!isPasswordHidden)}
          aria-label={isPasswordHidden ? "Show password" : "Hide password"}
          title={isPasswordHidden ? "Show password" : "Hide password"}
        >
          {isPasswordHidden ? (
            <svg
              className="size-[24px]"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ) : (
            <svg
              className="size-[24px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.88013 9.88C9.58538 10.1547 9.34897 10.4859 9.185 10.8539C9.02104 11.2218 8.93287 11.6191 8.92576 12.0219C8.91865 12.4247 8.99275 12.8248 9.14364 13.1984C9.29452 13.5719 9.5191 13.9113 9.80397 14.1962C10.0888 14.481 10.4282 14.7056 10.8017 14.8565C11.1753 15.0074 11.5754 15.0815 11.9782 15.0744C12.381 15.0673 12.7783 14.9791 13.1463 14.8151C13.5143 14.6512 13.8455 14.4148 14.1201 14.12"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.61 6.60999C4.62125 7.96461 3.02987 9.82524 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 2L22 22"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <Input
          aria-label="Password"
          type={isPasswordHidden ? "password" : "text"}
          id={id}
          name={name}
          placeholder={placeholder}
          value={password}
          onChange={handleChange}
          className="w-full px-[16px] pr-[48px] py-[12px] h-[48px] text-[#939393] placeholder:text-[14px] placeholder:text-[#939393] bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-transparent shadow-none border border-[#B2B0B0] focus:border-app-theme rounded-[8px]"
        />
      </div>
    </div>
  );
};

export { PasswordInput };
