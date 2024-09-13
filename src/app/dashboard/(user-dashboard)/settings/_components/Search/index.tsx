import { SearchIcon } from "lucide-react";

interface SearcInputProperties {
  onSearch: (data: string) => void;
  placeholder: string;
}
const SearchInput = ({ onSearch, placeholder }: SearcInputProperties) => {
  return (
    <div className="flex h-10 items-center justify-between gap-2 rounded-[6px] border border-border bg-white px-3 text-sm font-normal placeholder:text-sm lg:max-w-[324px]">
      <SearchIcon
        data-testid="search"
        className="h-4 w-4 text-neutral-dark-2"
      />
      <input
        className="placeholder:text-gray h-full w-full border-none text-neutral-dark-2 outline-none ring-0"
        placeholder={placeholder}
        data-testid="input"
        onChange={() => {
          onSearch("");
        }}
      />
    </div>
  );
};

export default SearchInput;
