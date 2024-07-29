"use client";

import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";

import { Input } from "~/components/ui/input";

interface PasswordToggleProperties {
  password: string;
  onPasswordChange: (password: string) => void;
  name: string;
  placeholder: string;
  id: string;
}

const PasswordInput: React.FC<PasswordToggleProperties> = ({
  password,
  onPasswordChange,
  name,
  id,
  placeholder,
}) => {
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPasswordChange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="relative w-full">
        <button
          type="button"
          className="absolute inset-y-0 right-3 my-auto text-[#939393] active:text-[#434343]"
          onClick={() => setPasswordHidden(!isPasswordHidden)}
          aria-label={isPasswordHidden ? "Show password" : "Hide password"}
          title={isPasswordHidden ? "Show password" : "Hide password"}
        >
          {isPasswordHidden ? <EyeIcon /> : <EyeOff />}
        </button>

        <Input
          aria-label="Password"
          type={isPasswordHidden ? "password" : "text"}
          id={id}
          name={name}
          placeholder={placeholder}
          value={password}
          onChange={handleChange}
          className="h-[48px] w-full rounded-[8px] border border-[#B2B0B0] bg-transparent px-[16px] py-[12px] pr-[48px] text-[#939393] shadow-none outline-none placeholder:text-[14px] placeholder:text-[#939393] focus:border-primary focus-visible:ring-0 focus-visible:ring-transparent"
        />
      </div>
    </div>
  );
};

export { PasswordInput };
