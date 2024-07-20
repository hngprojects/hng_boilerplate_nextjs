"use client";

import React from "react";

import CustomButton from "~/components/common/Button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogTitle,
} from "../../ui/dialog";

interface ModalProperties {
  show: boolean;
  onClose: () => void;
}

const PasswordSuccessfulModal: React.FC<ModalProperties> = ({
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
          Password Successfully Updated!
        </DialogTitle>
        <DialogDescription className="text-sm font-normal text-muted-foreground">
          Your password has been successfully updated! You can now log in with
          your new password.
        </DialogDescription>
        <div className="flex justify-end">
          <div onClick={onClose}>
            <CustomButton variant="primary">Continue</CustomButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PasswordSuccessfulModal;
