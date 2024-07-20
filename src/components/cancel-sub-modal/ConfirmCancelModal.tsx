"use client";

import React from "react";

import { Button } from "../ui/button";
import { Dialog } from "../ui/dialog";

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
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          className="flex flex-col items-start rounded-lg bg-white p-4 shadow-lg md:p-6 lg:p-8"
          style={{ maxWidth: "90vw", width: "660px" }}
        >
          <h2 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white md:text-xl">
            We are sorry to see you go!
          </h2>
          <p className="mb-6 text-sm font-normal text-gray-500 md:text-base">
            Are you sure you want to delete Jolly organization? All of your data
            will be permanently removed. This action cannot be undone.
          </p>
          <div className="flex w-full justify-end">
            <div className="ml-auto flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              <Button
                onClick={onClose}
                className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-border bg-white px-4 py-2 text-foreground hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Keep Subscription
              </Button>
              <Button
                onClick={onCancel}
                className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2 font-semibold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                Cancel Subscription
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmCancelModal;
