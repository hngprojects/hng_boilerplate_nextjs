"use client";

import { usePathname } from "next/navigation";
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

const NotificationSettingSavedModal: React.FC<ModalProperties> = ({
  show,
  onClose,
}) => {
  const pathname = usePathname();
  /**
   * @kinxlo
   * check if pathname == "notification", apply the blur effect
   */
  const isNotificationPath = pathname.includes("notification");

  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogOverlay
        data-testid="overlay"
        className={`fixed inset-0 z-50 flex items-center justify-center ${isNotificationPath ? "bg-transparent backdrop-blur-sm" : "bg-black bg-opacity-50"}`}
      />
      <DialogContent
        className="mx-10 rounded-md bg-white p-6 shadow-md"
        onClick={(event) => event.stopPropagation()}
      >
        <DialogTitle className="text-lg font-semibold">
          Notification Updated!
        </DialogTitle>
        <DialogDescription className="text-sm font-normal text-muted-foreground">
          Notification preferences updated successfully. Remember, you can
          always adjust these settings later.
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

export default NotificationSettingSavedModal;
