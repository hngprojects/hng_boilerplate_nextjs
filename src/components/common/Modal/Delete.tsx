"use client";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

function Delete() {
  //   const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="inline-block w-full text-left hover:bg-accent hover:text-accent-foreground">
          Delete
        </button>
      </DialogTrigger>
      <DialogContent className="border border-solid border-[#CBD5E1] bg-[#FFFF] sm:max-w-[512px]">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-[#0F172A]">
            Are you sure you want to delete this product?
          </DialogTitle>
          <DialogDescription className="text-sm font-normal text-[#64748B]">
            This action cannot be undone. This will permanently delete this
            product from the database.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild className="bg-white">
            <Button
              type="button"
              variant="secondary"
              className="text-[#0F172A]"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="button"
            className="bg-[#F81404] text-white hover:bg-[#F81404]"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default Delete;
