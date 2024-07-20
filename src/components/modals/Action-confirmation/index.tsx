import Image from "next/image";

import CustomButton from "~/components/common/Button/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";

type ModalProperties = {
  heading: string;
  description: string;
  close: () => void;
  cancel: () => void;
  confirm: () => void;
  variant:
    | "Basic information"
    | "Confirmation"
    | "Destructive confirmation"
    | "Success"
    | "Error";
  triggerMsg: string;
};

const Modal = ({
  heading,
  description,
  close,
  cancel,
  confirm,
  variant,
  triggerMsg,
}: ModalProperties) => {
  switch (variant) {
    case "Basic information": {
      return (
        <Dialog>
          <DialogTrigger asChild data-testid="trigger-button">
            <CustomButton variant="outline">{triggerMsg}</CustomButton>
          </DialogTrigger>
          <DialogContent
            className="rounded-2xl border border-border p-6 sm:rounded-2xl"
            data-testid="Dialog"
          >
            <DialogHeader>
              <DialogTitle className="text-start text-lg font-semibold text-foreground">
                {heading}
              </DialogTitle>
              <DialogDescription className="text-start text-sm text-subtle-foreground">
                {description}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild onClick={close} className="w-full">
                <CustomButton>Close</CustomButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
    case "Confirmation": {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <CustomButton variant="outline">Open Dialog</CustomButton>
          </DialogTrigger>
          <DialogContent className="rounded-2xl border border-border p-6 sm:rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-start text-lg font-semibold text-foreground">
                {heading}
              </DialogTitle>
              <DialogDescription className="text-start text-sm text-subtle-foreground">
                {description}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="grid grid-cols-1 gap-2 sm:flex sm:flex-row-reverse">
              <DialogClose
                asChild
                onClick={confirm}
                className="w-full sm:w-2/3"
              >
                <CustomButton>Yes, I want to continue</CustomButton>
              </DialogClose>
              <DialogClose
                asChild
                onClick={cancel}
                className="w-full text-subtle-foreground sm:w-1/3"
              >
                <CustomButton variant="ghost">No, thanks</CustomButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
    case "Destructive confirmation": {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <CustomButton variant="outline">Open Dialog</CustomButton>
          </DialogTrigger>
          <DialogContent className="rounded-2xl border border-border p-6 sm:rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-start text-lg font-semibold text-foreground">
                {heading}
              </DialogTitle>
              <DialogDescription className="text-start text-sm text-subtle-foreground">
                {description}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="grid grid-cols-1 gap-2 sm:flex sm:flex-row-reverse">
              <DialogClose
                asChild
                onClick={confirm}
                className="w-full sm:w-2/3"
              >
                <CustomButton variant="destructive">
                  Yes, cancel subscription
                </CustomButton>
              </DialogClose>
              <DialogClose
                asChild
                onClick={cancel}
                className="w-full text-subtle-foreground sm:w-1/3"
              >
                <CustomButton variant="ghost">No, thanks</CustomButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
    case "Success": {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <CustomButton variant="outline">Open Dialog</CustomButton>
          </DialogTrigger>
          <DialogContent className="rounded-2xl border border-border p-6 pt-11 sm:rounded-2xl">
            <DialogHeader className="flex flex-col items-center">
              <Image
                src="/success-modal-icon.svg"
                alt="success"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <DialogTitle className="text-center text-lg font-semibold text-foreground">
                {heading}
              </DialogTitle>
              <DialogDescription className="text-center text-sm text-subtle-foreground">
                {description}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="grid grid-cols-1 gap-2 sm:flex sm:flex-row-reverse">
              <DialogClose asChild onClick={confirm} className="w-full">
                <CustomButton>Continue</CustomButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
    case "Error": {
      return (
        <Dialog>
          <DialogTrigger asChild>
            <CustomButton variant="outline">Open Dialog</CustomButton>
          </DialogTrigger>
          <DialogContent className="rounded-2xl border border-border p-6 pt-11 sm:rounded-2xl">
            <DialogHeader className="flex flex-col items-center">
              <Image
                src="/error-modal-icon.svg"
                alt="success"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <DialogTitle className="text-center text-lg font-semibold text-foreground">
                {heading}
              </DialogTitle>
              <DialogDescription className="text-center text-sm text-subtle-foreground">
                {description}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="grid grid-cols-1 gap-2 sm:flex sm:flex-row-reverse">
              <DialogClose asChild onClick={confirm} className="w-full">
                <CustomButton>Try again</CustomButton>
              </DialogClose>
              <DialogClose asChild onClick={cancel} className="w-full">
                <CustomButton variant="outline">No, thanks</CustomButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      );
    }
    // No default
  }
};

export default Modal;
