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

const RoleCreationSuccessModal: React.FC<ModalProperties> = ({
  show,
  onClose,
}) => {
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
              <div className="flex items-center justify-center">
                {/* Put checkmark image here */}
                <h3>Success</h3>
                <p>You have created a new role successfully</p>
              </div>
              <div className="mt-8">
                <CustomButton
                  variant="primary"
                  onClick={onClose}
                  className="w-full"
                >
                  Continue
                </CustomButton>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RoleCreationSuccessModal;
