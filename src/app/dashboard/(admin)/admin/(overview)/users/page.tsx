"use client";

import {
  Check,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Filter,
} from "lucide-react";
import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import CardComponent from "~/components/common/DashboardCard/CardComponent";
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
import UserTable from "./component/userTable";
import { userCardData } from "./data/user-dummy-data";

import "./assets/style.css";

import AddUserModal from "./component/userModal";

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

const UserPage = () => {
  const [selectedFilter, setSelectedFilter] = useState<
    FilterDataProperties | undefined
  >();

  return (
    <>
      <section>
        <div className="mb-6 mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {userCardData.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              value={card.value.toLocaleString()}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>

        <div className="mt-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="mr-auto">
              <h3 className="whitespace-nowrap text-2xl font-semibold leading-8 text-neutral-dark-2">
                Users
              </h3>
              <h5 className="whitespace-nowrap text-base font-normal leading-4 text-neutral-dark-2">
                Manage Users & Track Activity
              </h5>
            </div>

            <div className="flex flex-row items-center gap-3">
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

              <AddUserModal>
                <CustomButton size="lg" className="p-3" variant="primary">
                  <div className="flex flex-row items-center gap-2">
                    <CirclePlus size={16} color="#FFFFFF" />
                    <div className="text-base font-normal leading-5">
                      Add new user
                    </div>
                  </div>
                </CustomButton>
              </AddUserModal>
            </div>
          </div>

          <div className="user-table mt-6 h-full w-full overflow-x-auto md:overflow-y-hidden">
            <UserTable />
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

export default UserPage;
