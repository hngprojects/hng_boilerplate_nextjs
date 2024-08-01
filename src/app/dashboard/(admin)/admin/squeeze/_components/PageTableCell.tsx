import { EllipsisVertical } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import { Checkbox } from "~/components/ui/checkbox";
import { Switch } from "~/components/ui/switch";
import { TableCell, TableRow } from "~/components/ui/table";
import { Squeeze } from "../data/mock.squeeze";

interface PageTableCell {
  page: Squeeze;
  pages: Squeeze[];
  setPages: Dispatch<SetStateAction<Squeeze[]>>;
  checked: Record<string, boolean>;
  setChecked: Dispatch<SetStateAction<Record<string, boolean>>>;
}

export default function PageTableCell({
  page,
  pages,
  setPages,
  checked,
  setChecked,
}: PageTableCell) {
  const setStatus = () => {
    const newState = pages.map((each) => {
      if (each.created_at === page.created_at) {
        return {
          ...each,
          status: !each.status,
        };
      }

      return each;
    });

    setPages(newState);
  };

  const setCheckedStatus = () => {
    if (!checked[page.title]) {
      setChecked({
        ...checked,
        [page.title]: true,
      });
      return;
    }

    setChecked({
      ...checked,
      [page.title]: false,
    });
  };

  return (
    <TableRow className="">
      <TableCell className="flex items-center gap-2 text-neutral-dark-2">
        <Checkbox
          id="example-checkbox"
          checked={checked[page.title]}
          onCheckedChange={() => setCheckedStatus()}
          className="h-5 w-5"
        />
        {page.title}
      </TableCell>
      <TableCell className="text-neutral-dark-2">{page.uri}</TableCell>
      <TableCell className="text-neutral-dark-2">
        <span
          className={`rounded-full px-4 py-2 ${page.status ? "bg-green-200 text-green-500" : "bg-red-200 text-red-500"}`}
        >
          {page.status ? "Online" : "Offline"}
        </span>
      </TableCell>
      <TableCell className="text-neutral-dark-2">{page.created_at}</TableCell>
      <TableCell className="text-neutral-dark-2">
        <Switch
          id="airplane-mode"
          checked={page.status}
          onCheckedChange={() => setStatus()}
          className="bg-gray-200"
        />
      </TableCell>
      <TableCell className="text-neutral-dark-2">
        <EllipsisVertical className="cursor-pointer" />
      </TableCell>
    </TableRow>
  );
}
