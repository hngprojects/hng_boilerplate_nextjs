import { useEffect, useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      try {
        setStoredValue(JSON.parse(item));
      } catch {
        // console.error("Error parsing JSON from localStorage", error);
        // Optionally reset to initial value in case of parse error
        setStoredValue(initialValue);
      }
    }
  }, [key, initialValue]);

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
