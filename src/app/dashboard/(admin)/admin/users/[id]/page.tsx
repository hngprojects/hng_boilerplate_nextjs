"use client";

import { Filter } from "lucide-react";
import { useState } from "react";

import CardComponent from "~/components/adminDashboard/CardComponent";
import { Button } from "~/components/common/common-button";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Rating from "./_components/UserDetailedRatings/user-ratings";
import ProductTable from "./_components/UserProductTable/product-table";
import { userDetailedCardData } from "./data/user-detailed-dummy-data";

const Page = () => {
  const [rating, setRating] = useState<number>(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <main className="px-1 py-3">
      <div className="mx-0 my-5 mb-10 flex flex-col gap-5">
        <div className="flex flex-row gap-5">
          <Avatar data-testid="avatar" className="flex h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-2xl">CN</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-medium lg:text-3xl">Gustavo Silas</h1>
            <p className="text-[#737876]">gustavosilas@gmail.com</p>
          </div>
        </div>
        <p>A Farmer that loves making fresh food produce from his farm</p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-row gap-5">
            <Rating
              initialRating={rating}
              onRatingChange={handleRatingChange}
            />
            <p>(50 Products)</p>
          </div>
          <div className="flex flex-row gap-4 pt-1 text-xs">
            <p className="text-[#444846]">Date Added</p>
            <p>08-01-23</p>
          </div>
        </div>
      </div>
      <div className="grid h-auto grid-cols-1 gap-4 md:grid-cols-3 lg:h-[134px]">
        {userDetailedCardData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            value={card.value.toLocaleString()}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>

      <div className="mt-6 flex w-full flex-row items-center justify-start gap-3 md:flex-row md:justify-between">
        <div className="flex w-full flex-col items-start justify-start gap-2.5 md:w-auto md:flex-row md:items-end">
          <div className="mr-auto">
            <h3 className="whitespace-nowrap font-semibold leading-8 text-neutral-dark-2 lg:text-2xl">
              Products
            </h3>
            <h5 className="whitespace-nowrap text-xs font-normal leading-4 text-neutral-dark-2">
              Manage & Track Users Products
            </h5>
          </div>
        </div>
        <div className="flex w-full flex-row items-center justify-end gap-[10px] md:w-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="inline-flex h-6 items-center justify-center rounded border border-slate-300 bg-transparent p-2.5 text-base text-neutral-600 shadow-none hover:border-primary hover:text-primary lg:h-10">
                <Filter />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="sr-only">Actions</DropdownMenuLabel>
              <DropdownMenuItem>Draft</DropdownMenuItem>
              <DropdownMenuItem>Active</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="mt-10">
        <ProductTable />
      </div>
    </main>
  );
};

export default Page;
