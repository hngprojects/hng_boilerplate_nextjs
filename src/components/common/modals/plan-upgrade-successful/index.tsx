"use client";

import React from "react";

import CustomButton from "~/components/common/common-button/common-button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "~/components/ui/dialog";

interface ModalProperties {
  show: boolean;
  onClose: () => void;
}

const PlanUpgradeSuccessfulModal: React.FC<ModalProperties> = ({
  show,
  onClose,
}) => {
  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogOverlay
        data-testid="overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      />
      <DialogContent
        className="mx-10 rounded-md bg-white p-6 shadow-md"
        onClick={(event) => event.stopPropagation()}
      >
        <DialogTitle className="text-lg font-semibold">
          Success! You&apos;ve Upgraded Your Plan!
        </DialogTitle>
        <DialogDescription className="text-sm font-normal text-muted-foreground">
          Congratulations! You&apos;ve successfully upgraded to Basic, This
          means you now have access to all the powerful features that will help
          you manage your team effectively
        </DialogDescription>
        <div className="flex justify-end">
          <div onClick={onClose}>
            <CustomButton variant="primary">Done</CustomButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlanUpgradeSuccessfulModal;
