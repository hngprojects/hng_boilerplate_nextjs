// 'use client'; // Add this if you're using the App Router and this is a client component

import React from "react";
import { useCharacterLimit } from "./useCharacterLimit";

interface CharacterLimitTextareaProps {
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
}: CharacterLimitTextareaProps) => {
  const { charCount, error } = useCharacterLimit(value, maxLength, label);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="">
      <label
        htmlFor={id}
        className=""
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        name={name}
        onChange={handleChange}
        aria-describedby="textarea-info textarea-error"
        className={``}
      />
      {!error ? (
        <div
          id="textarea-info"
          className=""
        >
          {charCount}/{maxLength} characters
        </div>
      ) : (
        <div
          id="textarea-error"
          className=""
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default CharacterLimitTextarea;
