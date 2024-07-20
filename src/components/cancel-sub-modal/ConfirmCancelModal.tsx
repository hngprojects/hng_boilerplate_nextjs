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
            className="flex h-10 w-full items-center justify-center whitespace-nowrap rounded-lg border border-border bg-background px-4 py-4 text-sm font-medium text-foreground ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Keep Subscription
          </button>
          <button
            onClick={onCancel}
            className="flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white ring-offset-background transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Cancel Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCancelModal;
