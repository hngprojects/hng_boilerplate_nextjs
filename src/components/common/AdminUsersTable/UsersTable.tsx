import { EllipsisVertical, FilterIcon, PlusCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import defaultImage  from './user-profile-icon-vector-avatar-.webp'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Button } from "../Button";

type TableProperties = {
  addNewUser: () => void;
  deleteUser: (id: number) => void;
  editUser: (id: number) => void;
  users: {
    id: number;
    name: string;
    phoneNumber: string;
    email: string;
    status: string;
    dateCreated: string;
    image?: string;
  }[];
};

type FilterStatus = "active" | "inactive" | "all";

const UserListTable = (properties: TableProperties) => {
  const { addNewUser, deleteUser, editUser } = properties;
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const filteredUsers = properties.users.filter(
    (user) => filterStatus === "all" || user.status === filterStatus,
  );

  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / pageSize);
  const displayedUsers = filteredUsers.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 3;

    if (showEllipsis) {
      pages.push(1);
      if (currentPage > 4) {
        pages.push("...");
      }

      const firstPage = Math.max(2, currentPage - 2);
      const lastPage = Math.min(totalPages - 1, currentPage + 2);

      for (let index = firstPage; index <= lastPage; index++) {
        pages.push(index);
      }

      if (currentPage < totalPages - 3) {
        pages.push("...");
      }
      pages.push(totalPages);
    } else {
      for (let index = 1; index <= totalPages; index++) {
        pages.push(index);
      }
    }

    return pages;
  };

  return (
    <div className="bg-white p-4">
      <div
        className="align-center m-auto mb-8 flex justify-between bg-white py-1"
        style={{ width: "96%" }}
      >
        <div>
          <h2 className="mb- text-2xl font-bold">Users</h2>
          <p>Manage Users & Track Activity</p>
        </div>
        <div className="align-center flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="size-5" />
                <span>Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup
                value={filterStatus}
                onValueChange={(value) =>
                  setFilterStatus(value as FilterStatus)
                }
              >
                <DropdownMenuRadioItem value="all">All</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="active">
                  Active
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="inactive">
                  Inactive
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant={"primary"} onClick={addNewUser}>
            <PlusCircle />
            <span>Add New User</span>
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader className="order-none">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Date Created</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayedUsers.map((user) => (
            <TableRow key={user.id} className="border-t-none">
              <TableCell className="align-center flex gap-4">
                <div className="h-10 w-10">
                  <Image
                    src={user.image || defaultImage}
                    alt={user.name}
                    width={50}
                    height={50}
                    className=" rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold capitalize">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </TableCell>
              <TableCell>{user.phoneNumber}</TableCell>
              <TableCell>{user.dateCreated}</TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <EllipsisVertical />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent>
                    <p
                      onClick={() => editUser(user.id)}
                      className="mx-auto cursor-pointer py-2 pl-2 hover:bg-defaultBadgeBg"
                    >
                      Edit
                    </p>
                    <p
                      onClick={() => deleteUser(user.id)}
                      className="mx-auto cursor-pointer py-2 pl-2 hover:bg-defaultBadgeBg"
                    >
                      Delete
                    </p>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              className={`mr-2 ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
            />
          </PaginationItem>
          {getPageNumbers().map((page, index) => (
            <PaginationItem key={index}>
              {page === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  href="#"
                  isActive={page === currentPage}
                  onClick={() => handlePageChange(page as number)}
                >
                  {page}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              className={`ml-2 ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default UserListTable;
