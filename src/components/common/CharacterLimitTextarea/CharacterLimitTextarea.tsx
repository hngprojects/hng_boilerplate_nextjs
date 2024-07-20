"use client";

import React from "react";

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
          className="text-[#0F172A] mb-[3px] font-medium text-sm"
        >
          {label}
        </label>
        <textarea
          id={id}
          value={value}
          name={name}
          onChange={handleChange}
          aria-describedby="textarea-info textarea-error"
          className={`text-[#0F172A] font-normal text-sm resize-none rounded-md w-full max-w-[826px] focus:outline-none ${
            error ? "border-[#DC2626]" : "border-[#CBD5E1]"
          } bg-white box-border h-20 py-[8px] px-[12px] border border-solid ${
            error ? "focus:border-[#DC2626]" : "focus:border-[#0F172A]"
          }`}
        />
      </div>
      {error ? (
        <div
          id="textarea-error"
          className="mt-[6px] font-normal text-sm text-[#DC2626]"
        >
          {error}
        </div>
      ) : (
        <div
          id="textarea-info"
          className="mt-[6px] font-normal text-sm text-gray-500"
        >
          {charCount}/{maxLength} characters
        </div>
      )}
    </div>
  );
};

export default CharacterLimitTextarea;
