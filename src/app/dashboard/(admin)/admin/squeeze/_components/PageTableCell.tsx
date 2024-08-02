import { EllipsisVertical } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
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
        <Popover>
          <PopoverTrigger asChild>
            <EllipsisVertical className="cursor-pointer" />
          </PopoverTrigger>
          <PopoverContent className="w-24 cursor-pointer rounded border bg-neutral-dark-1 text-white shadow">
            <div className="-m-4">
              <button className="w-full px-3 py-2 text-start hover:bg-neutral-dark-2/60 focus:outline-none">
                Edit
              </button>
              <Dialog>
                <DialogTrigger className="w-full rounded px-3 py-2 text-start hover:bg-neutral-dark-2/60 focus:outline-none">
                  <span className="w-full">Delete</span>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you sure you want to delete?</DialogTitle>
                  </DialogHeader>
                  <div>
                    <p>
                      This action cannot be undone. This will permanently delete
                      this product from the database.
                    </p>
                  </div>
                  <DialogFooter>
                    <>
                      <DialogClose className="rounded border border-border bg-transparent px-4 text-neutral-dark-1 hover:bg-transparent">
                        Close
                      </DialogClose>
                      <Button className="bg-error text-white hover:bg-error/80">
                        Delete
                      </Button>
                    </>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </PopoverContent>
        </Popover>
      </TableCell>
    </TableRow>
  );
}
