'use client';
import React from 'react';
import CustomButton from "~/components/common/Button/button";
import { Dialog, DialogOverlay, DialogContent, DialogHeader, DialogTitle, DialogDescription }  from "../../ui/dialog";

interface DeleteModalProps {
  closeDeleteModal: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ closeDeleteModal }) => {
  return (
    <Dialog open={true} onOpenChange={closeDeleteModal}> 
    <DialogOverlay data-testid="modal-container" className="absolute bg-subtle bg-opacity-[25%] w-full top-0 bottom-0 h-[1024px] z-[999] cursor-pointer" onClick={closeDeleteModal}>
      <DialogContent data-testid="modal-content"
        className="absolute max-w-[1440px] lg:left-[33%] lg:top-[425px] top-[300px] lg:w-[512px] w-[95%] left-3 md:left-5 lg:right-0 bg-background p-[24px] rounded-[6px]">
        <DialogHeader>
          <DialogTitle data-testid="modal-heading" className="text-[18px] font-[600] leading-[28px] text-foreground">Delete Member</DialogTitle>
        </DialogHeader>
        <DialogDescription data-testid="modal-message" className="text-[14px] font-[400] leading-[16.69px] text-foreground">
          Are you sure you want to delete Chad Bosewick? All of your data will be permanently removed. This action
          cannot be undone.
        </DialogDescription>
        <div data-testid="modal-buttons" className="flex justify-end gap-[8px]">
          <div  onClick={closeDeleteModal} >
            <CustomButton variant="outline" data-testid="cancel-button">Cancel</CustomButton>
          </div>

          <div  onClick={closeDeleteModal} >
            <CustomButton variant="destructive" data-testid="cancel-button">Delete</CustomButton>
          </div>
          
          </div>
      </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default DeleteModal;
