"use client";

import React from "react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">
          We are sorry to see you go!
        </h2>
        <p className="mb-4">
          Are you sure you want to delete Jolly organization? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="flex w-full items-center justify-center whitespace-nowrap rounded-lg border border-border px-4 py-4 text-foreground"
          >
            Keep Subscription
          </button>
          <button
            onClick={onCancel}
            className="flex w-full items-center justify-center whitespace-nowrap rounded-lg bg-primary px-4 py-4 text-background"
          >
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCancelModal;
