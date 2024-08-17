import { EllipsisVertical } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

const UserProductsTableBody = () => {
  return (
    <>
      <tbody className="user-table z-10">
        <tr className="w-full border-b border-b-border">
          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            <div className="flex flex-row items-center gap-6">
              <div
                className="h-16 w-16 overflow-hidden rounded-lg"
                style={{
                  background:
                    "linear-gradient(180deg, #F6C790 0%, #E77F1E 100%)",
                }}
              ></div>
              <span className="">Hypernova Headphones</span>
            </div>
          </td>

          <td className="gap-2 whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            $129.99
          </td>

          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            25
          </td>

          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            <div className="border-#525252 flex w-fit items-center gap-1 rounded-2xl border px-4 py-2">
              Draft
            </div>
          </td>

          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            2024-07-16 10:36AM
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
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </td>
        </tr>
        <tr className="w-full border-b border-b-border">
          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            <div className="flex flex-row items-center gap-6">
              <div
                className="h-16 w-16 overflow-hidden rounded-lg"
                style={{
                  background:
                    "linear-gradient(180deg, #F6C790 0%, #E77F1E 100%)",
                }}
              ></div>
              <span className="">Hypernova Headphones</span>
            </div>
          </td>

          <td className="gap-2 whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            $129.99
          </td>

          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            25
          </td>

          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            <div className="border-#525252 flex w-fit items-center gap-1 rounded-2xl border px-4 py-2">
              Draft
            </div>
          </td>

          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            2024-07-16 10:36AM
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
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </td>
        </tr>
        <tr className="w-full border-b border-b-border">
          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            <div className="flex flex-row items-center gap-6">
              <div
                className="h-16 w-16 overflow-hidden rounded-lg"
                style={{
                  background:
                    "linear-gradient(180deg, #F6C790 0%, #E77F1E 100%)",
                }}
              ></div>
              <span className="">Hypernova Headphones</span>
            </div>
          </td>

          <td className="gap-2 whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            $129.99
          </td>

          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            25
          </td>

          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            <div className="border-#525252 flex w-fit items-center gap-1 rounded-2xl border px-4 py-2">
              Draft
            </div>
          </td>

          <td className="whitespace-nowrap p-4 text-left text-sm font-normal capitalize leading-4 text-neutral-dark-2">
            2024-07-16 10:36AM
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
                <DropdownMenuItem
                // onClick={() => handleOpenDialog(id)}
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default UserProductsTableBody;
