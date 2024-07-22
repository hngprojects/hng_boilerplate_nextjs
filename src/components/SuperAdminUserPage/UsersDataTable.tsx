"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";
import Image from "next/image";

import user2 from "./assets/user2.svg";
import { DataTable } from "./DataTable";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export type Payment = {
  id: string;
  name: string;
  phoneNumber: string;
  date: string;
  status: "Active" | "Inactive";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex flex-row gap-4">
          <Image
            width={400}
            height={300}
            className="h-10 w-10"
            src={user2}
            alt="user"
          />
          <p>{row.getValue("name")}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "date",
    header: "Date Created",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const data: Payment[] = [
  {
    id: "40a",
    name: "Afolabi Olanipekun",
    phoneNumber: "09123456789",
    date: "02/07/2024",
    status: "Active",
    email: "Afolabiolanipekun@gmail.com",
  },
  {
    id: "41b",
    name: "Adetunji Oluwaseun",
    phoneNumber: "09123456789",
    date: "02/07/2024",
    status: "Inactive",
    email: "Afolabiolanipekun@gmail.com",
  },
  {
    id: "42c",
    name: "Ifunanya Adedapo",
    phoneNumber: "09123456789",
    date: "02/07/2024",
    status: "Inactive",
    email: "Afolabiolanipekun@gmail.com",
  },
  {
    id: "43d",
    name: "Adetunji Oluwaseun",
    phoneNumber: "09123456789",
    date: "02/07/2024",
    status: "Inactive",
    email: "Afolabiolanipekun@gmail.com",
  },
  {
    id: "44e",
    name: "Moshood Adedayo",
    phoneNumber: "09123456789",
    date: "02/07/2024",
    status: "Active",
    email: "Afolabiolanipekun@gmail.com",
  },
];

export default function UsersDataTable() {
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
