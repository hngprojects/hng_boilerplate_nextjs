"use client";

import React from "react";

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
    <div
      data-testid="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        className="flex flex-col items-start rounded-lg bg-white p-4 shadow-lg md:p-6 lg:p-8"
        style={{ maxWidth: "90vw", width: "660px" }}
      >
        <h2
          data-testid="modal-title"
          className="mb-4 text-lg font-semibold text-gray-900 dark:text-white md:text-xl"
        >
          We are sorry to see you go!
        </h2>
        <p
          data-testid="modal-message"
          className="mb-6 text-sm font-normal text-gray-500 md:text-base"
        >
          Are you sure you want to delete Jolly organization? All of your data
          will be permanently removed. This action cannot be undone.
        </p>
        <div className="flex w-full justify-end">
          <div className="ml-auto flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <button
              data-testid="keep-button"
              onClick={onClose}
              className="text-foregroundpx-4 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg rounded-md border border-border px-4 py-2 py-4 font-semibold text-default text-foreground hover:bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Keep Subscription
            </button>
            <button
              data-testid="cancel-button"
              onClick={onCancel}
              className="flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg rounded-md bg-primary px-4 py-2 font-semibold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCancelModal;
