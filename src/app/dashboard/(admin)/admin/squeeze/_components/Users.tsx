import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

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
  const searchParameters = useSearchParams();
  const search = searchParameters.get("search");

  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [checkAllStatus, setCheckAllStatus] = useState(false);

  const filteredUsers = useMemo(
    () =>
      search
        ? squeezeUsers.filter((each) =>
            each.name.toLowerCase().includes(search.toLowerCase().trim()),
          )
        : squeezeUsers,
    [search],
  );

  const checkAll = () => {
    const checkMap: Record<string, boolean> = {};
    for (const each of squeezeUsers) {
      checkMap[each.email] = true;
    }

    setChecked(checkMap);
    setCheckAllStatus(true);
  };

  const uncheckAll = () => {
    const checkMap: Record<string, boolean> = {};
    for (const each of squeezeUsers) {
      checkMap[each.email] = false;
    }

    setChecked(checkMap);
    setCheckAllStatus(false);
  };

  return (
    <section>
      <Table divClassName="text-neutral-dark-2" className="">
        <TableHeader className="rounded border-b-0 bg-[#fff7f2]">
          <TableRow className="border-0">
            <TableHead className="flex items-center gap-2">
              <Checkbox
                id="example-checkbox"
                checked={checkAllStatus}
                onCheckedChange={() => {
                  checkAllStatus ? uncheckAll() : checkAll();
                }}
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
          {filteredUsers.map((each) => {
            return (
              <UserTableCell
                key={each.name}
                user={each}
                checked={checked}
                setChecked={setChecked}
              />
            );
          })}
        </TableBody>
      </Table>
    </section>
  );
}
