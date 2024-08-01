"use client";

import axios from "axios";
import { SetStateAction, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/common/input/input";
import PasswordSuccessfulModal from "~/components/common/modals/password-successful";

const Password = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState<string>("");

  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  const handleNewPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const password = event.target.value;
    setNewPassword(password);

    setIsLengthValid(password.length >= 8);
    setHasUppercase(/[A-Z]/.test(password));
    setHasNumber(/\d/.test(password));
  };

  const handleChangePassword = async () => {
    if (!isLengthValid || !hasUppercase || !hasNumber) {
      setError("New password does not meet all the criteria.");
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError("Password does not match");
      return;
    }

    try {
      await axios.patch(
        "https://deployment.api-expressjs.boilerplate.hng.tech/api/v1/auth/change-password",
        {
          currentPassword,
          newPassword,
        },
      );

      setOpen(true);
      setError("");
    } catch {
      setError("An error occurred while updating the password.");
    }
  };

  const handleCancel = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setOpen(false);
    setError("");
    setIsLengthValid(false);
    setHasUppercase(false);
    setHasNumber(false);
  };

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
            value={currentPassword}
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setCurrentPassword(event.target.value)
            }
          />
          <CustomInput
            placeholder="Enter new password"
            label="New Password"
            className="border-border"
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />

          {newPassword && (
            <div className="mb-4 text-sm">
              <p className={isLengthValid ? "text-green-500" : "text-red-500"}>
                {isLengthValid ? "✔" : "✘"} At least 8 characters long
              </p>
              <p className={hasUppercase ? "text-green-500" : "text-red-500"}>
                {hasUppercase ? "✔" : "✘"} Contains at least 1 uppercase letter
              </p>
              <p className={hasNumber ? "text-green-500" : "text-red-500"}>
                {hasNumber ? "✔" : "✘"} Contains at least 1 number
              </p>
            </div>
          )}

          <CustomInput
            placeholder="Confirm new password"
            label="Confirm New Password"
            className="border-border"
            type="password"
            value={confirmNewPassword}
            onChange={(event: { target: { value: SetStateAction<string> } }) =>
              setConfirmNewPassword(event.target.value)
            }
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>

        <div className="flex items-center justify-start gap-6">
          <CustomButton variant="outline" onClick={handleCancel}>
            Cancel
          </CustomButton>
          <CustomButton className="bg-primary" onClick={handleChangePassword}>
            Update Password
          </CustomButton>
        </div>
      </div>
      <PasswordSuccessfulModal onClose={() => setOpen(!open)} show={open} />
    </div>
  );
};

export default Password;
