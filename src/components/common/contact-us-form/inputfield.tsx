import React from "react";

interface InputFieldProperties {
  value: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id: string;
  name: string;
  label: string;
}

const InputField: React.FC<InputFieldProperties> = ({
  value,
  type,
  onChange,
  placeholder,
  id,
  name,
  label,
}) => (
  <div className="mb-2">
    <label htmlFor={id} className="mb-2 block text-sm">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full appearance-none rounded-[8px] border px-3 py-4 leading-tight focus:shadow-outline focus:outline-none"
    />
  </div>
);

export default InputField;
