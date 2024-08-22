"use client";

import { Check, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

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
import { getSession } from "next-auth/react";

import { getApiUrl } from "~/actions/getApiUrl";
import { useToast } from "~/components/ui/use-toast";

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
  phone: string | null;
  is_active: boolean;
  signup_type: string;
  created_at: string;
  deleted_at: string | null;
  email_verified_at: string | null;
  is_verified: boolean;
  social_id: string | null;
  updated_at: string;
}

const UserPage = () => {
  const [page, setPage] = useState(1);

  const [data, setData] = useState<UserData[]>([]);

  const [filterData, setFilterData] = useState<UserData[]>([]);

  const [isDeleting, setIsDeleting] = useState(false);

  const [loading, setLoading] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccessDeleteDialogOpen, setIsSuccessDeleteDialogOpen] =
    useState(false);
  const { toast } = useToast();

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

  const deletedUser = 0;

  const filterActionsHandler = (title: string) => {
    if (title === "Active") {
      const _data = data?.filter((item) => item.is_active);
      setFilterData(_data);
    } else {
      const _data = data?.filter((item) => !item.is_active);
      setFilterData(_data);
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const session = await getSession();
      setLoading(true);
      const baseUrl = await getApiUrl();
      const API_URL = `${baseUrl}/api/v1/users`;
      const response = await axios.get(`${API_URL}?page=${page}`, {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });
      setIsNextPageActive(
        response.data.data.pagination.current_page ===
          response.data.data.pagination.last_page
          ? false
          : true,
      );
      setIsPreviousPageActive(
        response.data.data.pagination.current_page === 1 ? false : true,
      );
      const usersData: UserData[] = response.data.data?.users || [];
      setData(usersData);
      setFilterData(usersData);
      const totalUser = response.data.data.pagination.total || 0;

      setTotalUserOverview((previous) => ({
        ...previous,
        value: totalUser,
      }));

      setdeletedUserOverview((previous) => ({
        ...previous,
        value: deletedUser,
      }));

      setActiveUserOverview((previous) => {
        let count = 0;
        for (const user of usersData) {
          if (user.is_active) {
            count += 1;
          }
        }

        return {
          ...previous,
          value: count,
        };
      });
    } catch (error) {
      setLoading(false);
      toast({
        title: `Error fetching users`,
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [deletedUser, page, toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const deleteUser = async (userId: string) => {
    try {
      const session = await getSession();
      const baseUrl = await getApiUrl();
      const API_URL = `${baseUrl}/api/v1/users/${userId}`;
      setIsDeleting(true);
      await axios.delete(API_URL, {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      });

      // Update data without calling fetchData
      const updatedUser = data.filter((user) => user.id !== userId);
      setData(updatedUser);
      setFilterData(updatedUser);

      // Update overviews
      setdeletedUserOverview((previous) => ({
        ...previous,
        value: previous.value + 1, // Increment the count
      }));
      const activeCount = updatedUser.filter((user) => user.is_active).length;
      setActiveUserOverview((previous) => ({
        ...previous,
        value: activeCount,
      }));
      setTotalUserOverview((previous) => ({
        ...previous,
        value: previous.value - 1,
      }));
      setIsSuccessDeleteDialogOpen(true);
    } catch (error) {
      toast({
        title: `Error deleting user`,
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
      setIsDialogOpen(false);
    }
  };

  return (
    <>
      <section>
        <div className="mb-6 mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[totalUserOverview, activeUserOverview, deletedUserOverview].map(
            (card, index) => (
              <CardComponent
                key={index}
                title={card.title}
                value={card.value}
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
            <UserTable
              data={filterData}
              onDelete={deleteUser}
              isDeleting={isDeleting}
              loading={loading}
              isDialogOpen={isDialogOpen}
              setIsDialogOpen={setIsDialogOpen}
              isSuccessDeleteDialogOpen={isSuccessDeleteDialogOpen}
              setIsSuccessDeleteDialogOpen={setIsSuccessDeleteDialogOpen}
            />
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
