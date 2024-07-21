import React, { useState } from "react";
import { Input } from "~/components/common/Input";

interface CustomInputProperties {
  label?: string;
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
  variant?: "primary" | "border" | "outline";
}

const CustomInput: React.FC<CustomInputProperties> = ({
  label,
  placeholder,
  type = "text",
  value: propValue,
  onChange,
  onFocus,
  isButtonVisible = false,
  buttonContent = "Button",
  onButtonClick,
  isDisabled = false,
  gap = "md",
  labelPosition = "top",
  variant = "primary",
}) => {
  const [inputValue, setInputValue] = useState(propValue || "");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (onChange) onChange(e);

  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onFocus) onFocus(e);
  };

  const inputState = !isValid && inputValue ? "invalid" : inputValue ? "active" : "default";

  return (
    <Input
      label={label}
      placeholder={placeholder}
      type={type}
      value={inputValue}
      onChange={handleChange}
      onFocus={handleFocus}
      variant={variant}
      state={inputState}
      className={`border-${variant} text-foreground focus:outline-none focus:ring-1 focus:ring-${variant}`}
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
