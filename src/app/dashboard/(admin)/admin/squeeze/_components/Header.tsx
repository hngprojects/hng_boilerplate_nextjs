import { CirclePlus, Filter, SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import { debounce } from "../utils/funcs";

export default function Header() {
  const [query, setQuery] = useState<string>("");
  const searchParameters = useSearchParams();
  const router = useRouter();

  const updateURL = useCallback(
    debounce((search: string) => {
      const current = new URLSearchParams(Object.fromEntries(searchParameters));
      current.set("search", search);
      const queryValues = current.toString();
      const query = queryValues ? `?${queryValues}` : "";
      router.push(`${window.location.pathname}${query}`);
    }, 500),
    [router, searchParameters],
  );

  useEffect(() => {
    updateURL(query);
  }, [query, updateURL]);

  useEffect(() => {
    if (!searchParameters.get("search") && query) setQuery("");
  }, [searchParameters]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <header className="mt-4 flex flex-wrap gap-4 text-neutral-dark-1 lg:justify-between">
      <div>
        <h2 className="text-2xl font-bold">Squeeze Pages</h2>
        <p>Showing records from the last ...</p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 rounded border border-border p-2">
          <SearchIcon
            data-testid="search"
            className="h-5 w-5 text-neutral-dark-1"
          />
          <input
            type="text"
            placeholder="Search"
            value={query}
            className="flex-grow bg-transparent text-neutral-dark-1 outline-none"
            onChange={handleChange}
          />
        </div>
        <button className="flex items-center gap-2 rounded border border-border px-2 py-2">
          <Filter />
          <span>Filter</span>
        </button>

        <Link href="/dashboard/admin/squeeze/new">
          <Button>
            <CirclePlus className="mr-2" />
            <span className="hidden md:block">Create</span> Squeeze Page
          </Button>
        </Link>
      </div>
    </header>
  );
}
