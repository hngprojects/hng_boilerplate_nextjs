import { EllipsisVertical } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import { Checkbox } from "~/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { TableCell, TableRow } from "~/components/ui/table";
import { User } from "../data/mock.squeeze";

interface UserTableCell {
  user: User;
  checked: Record<string, boolean>;
  setChecked: Dispatch<SetStateAction<Record<string, boolean>>>;
}

export default function UserTableCell({
  user,
  checked,
  setChecked,
}: UserTableCell) {
  const setCheckedStatus = () => {
    if (!checked[user.email]) {
      setChecked({
        ...checked,
        [user.email]: true,
      });
      return;
    }

    setChecked({
      ...checked,
      [user.email]: false,
    });
  };

  return (
    <TableRow className="">
      <TableCell className="flex items-center gap-2 text-neutral-dark-2">
        <Checkbox
          id="example-checkbox"
          checked={checked[user.email]}
          onCheckedChange={() => setCheckedStatus()}
          className="h-5 w-5"
        />
        {user.name}
      </TableCell>
      <TableCell className="text-neutral-dark-2">{user.email}</TableCell>
      <TableCell className="text-neutral-dark-2">{user.squeeze_page}</TableCell>
      <TableCell className="text-neutral-dark-2">{user.date}</TableCell>
      <TableCell className="text-neutral-dark-2">
        <Popover>
          <PopoverTrigger asChild>
            <EllipsisVertical className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="w-24 cursor-pointer rounded border bg-neutral-dark-1 text-white shadow">
            <button className="w-full px-2 focus:outline-none">Delete</button>
          </PopoverContent>
        </Popover>
      </TableCell>
    </TableRow>
  );
}
