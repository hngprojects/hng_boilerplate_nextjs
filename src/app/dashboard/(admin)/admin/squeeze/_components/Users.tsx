import { Checkbox } from "~/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { squeezeUsers } from "../data/mock.squeeze";
import UserTableCell from "./UserTableCell";

export default function Users() {
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
              Name
            </TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Squeeze Page</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-neutral-dark-2">
          {squeezeUsers.map((each) => {
            return <UserTableCell key={each.name} user={each} />;
          })}
        </TableBody>
      </Table>
    </section>
  );
}
