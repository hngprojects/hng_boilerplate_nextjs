// components/InputField.tsx
import React from 'react';

interface InputFieldProps {
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  id: string;
  name: string;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ value, type, onChange, placeholder, id, name, label }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 text-sm  mb-2">{label}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="shadow appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
  </div>
);

export default InputField;
