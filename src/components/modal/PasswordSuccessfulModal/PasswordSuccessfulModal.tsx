"use client";

import React from "react";

import CustomButton from "~/components/common/Button/button";

interface ModalProperties {
  show: boolean;
  onClose: () => void;
}

const PasswordSuccessfulModal: React.FC<ModalProperties> = ({
  show,
  onClose,
}) => {
  if (!show) return null;

  const handleClose = (event: React.MouseEvent) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div
      data-testid="overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div
        className="w-68 mx-10 rounded-md bg-white p-6 shadow-md"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 className="mb-4 text-lg font-semibold">
          Password Successfully Updated!
        </h2>
        <p className="mb-6 text-sm font-normal text-muted-foreground">
          Your password has been successfully updated! You can now log in with
          your new password.
        </p>
        <div className="flex justify-end">
          <div onClick={handleClose}>
            <CustomButton variant="primary">Continue</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccessfulModal;
