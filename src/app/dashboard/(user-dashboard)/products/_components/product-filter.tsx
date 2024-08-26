"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, Filter, Grid, List, Search } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import { Input } from "~/components/common/input";
import { Button } from "~/components/ui/button";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { cn } from "~/lib/utils";

type ProductFilterProperties = {
  view: "list" | "grid";
  setView: Dispatch<SetStateAction<"list" | "grid">>;
};

const ProductFilter = ({ view, setView }: ProductFilterProperties) => {
  const { isOpenFilterModal, updateFilterModal } = useProductModal();

  const [currentStat, setCurrentStat] = useState<string | null>();
  const [currentCat, setCurrentCat] = useState<string | null | number>();
  const [currentPrice, setCurrentPrice] = useState<string | null | number>();

  const filterReference = useRef<HTMLDivElement>(null);
  const filterTriggerReference = useRef<HTMLButtonElement>(null);
  const PriceFilter = [
    {
      value: 1,
      label: "Min-Max",
    },
    {
      value: 2,
      label: "Max-Min",
    },
  ];
  const StatusFilter = [
    {
      value: "in_stock",
      label: "In Stock",
    },
    {
      value: "out_of_stock",
      label: "Out Of Stock",
    },
  ];
  const CatFilter = [
    {
      value: 1,
      label: "Breakfast",
    },
    {
      value: 2,
      label: "Lunch",
    },
  ];

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

  const [priceFilterOpen, setPriceFilterOpen] = useState(false);
  const [categoryFilterOpen, setCategoryFilterOpen] = useState(false);
  const [statusFilterOpen, setStatusFilterOpen] = useState(false);

  return (
    <div className="flex w-full items-center justify-between gap-x-2 min-[500px]:gap-x-0">
      <div className="relative w-full max-w-[300px]">
        <Input
          type="text"
          // value={searchTerm}
          // onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="search products..."
          className="h-9 w-full bg-transparent px-5 text-sm min-[500px]:h-12"
        />
        <Button
          // onClick={() => setSearchTerm("")}
          variant="ghost"
          size="icon"
          className={cn(
            "absolute right-0 top-1/2 h-8 -translate-y-1/2 transition-opacity duration-300 min-[500px]:h-9",
          )}
        >
          <Search className="absolute right-2 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
        </Button>
      </div>
      <div className="relative flex items-center gap-x-2 min-[500px]:gap-x-4">
        <div className="flex items-center gap-x-2">
          <Button
            onClick={() => setView("grid")}
            disabled={view === "grid"}
            variant="outline"
            size="icon"
            className={cn(
              "flex items-center gap-x-2 bg-transparent p-2 text-sm hover:!bg-black hover:text-white disabled:!opacity-85 md:rounded-[6px]",
              view === "grid"
                ? "bg-black text-white transition-all duration-300 hover:!opacity-80 active:scale-90"
                : "",
            )}
          >
            <Grid className="size-5 min-[500px]:size-8" />
          </Button>
          <Button
            onClick={() => setView("list")}
            disabled={view === "list"}
            variant="outline"
            size="icon"
            className={cn(
              "flex items-center gap-x-2 p-2 text-sm hover:!bg-black hover:text-white disabled:!cursor-not-allowed disabled:!opacity-85 md:rounded-[6px]",
              view === "list"
                ? "bg-black text-white transition-all duration-300 hover:!opacity-80 active:scale-90"
                : "",
            )}
          >
            <List className="size-5 min-[500px]:size-8" />
          </Button>
        </div>
        <span className="h-[30px] w-[1px] flex-1 bg-[#E4E4E7] min-[500px]:h-[36px]" />
        <Button
          onClick={() =>
            setStatusFilterOpen((previous: boolean) => (previous = !previous))
          }
          ref={filterTriggerReference}
          variant="outline"
          className="relative grid h-[36px] !w-fit place-items-center bg-transparent px-2 text-sm min-[500px]:flex min-[500px]:w-[82px] min-[500px]:items-center min-[500px]:justify-between min-[500px]:gap-x-2 min-[500px]:text-base"
        >
          <Filter className="size-5" />
          <span className="hidden w-fit text-base min-[500px]:inline">
            Filter by Status
          </span>

          {statusFilterOpen ? (
            <motion.div className="absolute left-0 top-12 z-20 flex w-[160px] flex-col gap-2 rounded-md border-2 border-gray-100/50 bg-white p-2 shadow-md">
              <span className="border-b border-gray-300 px-2 py-2 text-left text-sm font-semibold text-neutral-dark-2 md:px-4">
                Filters
              </span>
              {StatusFilter.map((range: { value: string; label: string }) => (
                <span
                  key={range.value}
                  className="flex w-full justify-start gap-2 p-3 text-left text-sm hover:bg-gray-100"
                  onClick={() => setCurrentStat(range.value)}
                >
                  {currentStat === range.value ? <CheckIcon size={15} /> : ""}
                  {range.label}
                </span>
              ))}
            </motion.div>
          ) : (
            ""
          )}
        </Button>
        <Button
          onClick={() =>
            setCategoryFilterOpen((previous: boolean) => (previous = !previous))
          }
          ref={filterTriggerReference}
          variant="outline"
          className="relative grid h-[36px] !w-fit place-items-center bg-transparent px-2 text-sm min-[500px]:flex min-[500px]:w-[82px] min-[500px]:items-center min-[500px]:justify-between min-[500px]:gap-x-2 min-[500px]:text-base"
        >
          <Filter className="size-5" />
          <span className="hidden w-fit text-base min-[500px]:inline">
            Filter by Categories
          </span>

          {categoryFilterOpen ? (
            <motion.div className="absolute left-0 top-12 z-20 flex w-[150px] flex-col gap-2 rounded-md border-2 border-gray-100/50 bg-white p-2 shadow-md">
              <span className="border-b border-gray-300 px-2 py-2 text-left text-sm font-semibold text-neutral-dark-2 md:px-4">
                Filters
              </span>
              {CatFilter.map(
                (range: { value: number | string; label: string }) => (
                  <span
                    key={range.value}
                    className="flex w-full justify-start gap-2 p-3 text-left text-sm hover:bg-gray-100"
                    onClick={() => setCurrentCat(range.value)}
                  >
                    {currentCat === range.value ? <CheckIcon size={15} /> : ""}
                    {range.label}
                  </span>
                ),
              )}
            </motion.div>
          ) : (
            ""
          )}
        </Button>
        <Button
          onClick={() =>
            setPriceFilterOpen((previous: boolean) => (previous = !previous))
          }
          ref={filterTriggerReference}
          variant="outline"
          className="relative grid h-[36px] !w-fit place-items-center bg-transparent px-2 text-sm min-[500px]:flex min-[500px]:w-[82px] min-[500px]:items-center min-[500px]:justify-between min-[500px]:gap-x-2 min-[500px]:text-base"
        >
          <Filter className="size-5" />
          <span className="hidden w-fit text-base min-[500px]:inline">
            Filter by Price
          </span>

          {priceFilterOpen ? (
            <motion.div className="absolute left-0 top-12 z-20 flex w-[150px] flex-col gap-2 rounded-md border-2 border-gray-100/50 bg-white p-2 shadow-md">
              <span className="border-b border-gray-300 px-2 py-2 text-left text-sm font-semibold text-neutral-dark-2 md:px-4">
                Filters
              </span>
              {PriceFilter.map(
                (range: { value: number | string; label: string }) => (
                  <span
                    key={range.value}
                    className="flex w-full justify-start gap-2 p-3 text-left text-sm hover:bg-gray-100"
                    onClick={() => setCurrentPrice(range.value)}
                  >
                    {currentPrice === range.value ? (
                      <CheckIcon size={15} />
                    ) : (
                      ""
                    )}
                    {range.label}
                  </span>
                ),
              )}
            </motion.div>
          ) : (
            ""
          )}
        </Button>

        <AnimatePresence>
          {isOpenFilterModal && (
            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -20, x: 20 }}
              ref={filterReference}
              className="absolute -bottom-[12rem] right-0 z-30 flex w-[150px] flex-col gap-y-1 rounded-[6px] border border-gray-300 bg-white/80 shadow-[0px_1px_18px_0px_rgba(10,_57,_176,_0.12)] backdrop-blur-sm min-[500px]:-bottom-[14rem] sm:w-full sm:max-w-[185px]"
            >
              <span className="border-b border-gray-300 px-2 py-2 text-left text-sm font-semibold text-neutral-dark-2 md:px-4">
                Filters
              </span>
              {/* {filters.map((filter) => (
                <Button
                  variant="ghost"
                  key={filter.value}
                  className={cn(
                    "flex h-8 cursor-pointer items-center justify-start gap-x-2 px-2 py-1 text-xs min-[500px]:py-2 min-[500px]:text-sm md:px-4",
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
                      "size-5 opacity-0",
                      active_filter === filter.value && "opacity-100",
                    )}
                  />

                  <span>{filter.label}</span>
                </Button>
              ))} */}
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
