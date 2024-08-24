"use client";

import { Button } from "~/components/ui/button";
// import { Link2Icon } from "lucide-react";

// import CustomButton from "~/components/common/common-button/common-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "~/components/ui/dialog";

// import { useToast } from "~/components/ui/use-toast";

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
            <div className="delete-container">
              <h1 className="mb-[0.5rem] text-[1.125rem] font-semibold leading-[1.75rem] text-[#0F172A]">
                Delete Member
              </h1>

              <p className="text=[#64748B] mb-[1rem] text-[0.875rem]">
                Are you sure you want to delete Chad Bosewick ? All data will be
                permanently removed. This action cannot be undone.
              </p>

              <div className="flex w-[100%] justify-end">
                <div className="flex flex-row gap-[.5rem]">
                  <Button
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
