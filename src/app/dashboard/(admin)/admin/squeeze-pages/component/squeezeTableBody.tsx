import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { squeezeData } from "../data/squeeze-dummy-data";
import DeleteDialog from "./dialogue/delete-dialog";

const SqueezeTableBody = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <>
      <tbody className="squeeze-table z-10">
        {squeezeData.map((data, index) => {
          const { fullName, phone, status, date } = data;

          return (
            <tr key={index} className="w-full border-b border-b-border">
              <td
                className={`whitespace-nowrap p-4 text-left text-base font-normal capitalize leading-4 text-neutral-dark-2`}
              >
                <div className="flex flex-row items-center gap-2">
                  <div>
                    <h3 className="text-sm font-[500] leading-6 text-neutral-dark-2">
                      {fullName}
                    </h3>
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
                      {/* <div className="h-3 w-3 rounded-full bg-success"></div> */}
                      <div className="rounded-3xl bg-[#6dc34733] px-3 py-1 text-sm">
                        Online
                      </div>
                    </>
                  )}

                  {!status.active && (
                    <>
                      {/* <div className="h-3 w-3 rounded-full bg-error"></div> */}
                      <div className="rounded-3xl bg-[#f814041f] px-3 py-1 text-sm">
                        Ofline
                      </div>
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

export default SqueezeTableBody;
