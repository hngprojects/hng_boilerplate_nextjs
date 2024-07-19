// 'use client'; // Add this if using the App Router and this is a client component

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
    <div className="relative">
      
    </div>
  );
};

export default CharacterLimitTextarea;
