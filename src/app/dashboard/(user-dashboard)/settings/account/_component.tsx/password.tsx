"use client";

import { useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/common/input/input";
import PasswordSuccessfulModal from "~/components/common/modals/password-successful";

const Password = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="w-full max-w-[674px] px-8 pt-[50px]">
      <div className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold text-neutral-dark-1">
          Password Settings
        </h2>
        <p className="text-base text-neutral-dark-1">
          Update password for enhanced account security
        </p>
      </div>
      <div>
        <div className="mb-6 grid gap-4">
          <CustomInput
            placeholder="Enter current password"
            label="Current Password"
            className="border-border"
            type="password"
          />
          <CustomInput
            placeholder="Enter new password"
            label="New Password"
            className="border-border"
            type="password"
          />
          <CustomInput
            placeholder="Confirm new password"
            label="Confrim new Password"
            className="border-border"
            type="password"
          />
        </div>
        <div className="flex items-center justify-start gap-6">
          <CustomButton variant="outline">Cancel</CustomButton>
          <CustomButton className="bg-primary">Update Password</CustomButton>
        </div>
      </div>
      <PasswordSuccessfulModal onClose={setOpen} show={open} />
    </div>
  );
};

export default Password;
