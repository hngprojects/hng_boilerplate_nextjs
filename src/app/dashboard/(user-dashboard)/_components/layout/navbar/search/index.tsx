import { SearchIcon } from "lucide-react";

export function Search() {
  return (
    <>
      <SearchIcon data-testid="search" className="size-6 sm:hidden" />
      <div className="flex h-10 items-center justify-between gap-2 rounded-[6px] border border-border bg-white px-3 text-sm font-normal placeholder:text-sm max-sm:hidden">
        <SearchIcon
          data-testid="search"
          className="h-4 w-4 text-neutral-dark-2"
        />
        <input
          className="h-full w-full border-none text-neutral-dark-2 outline-none ring-0 placeholder:text-neutral-dark-1"
          placeholder="Search option..."
          data-testid="input"
        />
      </div>
    </>
  );
}
