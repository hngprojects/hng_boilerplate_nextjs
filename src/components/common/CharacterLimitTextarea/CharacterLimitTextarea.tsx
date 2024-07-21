"use client";

import { useCharacterLimit } from "./useCharacterLimit";

interface CharacterLimitTextareaProperties {
  maxLength: number;
  value: string;
  id: string;
  name: string;
  label: string;
  onChange: (value: string) => void;
}

const CharacterLimitTextarea = ({
  maxLength,
  value,
  onChange,
  id,
  name,
  label,
}: CharacterLimitTextareaProperties) => {
  const { charCount, error } = useCharacterLimit(value, maxLength, label);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="">
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-[3px] text-sm font-medium text-[#0F172A]"
        >
          {label}
        </label>
        <textarea
          id={id}
          value={value}
          name={name}
          onChange={handleChange}
          aria-describedby="textarea-info textarea-error"
          className={`w-full max-w-[826px] resize-none rounded-md text-sm font-normal text-[#0F172A] focus:outline-none ${
            error ? "border-[#DC2626]" : "border-[#CBD5E1]"
          } box-border h-20 border border-solid bg-white px-[12px] py-[8px] ${
            error ? "focus:border-[#DC2626]" : "focus:border-[#0F172A]"
          }`}
        />
      </div>
      {error ? (
        <div
          id="textarea-error"
          className="mt-[6px] text-sm font-normal text-[#DC2626]"
        >
          {error}
        </div>
      ) : (
        <div
          id="textarea-info"
          className="mt-[6px] text-sm font-normal text-gray-500"
        >
          {charCount}/{maxLength} characters
        </div>
      )}
    </div>
  );
};

export default CharacterLimitTextarea;
