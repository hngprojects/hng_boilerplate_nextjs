import clsx from "clsx";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Switch } from "~/components/ui/switch";
import { waitListData } from "../data/waitlist-dummy";
import DeleteDialog from "./waitListModal";

const tableHeadData: string[] = [
  "name",
  "email",
  "status",
  "activate",
  "created at",
  "action",
];
const WaitListPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <>
      <thead>
        <tr className="bg-[#FFF7F2]">
          {tableHeadData.map((data, index) => {
            return (
              <th
                key={index}
                className={`whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2 ${data === "name" ? "w-[300px]" : data === "action" ? "w-[86px]" : "w-[202px]"}`}
              >
                {data}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody className="user-table z-10">
        {waitListData.map((data, index) => {
          const { activate, createdDate, pageTitle, status, urlSlug } = data;

          return (
            <tr key={index} className="w-full border-b border-b-border">
              <td
                className={`whitespace-nowrap p-4 text-left text-base font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                <div className="flex flex-row items-center gap-2">
                  <Checkbox className="border-2 border-gray-300 data-[state=checked]:border-primary data-[state=checked]:bg-primary" />

                  <div>
                    <h3 className="text-sm font-[500] leading-6 text-neutral-dark-2">
                      {pageTitle}
                    </h3>
                    <div className="text-xs font-normal lowercase leading-4 text-neutral-dark-1"></div>
                  </div>
                </div>
              </td>

              <td>
                <div className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
                  {urlSlug}
                </div>
              </td>

              <td
                className={`whitespace-nowrap p-4 text-left text-sm font-normal leading-4 text-neutral-dark-2`}
              >
                <div
                  className={clsx(
                    status === "active"
                      ? "border-lime-500 text-lime-500"
                      : "border-black text-black",
                    "inline-flex h-[27px] w-[85px] items-center justify-center gap-2.5 rounded-[80px] border",
                  )}
                >
                  <span className="text-xs">{status}</span>
                </div>
              </td>

              <td
                className={`whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                <Switch
                  className="scale-[0.75] transform"
                  defaultChecked={activate}
                />
              </td>
              <td
                className={`gap-2 whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                {createdDate}
              </td>

              <td className="whitespace-nowrap p-4 text-center text-base font-normal capitalize leading-4 text-neutral-dark-2">
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
                    <DropdownMenuLabel className="sr-only">
                      Actions
                    </DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem onClick={handleOpenDialog}>
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          );
        })}
      </tbody>
      {isDialogOpen && <DeleteDialog onClose={handleCloseDialog} />}
    </>
  );
};

export default WaitListPage;
