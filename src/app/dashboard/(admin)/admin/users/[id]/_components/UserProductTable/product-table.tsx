"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight, EllipsisVertical } from "lucide-react";
import React, { useState } from "react";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "~/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Product, products } from "../../data/mock.products";
import DeleteDialog from "../UserProductModal/delete-dialog";
import SuccessDialog from "../UserProductModal/success-dialog";

const ProductRow: React.FC<{ product: Product }> = ({ product }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const handleOpenDeleteDialog = () => setIsDeleteDialogOpen(true);
  const handleCloseDeleteDialog = () => setIsDeleteDialogOpen(false);

  const handleDeleteProduct = () => {
    setIsDeleteDialogOpen(false);
    setIsSuccessDialogOpen(true);
  };

  const handleCloseSuccessDialog = () => setIsSuccessDialogOpen(false);

  return (
    <>
      <TableRow className="h-[99px] w-full border-b border-slate-300 p-2 text-center text-sm font-medium text-black last-of-type:border-b md:p-4">
        <TableCell className="w-1/3">
          <div className="flex items-center gap-3">
            <div className="aspect-square h-[37px] w-[37px] rounded bg-gradient-to-b from-[#f6c790] to-[#e67e1e] md:h-[47px] md:w-[47px] lg:h-[67px] lg:w-[67px]" />
            <span className="truncate text-left text-sm font-medium">
              {product.name}
            </span>
          </div>
        </TableCell>
        <TableCell className="w-1/3">{product.price}</TableCell>
        <TableCell className="hidden w-1/3 md:table-cell">
          {product.totalSold}
        </TableCell>
        <TableCell className="hidden md:table-cell">
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
        <TableCell className="hidden text-right md:table-cell">
          {product.createdAt}
        </TableCell>
        <TableCell className="w-1/3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="border border-transparent bg-transparent text-black hover:border-primary hover:bg-transparent hover:text-primary focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                size="icon"
              >
                <EllipsisVertical />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="sr-only">Actions</DropdownMenuLabel>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleOpenDeleteDialog}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
      {isDeleteDialogOpen && (
        <DeleteDialog
          onClose={handleCloseDeleteDialog}
          onDelete={handleDeleteProduct}
        />
      )}
      {isSuccessDialogOpen && (
        <SuccessDialog onClose={handleCloseSuccessDialog} />
      )}
    </>
  );
};

const ProductTable: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Table className="w-full whitespace-nowrap">
        <TableCaption className="sr-only">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow className="border-none bg-primary/10 text-center text-base text-neutral-950 shadow-none hover:bg-primary/10">
            <TableHead className="w-1/3">Name</TableHead>
            <TableHead className="w-1/3">Price</TableHead>
            <TableHead className="hidden w-1/3 md:table-cell">
              Total Sold
            </TableHead>
            <TableHead className="hidden md:table-cell">Status</TableHead>
            <TableHead className="hidden md:table-cell">Created at</TableHead>
            <TableHead className="w-1/3">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <ProductRow key={product.name} product={product} />
          ))}
        </TableBody>
      </Table>
      <div className="mt-8 flex w-full items-center justify-center text-sm text-muted-foreground">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button variant="ghost">
                <ChevronLeft />{" "}
                <span className="hidden md:inline">Previous</span>
              </Button>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="bg-transparent shadow-none" href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="bg-transparent shadow-none" href="#">
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <Button variant="ghost">
                <span className="hidden md:inline">Next</span> <ChevronRight />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductTable;
