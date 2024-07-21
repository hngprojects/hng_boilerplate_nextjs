/* eslint-disable react-hooks/exhaustive-deps */
import { AnimatePresence, motion } from "framer-motion";
import { Check, Filter, Grid, List, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { useProductsFilters } from "~/hooks/admin-product/use-products.-filters.persistence";
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
  const { filters, active_filter, updateFilter } = useProductsFilters();
  const { isOpenFilterModal, updateFilterModal } = useProductModal();
  const router = useRouter();
  const search = useSearchParams();
  const filter = search?.get("filter");
  const filterReference = useRef<HTMLDivElement>(null);
  const filterTriggerReference = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (filter) {
      updateFilter(filter);
    }
  }, [filter]);
  useEffect(() => {
    document.body.style.overflow = isOpenFilterModal ? "hidden" : "unset";
  }, [isOpenFilterModal]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterReference.current &&
        !(
          filterReference.current.contains(event.target as Node) ||
          filterTriggerReference.current?.contains(event.target as Node)
        )
      ) {
        updateFilterModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="flex w-full items-center justify-between">
      <div className="relative w-full max-w-[300px]">
        <Input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="search products..."
          className="w-full bg-transparent text-sm"
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
      <div className="relative flex items-center gap-x-4">
        <div className="flex items-center gap-x-2">
          <Button
            onClick={() => setView("grid")}
            disabled
            variant="outline"
            size="icon"
            className={cn(
              "flex items-center gap-x-2 bg-transparent text-sm hover:!bg-black hover:text-white disabled:!opacity-85",
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
        <Button
          onClick={() => updateFilterModal(!isOpenFilterModal)}
          ref={filterTriggerReference}
          variant="outline"
          className="relative flex items-center gap-x-2 bg-transparent text-sm"
        >
          <Filter />
          <span>Filter</span>
        </Button>

        <AnimatePresence>
          {isOpenFilterModal && (
            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -20, x: 20 }}
              ref={filterReference}
              className="absolute -bottom-[12rem] right-0 z-30 flex w-full max-w-[185px] flex-col gap-y-1 rounded-[6px] border border-gray-300 bg-white/80 shadow-[0px_1px_18px_0px_rgba(10,_57,_176,_0.12)] backdrop-blur-sm"
            >
              <span className="border-b border-gray-300 px-2 py-2 text-sm font-semibold text-neutral-dark-2 md:px-4">
                Filters
              </span>
              {filters.map((filter) => (
                <Button
                  variant="ghost"
                  key={filter.value}
                  className={cn(
                    "flex h-8 cursor-pointer items-center justify-start gap-x-2 px-2 py-2 text-sm md:px-4",
                    active_filter === filter.value
                      ? "text-black"
                      : "text-neutral-dark-1",
                  )}
                  onClick={() => {
                    router.push(`?filter=${filter.value}`);
                    updateFilter(filter.value);
                    updateFilterModal(false);
                  }}
                >
                  <Check
                    className={cn(
                      "opacity-0",
                      active_filter === filter.value && "opacity-100",
                    )}
                  />

                  <span>{filter.label}</span>
                </Button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        {/* <ProductListFilter
          filters={filters}
          handleFilterActiveState={handleFilterActiveState}
        /> */}
      </div>
    </div>
  );
};

export default ProductFilter;
