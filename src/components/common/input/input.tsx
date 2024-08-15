import React from "react";

import { Input } from "~/components/common/input";
import { cn } from "~/lib/utils";

interface CustomInputProperties {
  label?: string;
  name?: string;
  labelClassName?: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  isButtonVisible?: boolean;
  buttonContent?: string;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  gap?: "sm" | "md" | "lg";
  labelPosition?: "top" | "side";
  variant?: "primary" | "border";
  className?: string;
}

const CustomInput: React.FC<CustomInputProperties> = ({
  label,
  name,
  labelClassName,
  placeholder,
  type = "text",
  value,
  onChange,
  onFocus,
  isButtonVisible = false,
  buttonContent = "Button",
  onButtonClick,
  isDisabled = false,
  gap = "md",
  labelPosition = "top",
  variant = "primary",
  className,
}) => {
  const isValid =
    type === "email" && value ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) : true;
  const inputState = isValid ? (value ? "active" : "default") : "invalid";

  return (
    <Input
      label={label}
      name={name}
      labelClassName={labelClassName}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      variant={variant}
      state={inputState}
      className={cn(
        `border-${variant} text-foreground focus:outline-none focus:ring-1 focus:ring-${variant}`,
        className,
      )}
      isButtonVisible={isButtonVisible}
      buttonContent={buttonContent}
      buttonDisabled={isDisabled}
      onButtonClick={onButtonClick}
      gap={gap}
      labelPosition={labelPosition}
    />
  );
};

export default CustomInput;
