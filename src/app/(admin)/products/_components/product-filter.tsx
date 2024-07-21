import { Filter, Grid, List, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";

type ProductFilterProperties = {
  searchTerm: string;
  view: "list" | "grid";
  setView: Dispatch<SetStateAction<"list" | "grid">>;
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

const ProductFilter = ({
  searchTerm,
  setSearchTerm,
  view,
  setView,
}: ProductFilterProperties) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="relative w-full max-w-[300px]">
        <Input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="search products..."
          className="w-full text-sm"
        />
        <Button
          onClick={() => setSearchTerm("")}
          variant="ghost"
          size="icon"
          className={cn(
            "absolute right-0 top-1/2 -translate-y-1/2 transition-opacity duration-300",
            searchTerm
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0",
          )}
        >
          <X />
        </Button>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <Button
            onClick={() => setView("grid")}
            disabled
            variant="outline"
            size="icon"
            className={cn(
              "flex items-center gap-x-2 text-sm hover:!bg-black hover:text-white disabled:!opacity-85",
              view === "grid"
                ? "bg-black text-white transition-all duration-300 hover:!opacity-80 active:scale-90"
                : "",
            )}
          >
            <Grid />
          </Button>
          <Button
            onClick={() => setView("list")}
            disabled={view === "list"}
            variant="outline"
            size="icon"
            className={cn(
              "flex items-center gap-x-2 text-sm hover:!bg-black hover:text-white disabled:!cursor-not-allowed disabled:!opacity-85",
              view === "list"
                ? "bg-black text-white transition-all duration-300 hover:!opacity-80 active:scale-90"
                : "",
            )}
          >
            <List />
          </Button>
        </div>
        <span className="h-[36px] w-[1px] flex-1 bg-[#E4E4E7]" />
        <Button variant="outline" className="flex items-center gap-x-2 text-sm">
          <Filter />
          <span>Filter</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;
