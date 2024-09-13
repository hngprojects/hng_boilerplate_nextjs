import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { UserData } from "../page";
import DeleteDialog from "./dialogue/delete-dialog";
import DeleteSuccessfulDialog from "./dialogue/delete-successful";

interface UserTableProperties {
  data: UserData[];
  onDelete: (userId: string) => void;
  isDeleting: boolean;
  isDialogOpen: boolean;
  isSuccessDeleteDialogOpen: boolean;
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSuccessDeleteDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserTableBody: React.FC<UserTableProperties> = ({
  data,
  onDelete,
  isDeleting,
  isDialogOpen,
  setIsDialogOpen,
  isSuccessDeleteDialogOpen,
  setIsSuccessDeleteDialogOpen,
}) => {
  const [userId, setUserId] = useState("");

  const handleOpenDialog = (id: string) => {
    setIsDialogOpen(true);
    setUserId(id);
  };
  const handleCloseDialog = () => setIsDialogOpen(false);
  const handleCloseDeleteSuccessDialog = () =>
    setIsSuccessDeleteDialogOpen(false);
  return (
    <>
      <tbody className="user-table z-10">
        {Array.isArray(data) &&
          data.map((_data, index) => {
            const {
              id,
              email,
              phone,
              is_active: status,
              name: fullName,
              created_at: date,
            } = _data;

            return (
              <tr key={index} className="w-full border-b border-b-border">
                <td className="whitespace-nowrap p-4 text-left text-base font-normal capitalize leading-4 text-neutral-dark-2">
                  <div className="flex flex-row items-center gap-2">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                      <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#e1e7ef]">
                        <h6 className="font-semibold text-neutral-dark-1">
                          {fullName?.charAt(0).toUpperCase() ??
                            email?.charAt(0).toUpperCase()}
                        </h6>
                      </div>
                    </div>
                    <div>
                      <Link
                        href={`/dashboard/admin/users/${id}`}
                        className="text-sm font-[500] leading-6 text-neutral-dark-2"
                      >
                        {fullName ?? email}
                      </Link>
                      <div className="text-xs font-normal lowercase leading-4 text-neutral-dark-1">
                        {email}
                      </div>
                    </div>
                  </div>
                </td>

                <td className="gap-2 whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
                  {phone ?? "Nil"}
                </td>

                <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
                  {formatMongoDate(date)}
                </td>

                <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
                  <div className="flex items-center gap-1">
                    {status && (
                      <>
                        <div className="h-3 w-3 rounded-full bg-success"></div>
                        <div className="text-sm">Active</div>
                      </>
                    )}

                    {!status && (
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
                      <DropdownMenuItem onClick={() => handleOpenDialog(id)}>
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            );
          })}
      </tbody>
      {isDialogOpen && (
        <DeleteDialog
          isDeleting={isDeleting}
          onClose={handleCloseDialog}
          onDelete={() => onDelete(userId)}
        />
      )}
      {isSuccessDeleteDialogOpen && (
        <DeleteSuccessfulDialog onClose={handleCloseDeleteSuccessDialog} />
      )}
    </>
  );
};

function formatMongoDate(mongoDateString: string): string {
  const date = new Date(mongoDateString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const formattedDate = `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;

  return formattedDate;
}

export default UserTableBody;
