"use client";

import { PasswordInput } from ".";
import { useState } from "react";

const PasswordInputDemo = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-16 p-12 px-4 lg:p-24">
      Password Input Demo
      <form className="flex w-full flex-col gap-[24px] lg:max-w-xl">
        <span className="flex flex-col gap-[8px]">
          <label
            htmlFor="current_password"
            className="text-base text-[#434343]"
          >
            Current Password
          </label>
          <PasswordInput
            password={password}
            onPasswordChange={setPassword}
            name="current_password"
            id="current_password"
            placeholder="Enter current password"
          />
        </span>

        <span className="flex flex-col gap-[8px]">
          <label htmlFor="new_password" className="text-base text-[#434343]">
            New Password
          </label>
          <PasswordInput
            password={newPassword}
            onPasswordChange={setnewPassword}
            name="new_password"
            id="new_password"
            placeholder="Enter new password"
          />
        </span>

        <span className="flex flex-col gap-[8px]">
          <label
            htmlFor="confirm_new_password"
            className="text-base text-[#434343]"
          >
            Confirm New Password
          </label>
          <PasswordInput
            password={confirmNewPassword}
            onPasswordChange={setconfirmNewPassword}
            name="confirm_new_password"
            id="confirm_new_password"
            placeholder="Confirm new password"
          />
        </span>
      </form>
    </div>
  );
};

export default PasswordInputDemo;
