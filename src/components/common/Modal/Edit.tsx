"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import TableForm from "../Form";

function Edit() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-block w-full text-left hover:bg-accent hover:text-accent-foreground">
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className="px-[41px] py-[43px] sm:max-w-[657px]">
        <DialogHeader className="space-y-0">
          <DialogTitle className="text-[18px]">Add new product </DialogTitle>
          <DialogDescription className="mt-[3px] text-xs">
            Create a new product.
          </DialogDescription>
        </DialogHeader>
        <TableForm />
      </DialogContent>
    </Dialog>
  );
}

export default Edit;
