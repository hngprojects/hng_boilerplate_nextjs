"use client";

import React, { useEffect, useState } from "react";

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
  value: propertyValue,
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
  const [inputValue, setInputValue] = useState(propertyValue || "");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (onChange) onChange(event);

    if (type === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsValid(emailPattern.test(value));
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(event);
  };

  const inputState =
    !isValid && inputValue ? "invalid" : inputValue ? "active" : "default";

  useEffect(() => {
    setInputValue(propertyValue || "");
  }, [propertyValue]);

  return (
    <Input
      label={label}
      name={name}
      labelClassName={labelClassName}
      placeholder={placeholder}
      type={type}
      value={inputValue}
      onChange={handleChange}
      onFocus={handleFocus}
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
