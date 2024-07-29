import { EllipsisVertical } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { userData } from "../data/user-dummy-data";
import DeleteDialog from "./dialogue/delete-dialog";

const UserTableBody = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <>
      <tbody className="user-table z-10">
        {userData.map((data, index) => {
          const { avatar, date, email, fullName, phone, status } = data;

          return (
            <tr key={index} className="w-full border-b border-b-border">
              <td
                className={`whitespace-nowrap p-4 text-left text-base font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src={avatar}
                      className="object-cover"
                      height={40}
                      width={40}
                      alt={fullName}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-[500] leading-6 text-neutral-dark-2">
                      {fullName}
                    </h3>
                    <div className="text-xs font-normal lowercase leading-4 text-neutral-dark-1">
                      {email}
                    </div>
                  </div>
                </div>
              </td>

              <td
                className={`gap-2 whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                {phone}
              </td>

              <td
                className={`whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                {date}
              </td>

              <td
                className={`whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                <div className="flex items-center gap-1">
                  {status.active && (
                    <>
                      <div className="h-3 w-3 rounded-full bg-success"></div>
                      <div className="text-sm">Active</div>
                    </>
                  )}

                  {!status.active && (
                    <>
                      <div className="h-3 w-3 rounded-full bg-error"></div>
                      <div className="text-sm">Inactive</div>
                    </>
                  )}
                </div>
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

export default UserTableBody;
