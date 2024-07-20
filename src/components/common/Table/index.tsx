import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import Action from "../Action";
import CreatedAt from "../CreatedAt";

const data: {
  id: number;
  name: string;
  price: number;
  totalSales: number;
  status: string;
  createdAt: string;
}[] = [
  {
    id: 1,
    name: "Hypernova Headphones",
    price: 129.99,
    status: "Draft",
    totalSales: 25,
    createdAt: "2024-07-16 10:35AM",
  },
  {
    id: 1,
    name: "Hypernova Headphones",
    price: 129.99,
    status: "Active",
    totalSales: 25,
    createdAt: "2024-07-16 10:35AM",
  },
  {
    id: 1,
    name: "Hypernova Headphones",
    price: 129.99,
    status: "Active",
    totalSales: 25,
    createdAt: "2024-07-16 10:35AM",
  },
  {
    id: 1,
    name: "Hypernova Headphones",
    price: 129.99,
    status: "Draft",
    totalSales: 25,
    createdAt: "2024-07-16 10:35AM",
  },
];

function TableData() {
  return (
    <Table>
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className="border border-none text-base font-normal text-natural-300">
          <TableHead className="text-center">Name</TableHead>
          <TableHead className="text-center">Price</TableHead>
          <TableHead className="text-center">Total sales</TableHead>
          <TableHead className="text-center">Status</TableHead>
          <TableHead className="text-center">
            <CreatedAt />
          </TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <TableRow
            key={data.id}
            className="p-4 text-sm font-medium text-black"
          >
            <TableCell className="flex max-w-[300px] items-center justify-between font-medium">
              <div className="h-[67px] w-[67px] rounded border bg-gradient-to-t from-acent-300 to-stroke-200"></div>
              <span>{data.name}</span>
            </TableCell>
            <TableCell className="text-center">{data.price}</TableCell>
            <TableCell className="text-center">{data.totalSales}</TableCell>
            <TableCell className="text-center">
              <span
                className={`rounded-[88px] border px-[14px] py-[6px] text-xs font-normal ${data.status === "Active" ? "border-[#6DC347] text-[#6DC347]" : "border-natural-200"}`}
              >
                {data.status}
              </span>
            </TableCell>
            <TableCell className="text-center">{data.createdAt}</TableCell>
            <TableCell className="text-center">
              {/* <Image
                src="/action.svg"
                width={24}
                height={24}
                alt="action"
                className="mx-auto"
              /> */}
              <Action />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default TableData;
