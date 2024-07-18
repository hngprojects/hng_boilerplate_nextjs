"use client";

import { useState } from "react";

// import { PasswordInput } from "~/components/common/PasswordInput";
import { PasswordInput } from "../components/common/PasswordInput";

export default function Home() {
  const [password, setPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [confirmNewPassword, setconfirmNewPassword] = useState("");

  return (
    <div className="w-full h-screen flex flex-col gap-16 justify-center items-center p-12 px-4 lg:p-24">
      
      <form className="w-full lg:max-w-xl flex flex-col gap-[24px]">
        <span className="flex flex-col gap-[8px]">
          <label
            htmlFor="current_password"
            className="text-[#434343] text-base"
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
          <label htmlFor="new_password" className="text-[#434343] text-base">
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
            className="text-[#434343] text-base"
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
}
