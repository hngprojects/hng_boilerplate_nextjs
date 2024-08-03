"use client";

import CustomButton from "~/components/common/common-button/common-button";
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

const RoleCreationModal: React.FC<ModalProperties> = ({ show, onClose }) => {
  return (
    <>
      <Dialog open={show} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h2 className="mb-2 text-left text-lg font-semibold text-neutral-dark-2">
                Create Role
              </h2>
            </DialogTitle>
            <DialogDescription>
              <p className="text-left text-sm font-normal text-[#475569]">
                Define customized responsibilities for collaborative success.
              </p>
              <div className="mb-7 mt-6">
                <label className="mb-2 block text-left text-base font-bold text-neutral-dark-2">
                  Name of role
                </label>
                <input
                  type="text"
                  placeholder="e.g: IT Staff"
                  className="w-full rounded-md border border-border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-primary focus:ring-ring md:w-56"
                />
              </div>
              <div>
                <label className="mb-2 block text-left text-base font-bold text-neutral-dark-2">
                  Role Descriotion
                </label>
                <textarea
                  placeholder="describe role"
                  className="min-h-20 w-full resize-none rounded-md border border-border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-primary focus:ring-ring"
                />
              </div>
              <div className="mt-8 flex items-center justify-end gap-4">
                <CustomButton variant="subtle" onClick={onClose}>
                  Cancel
                </CustomButton>
                <CustomButton variant="primary">Create Role</CustomButton>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RoleCreationModal;
