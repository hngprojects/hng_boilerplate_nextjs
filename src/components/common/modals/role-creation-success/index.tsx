"use client";

import Image from "next/image";

import CustomButton from "~/components/common/common-button/common-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import checkmark from "../../../../../public/images/role-success-checkmark.png";

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
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <div className="flex flex-col items-center justify-center">
                <Image src={checkmark} alt="checkmark" priority />
                <h3 className="mt-4 text-lg font-semibold text-[#0A0A0A]">
                  Success
                </h3>
                <p className="text-sm font-normal text-[#475569]">
                  You have created a new role successfully
                </p>
              </div>
              <div className="mt-4">
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
