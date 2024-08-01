import { CirclePlus, Filter, Search } from "lucide-react";
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
        <div className="flex items-center rounded border border-gray-300 p-2">
          <Search className="mr-2 h-5 w-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="flex-grow bg-transparent text-gray-700 outline-none"
          />
        </div>
        <button className="flex items-center gap-2 rounded border px-2 py-2">
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
