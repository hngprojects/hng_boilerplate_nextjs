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
  //   memberId?: string;
}

const DeleteSuccessModal: React.FC<ModalProperties> = ({
  show,
  onClose,
  //   memberId,
}) => {
  return (
    <Dialog open={show}>
      <DialogOverlay
        data-testid="overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      />
      <DialogContent className="mx-10 rounded-md bg-white p-6 shadow-md">
        <DialogTitle className="text-lg font-semibold">
          Delete Member
        </DialogTitle>
        <DialogDescription className="text-sm font-normal text-muted-foreground">
          Are you sure you want to delete Chad Bosewick ? All of your data will
          be permanently removed. This action cannot be undone. All
        </DialogDescription>
        <div className="flex justify-end gap-4">
          <div onClick={onClose}>
            <CustomButton variant="outline">Cancel</CustomButton>
          </div>
          <div>
            <CustomButton variant="destructive">Delete</CustomButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteSuccessModal;
