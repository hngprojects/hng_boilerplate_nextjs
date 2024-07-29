"use client";

import clsx from "clsx";
import { EllipsisVertical } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { TableCell, TableRow } from "~/components/ui/table";
import { Product } from "../../data/mock.products";
import DeleteDialog from "../ProductModal/delete-dialog";

const ProductRow = ({ product }: { product: Product }) => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);
  return (
    <>
      <TableRow className="h-[99px] w-full border-b border-slate-300 p-4 text-center text-sm font-medium text-black *:text-black last-of-type:border-b">
        <TableCell>
          <div className="justify-betweenitems-center flex items-center gap-3">
            <div className="aspect-square h-[37px] w-[37px] rounded bg-gradient-to-b from-[#f6c790] to-[#e67e1e] md:h-[47px] md:w-[47px] lg:h-[67px] lg:w-[67px]" />
            <span className="truncate text-left text-sm font-medium lg:text-right">
              {product.name}
            </span>
          </div>
        </TableCell>
        <TableCell>{product.price}</TableCell>
        <TableCell>{product.totalSold}</TableCell>
        <TableCell>
          <div
            className={clsx(
              product.status === "Active"
                ? "border-lime-500 text-lime-500"
                : "border-black text-black",
              "inline-flex h-[27px] w-[57px] items-center justify-center gap-2.5 rounded-[80px] border",
            )}
          >
            <span className="text-xs">{product.status}</span>
          </div>
        </TableCell>
        <TableCell className="text-right">{product.createdAt}</TableCell>
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="border border-transparent bg-transparent text-black hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                size={"icon"}
              >
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="sr-only">Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => {
                  router.push(`./products/edit/${product.id}`);
                }}
              >
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleOpenDialog}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
      {isDialogOpen && <DeleteDialog onClose={handleCloseDialog} />}
    </>
  );
};

export default ProductRow;
