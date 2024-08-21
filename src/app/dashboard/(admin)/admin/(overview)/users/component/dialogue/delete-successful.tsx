import { Button } from "~/components/common/common-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

const DeleteSuccessfulDialog = ({ onClose }: { onClose: () => void }) => {
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
        <div className="flex w-full items-center justify-end">
          <Button
            className="ml-2 flex items-center justify-end gap-2.5 rounded-md bg-primary px-4 py-2 text-sm font-medium leading-normal text-white"
            onClick={onClose}
          >
            Done
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteSuccessfulDialog;
