"use client";

import {
  Check,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Filter,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
// import CardComponent from "~/components/common/DashboardCard/CardComponent";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import WaitList from "./_components/waitList";
import WaitListTable from "./_components/waitListTable";

// import { waitListCardData } from "./data/waitlist-dummy";

interface FilterDataProperties {
  title: string;
  selected: boolean;
}

const filterData: FilterDataProperties[] = [
  {
    title: "Offline",
    selected: false,
  },

  {
    title: "Online",
    selected: false,
  },
  {
    title: "Out of stock",
    selected: false,
  },
];

const WaitListPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<
    FilterDataProperties | undefined
  >();

  return (
    <>
      <section>
        <div className="mb-6 mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {/* {waitListCardData.map((card, index) => (
            <CardComponent
              key={index}
              title="Total waitlisted users"
              value={card.value}
              description={card.description}
              icon={card.icon}
            />
          ))} */}
        </div>

        <div className="mt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="mr-auto">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-8 text-neutral-dark-2">
                Wait list
              </h3>
              <h5 className="whitespace-nowrap text-base font-normal leading-4 text-neutral-dark-2">
                Manage your waitlisted users
              </h5>
            </div>

            <div className="flex flex-row items-center gap-3">
              <div className="flex h-10 items-center justify-between gap-2 rounded-[6px] border border-border bg-white px-3 text-sm font-normal placeholder:text-sm">
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

              <Link href="/dashboard/admin/waitlist-page/add-waitlist">
                <CustomButton size="lg" className="p-3" variant="primary">
                  <div className="flex flex-row items-center gap-2">
                    <CirclePlus size={16} color="#FFFFFF" />
                    <div className="text-base font-normal leading-5">
                      Add waitlist
                    </div>
                  </div>
                </CustomButton>
              </Link>
            </div>
          </div>
          <Tabs
            defaultValue="user"
            className="user-table mt-6 h-full w-full overflow-x-auto md:overflow-y-hidden"
          >
            <TabsList className="mb-2">
              <TabsTrigger value="waitlist">Waitlist pages</TabsTrigger>
              <TabsTrigger value="user">Users</TabsTrigger>
            </TabsList>

            <TabsContent value="waitlist">
              <WaitList />
            </TabsContent>
            <TabsContent value="user">
              <WaitListTable />
            </TabsContent>
          </Tabs>

          {/* <div className="user-table mt-6 h-full w-full overflow-x-auto md:overflow-y-hidden">
            <WaitListTable />
          </div> */}

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

export default WaitListPage;
