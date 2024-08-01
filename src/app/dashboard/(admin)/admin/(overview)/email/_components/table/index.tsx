"use client";

import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

import DeleteDialog from "~/app/dashboard/(admin)/admin/(overview)/email/_components/modal";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const Table = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean | undefined>(false);

  const handleOpenDialog = () => setIsDialogOpen(true);

  const handleCloseDialog = () => setIsDialogOpen(false);
  return (
    <div className="mt-8">
      <div className="mt-4 flex w-full items-center justify-center bg-[#FFF7F2] p-4 text-base font-normal">
        <h4 className="w-[30%]">Name</h4>
        <h4 className="w-[30%] text-center">Type</h4>
        <h4 className="w-[30%] text-center">Created Date</h4>
        <h4 className="w-[30%] text-center">Status</h4>
        <h4 className="w-[10%] text-center">Action</h4>
      </div>

      <div className="mt-4 flex w-full items-center border-b-2 border-border p-4 text-sm font-medium">
        <h4 className="w-[30%]">The Lemonade blender</h4>
        <h4 className="w-[30%] text-center">Product</h4>
        <h4 className="w-[30%] text-center">01-01-24</h4>
        <h4 className="w-[30%] text-center">
          {/* <span className="w-fit rounded-xl bg-[#F814041F] text-[#F81404] px-8 py-1 text-center text-white">
            Offline
          </span> */}
          <span className="w-fit rounded-xl bg-[#6DC34733] px-8 py-1 text-center text-[#6DC347]">
            Online
          </span>
        </h4>
        <h4 className="flex w-[10%] justify-center text-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="bg-transparent text-neutral-dark-2 hover:bg-transparent focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                size={"icon"}
              >
                <EllipsisVertical size={16} color="#09090b" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="sr-only">Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleOpenDialog}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </h4>
      </div>
      {isDialogOpen && <DeleteDialog onClose={handleCloseDialog} />}
    </div>
  );
};

export default Table;
