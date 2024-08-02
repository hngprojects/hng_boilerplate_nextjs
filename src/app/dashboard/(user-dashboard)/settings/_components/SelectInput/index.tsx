import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface SelectInputProperties {
  placeHolder: string;
  onSelect: (data: string) => void;
  label: string;
  value: string;
  options: string[];
}
const SelectInput = ({
  placeHolder,
  onSelect,
  label,
  value,
  options,
}: SelectInputProperties) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  return (
    <div className="relative mt-4">
      <ChevronDown className="absolute right-4 top-[38px]" />
      <label className="mb-2 flex border-0 text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        className="w-full cursor-pointer rounded-md border border-border px-3 py-2 placeholder:text-sm placeholder:text-slate-400"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        value={value}
        placeholder={placeHolder}
      />

      {isDropdownOpen && (
        <div className="absolute left-0 top-full z-10 mt-1 w-full rounded-md border border-border bg-white">
          {options.map((option) => (
            <div
              key={option}
              className="cursor-pointer px-3 py-2 hover:bg-gray-100"
              onClick={() => onSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
