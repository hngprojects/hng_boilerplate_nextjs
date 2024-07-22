"use client";

import React from "react";

import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface ConfirmCancelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCancel: () => void;
}

const ConfirmCancelModal: React.FC<ConfirmCancelModalProps> = ({
  isOpen,
  onClose,
  onCancel,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-lg rounded-2xl border border-border p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            We are sorry to see you go!
          </DialogTitle>
          <DialogDescription className="text-sm">
            Are you sure you want to delete Jolly organization? All of your data
            will be permanently removed. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-border px-4 py-2 text-foreground"
          >
            Keep Subscription
          </Button>
          <Button
            onClick={onCancel}
            className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Cancel Subscription.
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmCancelModal;
