"use client";

import {
  Check,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Filter,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "~/components/ui/pagination";

import "./assets/style.css";

import { Input } from "~/components/common/input";
import SqueezeTable from "./component/squeezeTable";

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

const SqueezePage = () => {
  const [selectedFilter, setSelectedFilter] = useState<
    FilterDataProperties | undefined
  >();
  const router = useRouter();

  return (
    <>
      <section>
        <div className="">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="mr-auto">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-8 text-neutral-dark-2">
                Squeeze pages
              </h3>
              <h5 className="whitespace-nowrap text-base font-normal leading-4 text-neutral-dark-2">
                Showing records from the last...
              </h5>
            </div>

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

              <CustomButton size="lg" className="p-3" variant="primary">
                <div className="flex flex-row items-center gap-2">
                  <CirclePlus size={16} color="#FFFFFF" />
                  <div
                    className="text-base font-normal leading-5"
                    onClick={() => router.push("squeeze-pages/new-squeeze")}
                  >
                    Create new Squeeze
                  </div>
                </div>
              </CustomButton>
            </div>
          </div>

          <div className="squeeze-table mt-6 h-full w-full overflow-x-auto md:overflow-y-hidden">
            <SqueezeTable />
          </div>

          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <Button variant={"ghost"}>
                    <ChevronLeft /> Previous
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    className="bg-transparent shadow-none"
                    href="#"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive={true}>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    className="bg-transparent shadow-none"
                    href="#"
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <Button variant={"ghost"}>
                    Next <ChevronRight />
                  </Button>
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
    </>
  );
};

export default SqueezePage;
