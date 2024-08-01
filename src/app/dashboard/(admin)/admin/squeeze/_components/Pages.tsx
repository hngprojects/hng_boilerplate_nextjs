import { Checkbox } from "~/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { squeezePages } from "../data/mock.squeeze";
import PageTableCell from "./PageTableCell";

export default function Pages() {
  return (
    <section>
      <Table divClassName="text-neutral-dark-2" className="">
        <TableHeader className="rounded border-b-0 bg-[#fff7f2]">
          <TableRow className="border-0">
            <TableHead className="flex items-center gap-2">
              <Checkbox
                id="example-checkbox"
                checked={false}
                onCheckedChange={() => {}}
                className="h-5 w-5"
              />
              Page Title
            </TableHead>
            <TableHead>Url Slug</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created Date</TableHead>
            <TableHead>Activate</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-neutral-dark-2">
          {squeezePages.map((each) => {
            return <PageTableCell key={each.title} page={each} />;
          })}
        </TableBody>
      </Table>
    </section>
  );
}
