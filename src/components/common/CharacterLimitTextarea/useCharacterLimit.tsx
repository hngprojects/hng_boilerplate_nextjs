"use client";

import { useEffect, useState } from "react";

export function useCharacterLimit(
  value: string,
  maxLength: number,
  label: string,
) {
  const [charCount, setCharCount] = useState(value.length);
  const [error, setError] = useState("");

  useEffect(() => {
    setCharCount(value.length);
    if (value.length > maxLength) {
      setError(
        `Your ${label.toLowerCase()} cannot exceed ${maxLength} characters`,
      );
    } else {
      setError("");
    }
  }, [value, maxLength, label]);

  return { charCount, error };
}
