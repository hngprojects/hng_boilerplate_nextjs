import { EllipsisVertical } from "lucide-react";

import { Checkbox } from "~/components/ui/checkbox";
import { TableCell, TableRow } from "~/components/ui/table";
import { User } from "../data/mock.squeeze";

export default function UserTableCell({ user }: { user: User }) {
  return (
    <TableRow className="">
      <TableCell className="flex items-center gap-2 text-neutral-dark-2">
        <Checkbox
          id="example-checkbox"
          checked={true}
          onCheckedChange={() => {}}
          className="h-5 w-5"
        />
        {user.name}
      </TableCell>
      <TableCell className="text-neutral-dark-2">{user.email}</TableCell>
      <TableCell className="text-neutral-dark-2">{user.squeeze_page}</TableCell>
      <TableCell className="text-neutral-dark-2">{user.date}</TableCell>
      <TableCell className="text-neutral-dark-2">
        <EllipsisVertical className="cursor-pointer" />
      </TableCell>
    </TableRow>
  );
}
