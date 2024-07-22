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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>We are sorry to see you go!</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete Jolly organization? All of your data
            will be permanently removed. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onClose}
            variant="outline"
            className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-border px-4 py-4 text-foreground"
          >
            Keep Subscription
          </Button>
          <Button
            onClick={onCancel}
            className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Cancel Subscription
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmCancelModal;
