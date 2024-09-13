"use client";

import { Link } from "lucide-react";
import React from "react";

import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/common/input/input";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "~/components/ui/dialog";
import SelectInput from "../SelectInput";

interface ModalProperties {
  show: boolean;
  onClose: () => void;
}

const InviteModal: React.FC<ModalProperties> = ({ show, onClose }) => {
  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogOverlay
        data-testid="overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-50"
      />
      <DialogContent className="max-w-[400px] rounded-md bg-white p-0 py-2 shadow-md">
        <div className="flex items-center gap-4 border-b p-4">
          <Avatar data-testid="avatar" className="h-10 w-10">
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>{" "}
          <DialogTitle className="text-[14px] font-normal">
            Invite to your Organization
          </DialogTitle>
        </div>
        <div className="px-4">
          <CustomInput
            label="Email"
            variant="border"
            placeholder="Input email"
          />
          <SelectInput
            label="Add to Organization (Optional)"
            value="hello world"
            onSelect={() => {}}
            options={["Github", "Youtube"]}
            placeHolder="Select Organization"
          />
          <div className="flex items-center justify-end gap-10 py-6">
            <CustomButton
              variant="ghost"
              icon={<Link color="hsl(25 95% 53%)" />}
              isLeftIconVisible={true}
            >
              Invite with link
            </CustomButton>
            <CustomButton variant="primary">Send invites</CustomButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InviteModal;
