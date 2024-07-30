import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "~/components/ui/button";
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
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { products } from "../../data/mock.products";
import ProductRow from "./single-product-row";

const ProductTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[500px] whitespace-nowrap">
        <TableCaption className="sr-only">
          A list of your recent invoices.
        </TableCaption>
        <TableHeader>
          <TableRow className="border-none bg-primary/10 shadow-none *:text-center *:text-base *:text-neutral-950 *:shadow-none hover:bg-primary/10">
            <TableHead className="w-[316px]">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Total Sold</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created at</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            return <ProductRow key={product.name} product={product} />;
          })}
        </TableBody>
      </Table>
      <div className="mt-8 flex w-full items-center justify-center text-sm text-muted-foreground">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <Button variant={"ghost"}>
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
              <Button variant={"ghost"}>
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
