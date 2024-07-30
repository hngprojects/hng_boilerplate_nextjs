"use client";

import {
  Check,
  // ChevronLeft,
  // ChevronRight,
  CirclePlus,
  Filter,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

// import { Button } from "~/components/ui/button";
import { Button } from "~/components/common/common-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Input } from "~/components/ui/input";

// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
// } from "~/components/ui/pagination";

interface FilterDataProperties {
  title: string;
  selected: boolean;
}

const filterData: FilterDataProperties[] = [
  {
    title: "Active",
    selected: false,
  },

  {
    title: "Inactive",
    selected: false,
  },
];

const Menu = () => {
  const [selectedFilter, setSelectedFilter] = useState<
    FilterDataProperties | undefined
  >();

  const router = useRouter();

  return (
    <section className="float-end mt-8 pr-6">
      <div className="">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="flex flex-row items-center gap-3">
            <div>
              <Input
                id="squeezeEmail"
                type="email"
                placeholder="Search option..."
                className="col-span-3 inline-flex h-11 items-start justify-start gap-2"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="lg"
                  className="bg-white px-3 py-2 duration-300 ease-in"
                  variant="outline"
                >
                  <div className="flex flex-row items-center gap-2">
                    <Filter size={16} color="#525252" />
                    <div className="text-base font-normal leading-5">
                      Filter
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {filterData.map((data, index) => {
                  const { selected, title } = data;

                  selectedFilter?.title === title
                    ? (data.selected = true)
                    : (data.selected = false);

                  return (
                    <DropdownMenuItem
                      onClick={() => setSelectedFilter(filterData[index])}
                      key={index}
                    >
                      <div className="flex w-full items-center">
                        <div className="mr-auto">{title}</div>

                        <Check
                          size={16}
                          color="#09090b"
                          className={`${selected ? "opacity-100" : "opacity-0"}`}
                        />
                      </div>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
            <div>
              <Button
                onClick={() => router.push("./email/new-template")}
                className="inline-flex h-10 items-center justify-center bg-primary"
              >
                <CirclePlus />
                Create new Template
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
