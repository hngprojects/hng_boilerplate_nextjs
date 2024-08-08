"use client";

import { CirclePlus, SearchIcon } from "lucide-react";

import { Button } from "~/components/common/common-button";
import AddFaqModal from "./_components/FaqModal/add-faq-modal";
import FaqTable from "./_components/FaqTable/faq-table";


const page = () => {

    // 
  return (
    <main className="px-1 py-3">

        <div className="flex w-full flex-col items-start justify-start gap-2.5 lg:w-fit">
          <h1 className="self-stretch text-[28px] font-semibold text-black">
            FAQ
          </h1>
          <p className="self-stretch text-xs font-normal leading-3 text-black">
            Manage your frequently asked questions efficiently.
          </p>
        </div>

      <div className="mt-6 flex w-full flex-col items-center justify-start gap-3 md:flex-row">
            <div className="flex h-10 w-[300px] items-center justify-between gap-2 rounded-[6px] border border-border bg-white px-3 text-sm font-normal placeholder:text-sm">
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

        <div className="ml-0 flex w-full items-center justify-start gap-[10px] md:justify-end lg:ml-auto lg:w-fit">
          <AddFaqModal>
            <Button className="inline-flex h-10 items-center justify-center bg-primary">
              <CirclePlus />
              Add FAQ
            </Button>
          </AddFaqModal>
        </div>
      </div>
      
      <div className="mt-10">
        <FaqTable />
      </div>
    </main>
  );
};

export default page;
