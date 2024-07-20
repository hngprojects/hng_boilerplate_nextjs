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
        style={{ maxWidth: "90vw", width: "512px" }} // Set max width to 90% of viewport width for responsiveness
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
            {/* Adds space to the left of the buttons */}
            <button
              data-testid="keep-button"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Keep Subscription
            </button>
            <button
              data-testid="cancel-button"
              onClick={onCancel}
              className="flex items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
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
