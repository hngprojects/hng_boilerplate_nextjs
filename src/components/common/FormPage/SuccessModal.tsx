import React from "react";

import { Button } from "~/components/ui/button";

interface SuccessModalProps {
  setIsModalOpen: (isOpen: boolean) => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ setIsModalOpen }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
      <div className="w-72 md:w-80 rounded-md bg-white p-6 shadow-lg">
        <h2 className="text-lg font-semibold text-[#0F172A]">
          Password Successfully Updated!
        </h2>
        <p className="mt-2 text-sm text-[#64748B]">
          Your password has been successfully updated! You can now log in with
          your new password.
        </p>
        <div className="mt-4 flex justify-end">
          <Button
            onClick={() => setIsModalOpen(false)}
            className="bg-[#F97316] text-white"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
