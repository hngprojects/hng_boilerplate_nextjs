import React from "react";

import { Button } from "~/components/common/common-button";
import { Input } from "~/components/common/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

interface WaitListModalProperties {
  children: React.ReactNode;
  isEdit?: boolean;
  initialData?: {
    name?: string;
    email?: string;
    notes?: string;
  };
}

const WaitListModal: React.FC<WaitListModalProperties> = ({
  children,
  isEdit = false,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="h-fit w-[350px] rounded-[6px] bg-white px-8 py-9 md:w-[422px] md:px-10 md:py-11">
        <DialogHeader className="inline-flex flex-col items-start justify-start">
          <DialogTitle className="text-lg font-bold leading-5 text-neutral-950">
            {isEdit ? "Edit Waitlist Entry" : "Join Waitlist"}
          </DialogTitle>
          <DialogDescription className="text-xs leading-3 text-slate-500">
            {isEdit
              ? "Update your information"
              : "Enter your details to join the waitlist"}
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="mt-4">
            <form className="flex flex-col space-y-4">
              <div>
                <Label
                  htmlFor="name"
                  className="left-0 text-left text-sm font-medium leading-5 text-slate-900"
                >
                  Name
                </Label>
                <Input
                  id="name"
                  required
                  type="text"
                  placeholder="e.g John Doe"
                  className="col-span-3 inline-flex h-10 items-start justify-start gap-2"
                />
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="left-0 text-left text-sm font-medium leading-5 text-slate-900"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  required
                  type="email"
                  placeholder="e.g johndoe@gmail.com"
                  className="col-span-3 inline-flex h-10 items-start justify-start gap-2"
                />
              </div>

              <div>
                <Label
                  htmlFor="notes"
                  className="left-0 text-left text-sm font-medium leading-5 text-slate-900"
                >
                  Note
                </Label>
                <Textarea
                  id="notes"
                  placeholder="e.g I am interested in the product"
                  className="col-span-3 inline-flex h-20 items-start justify-start gap-2 border-[.5px] !border-slate-300 bg-transparent focus:!border-primary focus:!ring-[.5px] focus:!ring-primary focus:!ring-offset-0 focus-visible:!ring-[.5px] focus-visible:!ring-primary focus-visible:!ring-offset-0"
                />
              </div>
            </form>
          </div>
        </div>
        <DialogFooter className="mt-3">
          <Button variant="primary" type="submit">
            {isEdit ? "Update" : "Join Waitlist"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default WaitListModal;
