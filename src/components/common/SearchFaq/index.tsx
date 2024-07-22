"use client";

import { ChangeEvent, useState } from "react";

export type SearchProperties = {
  onSearch: (value: string) => void;
};
const Search = (properties: SearchProperties) => {
  const { onSearch } = properties;
  const [value, setValue] = useState("What do you want to know about?");
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(value);
    }
  };
  return (
    <div className="relative m-auto w-[470px] max-sm:w-full">
      <input
        type="search"
        name="search"
        placeholder={value}
        style={{ borderColor: "#CBD5E1" }}
        className="h-12 w-full rounded-full border px-5 pl-12 text-sm outline-none"
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={() => onSearch(value)}
        type="submit"
        className="absolute left-4 top-1 mr-4 mt-3"
      >
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M13.53 14.47a8 8 0 111.414-1.414l3.96 3.96a1 1 0 01-1.414 1.414l-3.96-3.96zM8 14a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
