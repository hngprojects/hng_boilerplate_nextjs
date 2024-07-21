"use client";

import React from "react";

import CustomButton from "~/components/common/Button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface ConfirmCancelModalProperties {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
}

const ConfirmCancelModal: React.FC<ConfirmCancelModalProperties> = ({
  isOpen,
  onClose,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-md rounded-2xl border border-border p-6 sm:max-w-lg sm:rounded-2xl md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="mb-4 text-lg font-semibold sm:text-xl md:text-2xl">
            We are sorry to see you go!
          </DialogTitle>
          <DialogDescription className="mb-4 text-sm sm:text-base md:text-lg">
            Are you sure you want to delete Jolly organization? All of your data
            will be permanently removed. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col space-y-4 sm:flex-row sm:justify-end sm:space-x-4 sm:space-y-0">
          <DialogClose asChild>
            <CustomButton className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-border bg-background px-4 py-2 text-foreground sm:mr-4 sm:px-6 sm:py-3">
              Keep Subscription
            </CustomButton>
          </DialogClose>
          <DialogClose asChild>
            <CustomButton
              onClick={onCancel}
              className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-background sm:px-6 sm:py-3"
            >
              Cancel Subscription
            </CustomButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmCancelModal;
