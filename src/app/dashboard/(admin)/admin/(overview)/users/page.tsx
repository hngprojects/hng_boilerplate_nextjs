"use client";

import { Check, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useEffect, useState } from "react";

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
  PaginationItem,
  PaginationLink,
} from "~/components/ui/pagination";
import UserTable from "./component/userTable";
import { UserCardData } from "./data/user-dummy-data";

import "./assets/style.css";

import axios from "axios";

import { getApiUrl } from "~/actions/getApiUrl";

interface FilterDataProperties {
  title: string;
  selected: boolean;
}

const filterActions: FilterDataProperties[] = [
  {
    title: "Active",
    selected: false,
  },

  {
    title: "Inactive",
    selected: false,
  },
];

export interface UserData {
  id: string;
  email: string;
  name: string;
  role: string;
  phone?: string | number;
  is_active: boolean;
  signup_type: string;
  created_at: string;
}

const UserPage = () => {
  const [page, setPage] = useState(1);

  const [data, setData] = useState<UserData[]>([]);

  const [filterData, setFilterData] = useState<UserData[]>([]);

  const [totalUserOverview, setTotalUserOverview] = useState<UserCardData>({
    title: "Total Users",
    value: 0,
    description: "+10% from last month",
    icon: "user",
  });

  const [activeUserOverview, setActiveUserOverview] = useState<UserCardData>({
    title: "Active Users",
    value: 0,
    description: "+20% from last month",
    icon: "box",
  });

  const [deletedUserOverview, setdeletedUserOverview] = useState<UserCardData>({
    title: "Deleted Users",
    value: 0,
    description: "+150% from last month",
    icon: "arrow-up",
  });

  const [isNextPageActive, setIsNextPageActive] = useState(false);
  const [isPreviousPageActive, setIsPreviousPageActive] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState<
    FilterDataProperties | undefined
  >();

  const filterActionsHandler = (title: string) => {
    if (title === "Active") {
      const _data = data?.filter((item) => item.is_active);
      setFilterData(_data);
    } else {
      const _data = data?.filter((item) => !item.is_active);
      setFilterData(_data);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const baseUrl = await getApiUrl();
        const API_URL = `${baseUrl}/api/v1/users`;
        const response = await axios.get(`${API_URL}?page=${page}`);

        setIsNextPageActive(response.data?.next_page_url ? true : false);

        setIsPreviousPageActive(response.data?.prev_page_url ? true : false);

        setData(response.data.data);
        setFilterData(response.data.data);
        setTotalUserOverview((previous) => ({
          ...previous,
          value: response.data.total,
        }));

        const userData: UserData[] = response.data.data;

        setdeletedUserOverview((previous) => ({
          ...previous,
          value: response.data.total,
        }));

        setActiveUserOverview((previous) => {
          let count = 0;
          for (const user of userData) {
            if (user.is_active) {
              count += 1;
            }
          }

          return {
            ...previous,
            value: count,
          };
        });
      } catch {
        // console.log(error);
      }
    })();
  }, [page]);

  return (
    <>
      <section>
        <div className="mb-6 mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[totalUserOverview, activeUserOverview, deletedUserOverview].map(
            (card, index) => (
              <CardComponent
                key={index}
                title={card.title}
                value={card.value.toLocaleString()}
                description={card.description}
                icon={card.icon}
              />
            ),
          )}
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
                  {filterActions.map((data, index) => {
                    const { selected, title } = data;

                    selectedFilter?.title === title
                      ? (data.selected = true)
                      : (data.selected = false);

                    return (
                      <DropdownMenuItem
                        onClick={() => {
                          filterActionsHandler(data.title);
                          setSelectedFilter(filterActions[index]);
                        }}
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
            </div>
          </div>

          <div className="user-table mt-6 h-full w-full overflow-x-auto md:overflow-y-hidden">
            <UserTable data={filterData} />
          </div>

          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem
                  onClick={() => {
                    if (isPreviousPageActive) {
                      setPage((previous) => previous - 1);
                    }
                  }}
                >
                  <Button variant={"ghost"}>
                    <ChevronLeft /> Previous
                  </Button>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive={true}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem
                  onClick={() => {
                    if (isNextPageActive) {
                      setPage((previous) => previous + 1);
                    }
                  }}
                >
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
