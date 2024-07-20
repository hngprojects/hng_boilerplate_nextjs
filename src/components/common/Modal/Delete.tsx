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
          <DialogTitle className="tex-[#0F172A] text-lg font-semibold">
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
          <Button type="button" className="bg-[#F81404] text-white">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

    // <Dialog>
    //   <div onClick={() => setIsOpen(true)}>Share</div>

    //   <DialogContent className="sm:max-w-md">
    //     <DialogHeader>
    //       <DialogTitle>Share link</DialogTitle>
    //       <DialogDescription>
    //         Anyone who has this link will be able to view this.
    //       </DialogDescription>
    //     </DialogHeader>
    //     <div className="flex items-center space-x-2" >
    //       <div className="grid flex-1 gap-2">
    //         {/* <Label htmlFor="link" className="sr-only">
    //           Link
    //         </Label> */}
    //         {/* <Input
    //           id="link"
    //           defaultValue="https://ui.shadcn.com/docs/installation"
    //           readOnly
    //         /> */}
    //       </div>
    //       <Button type="submit" size="sm" className="px-3">
    //         <span className="sr-only">Copy</span>
    //         {/* <Copy className="h-4 w-4" /> */}
    //       </Button>
    //     </div>
    //     <DialogFooter className="sm:justify-start">
    //       <DialogClose asChild>
    //         <Button type="button" variant="secondary">
    //           Close
    //         </Button>
    //       </DialogClose>
    //     </DialogFooter>
    //   </DialogContent>
    // </Dialog>
  );
}

export default Delete;
