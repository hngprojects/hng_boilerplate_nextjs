import { useState } from "react";

export const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      // Parse stored JSON or return initialValue if parsing fails
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(
        `Error parsing JSON from localStorage for key "${key}":`,
        error,
      );
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(
        `Error setting JSON in localStorage for key "${key}":`,
        error,
      );
    }
  };

  return [storedValue, setValue];
};
