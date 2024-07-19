'use client'
import React from 'react';
import { Button } from '../ui/button';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const PasswordSuccessfulModal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) return null;
  //this should be uncommented when parent element has beeen implemented  

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div
      data-testid="overlay"
      className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black z-50"
      onClick={handleClose}
    >
      <div
        className="bg-white p-6 rounded-md shadow-md w-68 mx-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">Password Successfully Updated!</h2>
        <p className="text-sm font-normal text-[#64748B] mb-6">Your password has been successfully updated! You can now log in with your new password.</p>
        <div className='flex justify-end'>
        <Button
          className="mt-4 py-2 px-4 rounded-md text-white bg-[#F97316] "
          onClick={handleClose}
        >
          Continue
        </Button>
        </div>
      </div>
    </div>
  );
};

export default PasswordSuccessfulModal;