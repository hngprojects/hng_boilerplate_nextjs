"use client";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";

interface ModalProperties {
  show: boolean;
  onClose: () => void;
}

const DeleteMember: React.FC<ModalProperties> = ({ show, onClose }) => {
  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogDescription className="outline-none">
            <DialogTitle>
              {" "}
              <h1 className="mb-[0.5rem] text-[1.125rem] font-semibold leading-[1.75rem] text-[#0F172A]">
                Delete Member
              </h1>
            </DialogTitle>
            <div className="delete-container">
              <p className="text=[#64748B] mb-[1rem] text-[0.875rem]">
                Are you sure you want to delete Chad Bosewick ? All data will be
                permanently removed. This action cannot be undone.
              </p>

              <div className="flex w-[100%] justify-end">
                <div className="flex flex-row gap-[.5rem]">
                  <Button
                    onClick={onClose}
                    className="text-[#0F172A] outline-none focus:outline-none"
                    variant="outline"
                  >
                    Cancel
                  </Button>

                  <Button
                    className="outline-none focus:outline-none"
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteMember;
