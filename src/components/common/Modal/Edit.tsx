"use client";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";

function Edit() {
  //   const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:bg-accent hover:text-accent-foreground inline-block w-full text-left">
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Are you sure you want to delete this product?
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this
            product from the database.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          {/* <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose> */}
          <Button type="button">Delete</Button>
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

export default Edit;
