"use client";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

interface SuccessDialogProperties {
  onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProperties> = ({ onClose }) => {
  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold leading-7 text-slate-900">
            User Deleted Successfully!
          </DialogTitle>
          <DialogDescription className="text-sm font-normal leading-tight text-slate-500">
            Their account has been deleted, and they will no longer be able to
            access the platform.
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full">
          <Button
            onClick={onClose}
            className="ml-auto flex items-center justify-center gap-2.5 rounded-md px-4 py-2 text-sm font-medium leading-normal text-white"
            style={{ backgroundColor: "#f97316" }}
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog;
