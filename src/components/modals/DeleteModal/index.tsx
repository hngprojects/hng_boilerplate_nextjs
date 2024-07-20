"use client";

import React from "react";

import CustomButton from "~/components/common/Button/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
} from "../../ui/dialog";

const DeleteModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const openDeleteModal = () => {
    setIsVisible(true);
  };

  const closeDeleteModal = () => {
    setIsVisible(false);
  };

  return (
    <Dialog open={true} onOpenChange={closeDeleteModal}>
      <DialogOverlay
        data-testid="modal-container"
        className="absolute bottom-0 top-0 z-[999] h-[1024px] w-full cursor-pointer bg-subtle bg-opacity-[25%]"
        onClick={closeDeleteModal}
      >
        <DialogContent
          data-testid="modal-content"
          className="absolute left-[50%] top-[300px] w-[95%] max-w-[1440px] rounded-[6px] bg-background p-[24px] lg:left-[40%] lg:right-0 lg:top-[425px] lg:w-[512px]"
        >
          <DialogHeader>
            <DialogTitle
              data-testid="modal-heading"
              className="text-[18px] font-[600] leading-[28px] text-foreground"
            >
              Delete Member
            </DialogTitle>
          </DialogHeader>
          <DialogDescription
            data-testid="modal-message"
            className="text-[14px] font-[400] leading-[16.69px] text-foreground"
          >
            Are you sure you want to delete Chad Bosewick? All of your data will
            be permanently removed. This action cannot be undone.
          </DialogDescription>
          <div
            data-testid="modal-buttons"
            className="flex justify-end gap-[8px]"
          >
            <div onClick={closeDeleteModal}>
              <CustomButton variant="outline" data-testid="cancel-button">
                Cancel
              </CustomButton>
            </div>

            <div onClick={closeDeleteModal}>
              <CustomButton variant="destructive" data-testid="cancel-button">
                Delete
              </CustomButton>
            </div>
          </div>
        </DialogContent>
      </DialogOverlay>
    </Dialog>
  );
};

export default DeleteModal;
