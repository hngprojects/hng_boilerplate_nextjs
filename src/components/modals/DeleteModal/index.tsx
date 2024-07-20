'use client';
import React from 'react';
import DeleteModalButton from '../../common/DeleteModalButton';

interface DeleteModalProps {
  closeDeleteModal: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ closeDeleteModal }) => {
  return (
    <main
      data-testid="modal-container"
      className="absolute bg-[#141414] bg-opacity-[25%] w-full top-0 bottom-0 h-full z-[999]"
      onClick={closeDeleteModal}
    >
      <div
        data-testid="modal-content"
        className="absolute max-w-[1440px] lg:left-[32.2%] lg:top-[425px] top-[300px] lg:w-[512px] w-[95%] left-3 md:left-5 lg:right-0 bg-[#FAFAFA] p-[24px] rounded-[6px]"
      >
        <p data-testid="modal-heading" className="text-[18px] font-[600] leading-[28px] text-[#0F172A]">
          Delete Member
        </p>
        <p data-testid="modal-message" className="text-[14px] font-[400] leading-[16.69px] text-[#64748B] my-[8px]">
          Are you sure you want to delete Chad Bosewick? All of your data will be permanently removed. This action
          cannot be undone.
        </p>
        <div data-testid="modal-buttons" className="flex justify-end gap-[8px]">
          <DeleteModalButton
            data-testid="cancel-button"
            title="Cancel"
            className="bg-[#ffff] text-[#0F172A] border border-border hover:bg-gray-400 hover:text-white"
            onClick={closeDeleteModal}
          />
          <DeleteModalButton
            data-testid="delete-button"
            title="Delete"
            className="bg-[#ef4444] text-[#ffff] hover:bg-white hover:border hover:border-[#ef4444] hover:text-[#ef4444]"
            onClick={closeDeleteModal}
          />
        </div>
      </div>
    </main>
  );
};

export default DeleteModal;
