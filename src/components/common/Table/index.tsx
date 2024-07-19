import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import Action from "../Action";

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
          <TableHead className="text-center">Created at</TableHead>
          <TableHead className="text-center">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((data) => (
          <TableRow
            key={data.id}
            className="p-4 text-sm font-medium text-black"
          >
            <TableCell className="font-medium max-w-[300px] flex items-center justify-between">
              <div className="w-[67px] border rounded h-[67px] bg-gradient-to-t from-acent-300 to-stroke-200"></div>
              <span>{data.name}</span>
            </TableCell>
            <TableCell className="text-center">{data.price}</TableCell>
            <TableCell className="text-center">{data.totalSales}</TableCell>
            <TableCell className="text-center">
              <span
                className={`border rounded-[88px] text-xs font-normal py-[6px] px-[14px] ${data.status === "Active" ? "text-[#6DC347] border-[#6DC347]" : "border-natural-200"}`}
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
