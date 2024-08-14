import axios from "axios";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
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

const UserTableBody = ({ data }: { data: UserData[] }) => {
  const [userId, setUserId] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenDialog = (id: string) => {
    setIsDialogOpen(true);
    setUserId(id);
  };
  const handleCloseDialog = () => setIsDialogOpen(false);

  const deleteHandler = async () => {
    try {
      const baseUrl = getApiUrl();
      const API_URL = `${baseUrl}/api/v1/users/${userId}`;
      setIsDeleting(true);
      await axios.delete(API_URL);
    } catch {
      setIsDeleting(false);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <tbody className="user-table z-10">
        {data.map((_data, index) => {
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
              <td
                className={`whitespace-nowrap p-4 text-left text-base font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                <div className="flex flex-row items-center gap-2">
                  <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                    <div className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#e1e7ef]">
                      <h6 className="font-semibold text-neutral-dark-1">
                        {fullName[0]}
                      </h6>
                    </div>
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
                {phone ?? "Nil"}
              </td>

              <td
                className={`whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                {formatMongoDate(date)}
              </td>

              <td
                className={`whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2`}
              >
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
          onDelete={deleteHandler}
        />
      )}
    </>
  );
};

function formatMongoDate(mongoDateString: string): string {
  // Parse the date string into a JavaScript Date object
  const date = new Date(mongoDateString);

  // Extract the day, month, and year
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are zero-based in JavaScript
  const year = date.getUTCFullYear();

  // Format the values into DD/MM/YYYY
  const formattedDate = `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;

  return formattedDate;
}

export default UserTableBody;
