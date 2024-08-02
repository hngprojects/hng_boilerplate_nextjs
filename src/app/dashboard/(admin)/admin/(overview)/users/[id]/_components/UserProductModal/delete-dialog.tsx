"use client";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

interface DeleteDialogProperties {
  onClose: () => void;
  onDelete: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProperties> = ({
  onClose,
  onDelete,
}) => {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold leading-7 text-slate-900">
            Are you absolutely sure?
          </DialogTitle>
          <DialogDescription className="text-sm font-normal leading-tight text-slate-500">
            This action cannot be undone. This will permanently delete this
            product from the database.
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full">
          <Button
            variant="outline"
            className="ml-auto flex items-center justify-center gap-2.5 rounded-md px-4 py-2 text-sm font-medium leading-normal"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            onClick={onDelete}
            className="ml-2 flex items-center justify-center gap-2.5 rounded-md bg-red-600 px-4 py-2 text-sm font-medium leading-normal text-white"
          >
            Delete
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
