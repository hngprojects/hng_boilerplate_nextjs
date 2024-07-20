import React from "react";

interface CustomRadioButtonProperties {
  name: string;
  value: string;
  checked?: boolean;
}

const CustomRadioButton: React.FC<CustomRadioButtonProperties> = ({
  name,
  value,
  checked,
}) => {
  return (
    <label className="inline-flex items-center space-x-2">
      <input
        type="radio"
        className="radio-custom"
        name={name}
        value={value}
        checked={checked}
      />
      <style jsx>{`
        .radio-custom {
          appearance: none;
          background-color: #fff;
          border: 2px solid #ddd;
          border-radius: 50%;
          width: 1rem;
          height: 1rem;
          transition:
            background 0.2s,
            border-color 0.2s;
        }

        .radio-custom:checked {
          background-color: #f97316; /* Red color */
          border-color: #f97316; /* Red color */
        }
      `}</style>
    </label>
  );
};

export default CustomRadioButton;
