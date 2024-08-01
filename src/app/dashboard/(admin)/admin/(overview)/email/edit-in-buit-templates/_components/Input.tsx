import React from "react";

interface InputProperties {
  label: string;
  value: string;
  onChange: (error: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

const Input: React.FC<InputProperties> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="mb-4">
      <label className="mb-2 block text-sm font-bold text-gray-700">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:shadow-outline focus:outline-none"
      />
    </div>
  );
};

export default Input;
