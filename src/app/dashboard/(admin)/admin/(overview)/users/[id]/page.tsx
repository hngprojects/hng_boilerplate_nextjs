"use client";

import axios from "axios";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CardComponent from "~/components/common/DashboardCard/CardComponent";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { Button } from "~/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "~/components/ui/pagination";
import { useToast } from "~/components/ui/use-toast";
import { UserCardData } from "../data/user-dummy-data";
import UserProductsTable from "./component/userProductTable";

export interface UserDetailsProperties {
  email: string;
  id: string;
  is_active: boolean;
  first_name: string;
  last_name: string;
  products: [];
  created_at: string;
}

function formatMongoDate(mongoDateString: string): string {
  const date = new Date(mongoDateString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  const formattedDate = `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;

  return formattedDate;
}

const UserDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<UserDetailsProperties | null>();
  const [rating, setRating] = useState(0);
  const { toast } = useToast();
  const { data: session } = useSession();

  const [totalProducts, setTotalProducts] = useState<UserCardData>({
    title: "Total Products",
    value: 0,
    description: "+10% from last month",
    icon: "user",
  });

  const [totalOrders, setTotalOrders] = useState<UserCardData>({
    title: "Total Orders",
    value: 0,
    description: "+20% from last month",
    icon: "box",
  });

  const [totalSales, setTotalSales] = useState<UserCardData>({
    title: "Total Sales",
    value: 0,
    description: "+150% from last month",
    icon: "arrow-up",
  });

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const baseUrl = await getApiUrl();
        const API_URL = `${baseUrl}/api/v1/users/${id}`;
        const response = await axios.get(`${API_URL}`, {
          headers: {
            Authorization: `Bearer ${session?.access_token}`,
          },
        });
        const userDetails: UserDetailsProperties = response.data.user;
        setUserData(userDetails);
        setTotalSales((previous) => ({
          ...previous,
          value: 450_000,
        }));
        setTotalOrders((previous) => ({
          ...previous,
          value: 1000,
        }));
        setTotalProducts((previous) => ({
          ...previous,
          value: 4000,
        }));
      } catch (error) {
        toast({
          title: `Error fetching user ${id}`,
          description:
            error instanceof Error
              ? error.message
              : "An unknown error occurred",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    })();
  }, [id, session?.access_token, toast]);

  const handleRatingClick = (index: number) => {
    setRating(index);
  };

  if (loading) {
    <span className="mx-auto flex w-full items-center justify-center gap-x-2">
      <span className="animate-pulse">Fetching user data...</span>{" "}
      <LoadingSpinner className="size-4 animate-spin sm:size-5" />
    </span>;
  }

  return (
    <div className="">
      <div className="flex flex-row items-center gap-5">
        <div className="grid h-[60px] w-[60px] place-items-center rounded-full bg-[#e1e7ef]">
          <h6 className="text-3xl font-semibold text-neutral-dark-1">
            {userData?.first_name?.charAt(0).toUpperCase() ||
              userData?.email?.charAt(0).toUpperCase()}
          </h6>
        </div>
        <div>
          <h6 className="mb-2 text-3xl font-[500] leading-6 text-neutral-dark-2">
            {userData?.first_name || userData?.last_name
              ? userData.first_name + " " + userData.last_name
              : (userData?.email ?? (
                  <div className="h-6 w-full animate-pulse rounded-md bg-neutral-dark-2"></div>
                ))}
          </h6>

          <div className="text-base font-normal lowercase leading-4 text-[#CBD5E1]">
            {userData?.email || (
              <div className="h-3 w-full animate-pulse rounded-md bg-neutral-dark-2"></div>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-start">
        <div className="w-1/2 p-4">
          <div className="mt-3 text-lg text-black">
            A Farmer that loves making fresh food produce from his farm
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-base text-gray-700">3.3/5</div>
              <div className="mr-4 flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    onClick={() => handleRatingClick(index + 1)}
                    className={`h-6 w-6 cursor-pointer ${
                      index < rating
                        ? "stroke-current text-yellow-500"
                        : "text-black"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="mr-5 text-base text-black">(50 products)</div>
            <div className="flex items-center text-xs text-gray-600">
              <span className="mr-1">Date Added</span>
              {userData?.created_at ? (
                formatMongoDate(userData?.created_at as string)
              ) : (
                <div className="h-3 w-full animate-pulse rounded-md bg-neutral-dark-2"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[totalProducts, totalOrders, totalSales].map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            value={card.value}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>

      <div className="mt-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="mr-auto">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-8 text-neutral-dark-2">
              Products
            </h3>
            <h5 className="whitespace-nowrap text-base font-normal leading-4 text-neutral-dark-2">
              Manage & Track users products
            </h5>
          </div>
        </div>

        <div className="user-table mt-6 h-full w-full overflow-x-auto md:overflow-y-hidden">
          <UserProductsTable />
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
                <PaginationLink href="#" isActive={true}>
                  1
                </PaginationLink>
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
    </div>
  );
};

export default UserDetails;
