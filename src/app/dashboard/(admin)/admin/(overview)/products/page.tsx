"use client";

import { CirclePlus, Filter } from "lucide-react";

import { cardData } from "~/components/adminDashboard/cardData";
import { Button } from "~/components/common/common-button";
import CardComponent from "~/components/common/DashboardCard/CardComponent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import AddProductModal from "./_components/ProductModal/add-product-modal";
import ProductTable from "./_components/ProductTable/product-table";

const page = () => {
  return (
    <main className="px-1 py-3">
      <div className="grid h-auto grid-cols-1 gap-4 md:grid-cols-3 lg:h-[134px]">
        {[0, 1, 2].map((_, index) => (
          <CardComponent
            key={index}
            title={cardData[0].title}
            value={cardData[0].value}
            description={cardData[0].description}
            icon={cardData[0].icon}
          />
        ))}
      </div>

      <div className="mt-6 flex w-full flex-col items-center justify-start gap-3 md:flex-row">
        <div className="flex w-full flex-col items-start justify-start gap-2.5 lg:w-fit">
          <h1 className="self-stretch text-[28px] font-semibold text-black">
            Products
          </h1>
          <p className="self-stretch text-xs font-normal leading-3 text-black">
            Manage your products and view their sales performance.
          </p>
        </div>
        <div className="ml-0 flex w-full items-center justify-start gap-[10px] md:justify-end lg:ml-auto lg:w-fit">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="inline-flex h-10 items-center justify-center rounded border border-slate-300 bg-transparent p-2.5 text-base text-neutral-600 shadow-none hover:border-primary hover:text-primary">
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
          <AddProductModal>
            <Button className="inline-flex h-10 items-center justify-center bg-primary">
              <CirclePlus />
              Add Product
            </Button>
          </AddProductModal>
        </div>
      </div>
      <div className="mt-10">
        <ProductTable />
      </div>
    </main>
  );
};

export default page;
