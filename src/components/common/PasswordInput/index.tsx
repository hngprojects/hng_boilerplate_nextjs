"use client";

import { useState } from "react";



import { Input } from "~/components/ui/input";
import { EyeClose, EyeOpen } from "../../../../public/svg";

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
            <EyeOpen/>
          ) : (
            <EyeClose/>
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
          className="w-full px-[16px] pr-[48px] py-[12px] h-[48px] text-[#939393] placeholder:text-[14px] placeholder:text-[#939393] bg-transparent outline-none focus-visible:ring-0 focus-visible:ring-transparent shadow-none border border-[#B2B0B0] focus:border-primary rounded-[8px]"
        />
      </div>
    </div>
  );
};

export { PasswordInput };
