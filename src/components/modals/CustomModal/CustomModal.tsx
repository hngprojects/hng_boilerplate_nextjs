import { DialogTitle } from "@radix-ui/react-dialog";
import { ReactNode } from "react";

import CustomButton from "~/components/common/Button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "~/components/ui/dialog";

type Variant =
  | "default"
  | "primary"
  | "destructive"
  | "subtle"
  | "loading"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

interface CustomModalProperties {
  onOpen: boolean;
  toggleState: () => void;
  buttonAction: () => void;
  showButtons: boolean;
  actionButtonText: string;
  actionButtonColor?: Variant;
  children: ReactNode;
  buttonPosition: string;
  addCloseButton: boolean;
}

const CustomModal: React.FC<CustomModalProperties> = ({
  onOpen,
  toggleState,
  buttonAction,
  showButtons,
  actionButtonText,
  actionButtonColor,
  children,
  buttonPosition,
  addCloseButton,
}) => {
  return (
    <Dialog open={onOpen} onOpenChange={toggleState}>
      <DialogContent className="sm:max-w-md" aria-describedby="modal-content">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="w-full flex-[5]">{children}</div>
        {showButtons && (
          <DialogFooter
            data-testid="dialog-footer"
            className={`flex ${buttonPosition === "right" ? "justify-end" : buttonPosition === "left" ? "justify-start" : "justify-center"}`}
          >
            <div className="flex flex-row gap-2">
              {addCloseButton && (
                <DialogClose asChild>
                  <CustomButton variant="outline">Close</CustomButton>
                </DialogClose>
              )}
              <CustomButton variant={actionButtonColor} onClick={buttonAction}>
                {actionButtonText}
              </CustomButton>
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
