import { CirclePlus, Filter, SearchIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function Header() {
  return (
    <header className="mt-4 flex justify-between text-neutral-dark-1">
      <div>
        <h2 className="text-2xl font-bold">Squeeze Pages</h2>
        <p>Showing records from the last ...</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded border border-border p-2">
          <SearchIcon
            data-testid="search"
            className="h-5 w-5 text-neutral-dark-1"
          />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow bg-transparent text-neutral-dark-1 outline-none"
          />
        </div>
        <button className="flex items-center gap-2 rounded border border-border px-2 py-2">
          <Filter />
          <span>Filter</span>
        </button>

        <Link href="/dashboard/admin/squeeze/new">
          <Button>
            <CirclePlus className="mr-2" />
            Create Squeeze Page
          </Button>
        </Link>
      </div>
    </header>
  );
}
