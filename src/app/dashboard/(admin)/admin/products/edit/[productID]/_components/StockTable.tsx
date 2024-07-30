import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

// id: string;
//   name: string;
//   price: string;
//   totalSold: string;
//   status: "Active" | "Draft";
//   createdAt: string;
interface TableType {
  price: string;
}

const StockTable = ({ price }: TableType) => {
  return (
    <>
      <div className="stock flex w-full max-w-[690px] flex-col gap-6 rounded-[0.375rem] border-[1px] border-solid border-[#CBD5E1] p-6">
        <div className="border-b-solid w-full border-b-[1px] border-b-[#CBD5E1] pb-4">
          <h1 className="text-6 font-semibold text-[#0A0A0A]">Stock</h1>
          <p className="text-[0.875rem] font-normal text-[#525252]">
            Add and remove products
          </p>
        </div>
        <Table className="max-w-[500px] whitespace-nowrap rounded-lg border-[1px] border-solid border-[#E4E4E7]">
          <TableHeader className="max-w-[500px] rounded-lg bg-[#F1F5F9] shadow-none *:text-left *:text-base *:text-neutral-950 *:shadow-none hover:bg-primary/10">
            <TableRow className="max-w-[500px] rounded-lg">
              <TableHead className="text-[0.875rem] font-medium text-[#0A0A0A]">
                Size
              </TableHead>
              <TableHead className="text-[0.875rem] font-medium text-[#0A0A0A]">
                Stock
              </TableHead>
              <TableHead className="text-[0.875rem] font-medium text-[#0A0A0A]">
                Price
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="max-w-[500px]">
            <TableRow className="max-w-[500px] border-none bg-white shadow-none *:text-left *:text-base *:text-neutral-950 *:shadow-none hover:bg-[#F1F5F9]">
              <TableCell>Small</TableCell>
              <TableCell>
                <input
                  type="text"
                  name="small"
                  id="small"
                  className="rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7] px-3 py-[0.72rem]"
                />
              </TableCell>
              <TableCell>
                <div className="flex w-fit items-center gap-2 rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7]">
                  <h1 className="mx-3 my-2 text-2xl font-medium">$</h1>
                  <input
                    type="text"
                    name="small"
                    id="small-price"
                    defaultValue={price}
                    className="rounded-[0.375rem] px-3 py-[0.72rem]"
                  />
                </div>
              </TableCell>
            </TableRow>

            <TableRow className="max-w-[500px] border-none bg-white shadow-none *:text-left *:text-base *:text-neutral-950 *:shadow-none hover:bg-[#F1F5F9]">
              <TableCell>Standard</TableCell>
              <TableCell>
                <input
                  type="text"
                  name="standard"
                  id="standard"
                  className="rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7] px-3 py-[0.72rem]"
                />
              </TableCell>
              <TableCell>
                <div className="flex w-fit items-center gap-2 rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7]">
                  <h1 className="mx-3 my-2 text-2xl font-medium">$</h1>
                  <input
                    type="text"
                    name="standard-price"
                    id="standard-price"
                    defaultValue={price}
                    className="rounded-[0.375rem] px-3 py-[0.72rem]"
                  />
                </div>
              </TableCell>
            </TableRow>

            <TableRow className="max-w-[500px] border-none bg-white shadow-none *:text-left *:text-base *:text-neutral-950 *:shadow-none hover:bg-[#F1F5F9]">
              <TableCell>Large</TableCell>
              <TableCell>
                <input
                  type="text"
                  name="large"
                  id="large"
                  className="rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7] px-3 py-[0.72rem]"
                />
              </TableCell>
              <TableCell>
                <div className="flex w-fit items-center gap-2 rounded-[0.375rem] border-[1px] border-solid border-[#E4E4E7]">
                  <h1 className="mx-3 my-2 text-2xl font-medium">$</h1>
                  <input
                    type="text"
                    name="large-price"
                    id="large-price"
                    defaultValue={price}
                    className="rounded-[0.375rem] px-3 py-[0.72rem]"
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <button className="w-fit rounded-[0.375rem] border-[1px] border-solid border-[#E2E8F0] px-4 py-2 text-[0.875rem] font-medium text-[#0F172A]">
          Add a variant
        </button>
      </div>
    </>
  );
};

export default StockTable;
