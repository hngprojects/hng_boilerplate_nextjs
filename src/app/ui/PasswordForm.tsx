"use client";

import { useState } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import CheckmarkIcon from "./CheckmarkIcon";
import EyesClosedIcon from "./EyesClosedIcon";
import EyesOpenIcon from "./EyesOpenIcon";
import PasswordChecks from "./PasswordChecks";
import SuccessModal from "./SuccessModal";

const PasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showChecks, setShowChecks] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const checks = {
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    length: password.length >= 8,
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowChecks(e.target.value.length > 0);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordsMatch(newConfirmPassword === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordsMatch && checks.uppercase && checks.number && checks.length) {
      setIsModalOpen(true);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full space-y-5">
        <div className="space-y-2">
          <Label htmlFor="password" className="capitalize text-[#434343]">
            Current Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter current password"
              required
              className="w-full py-2 text-sm font-medium text-[#939393]"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
            >
              {isPasswordVisible ? <EyesOpenIcon /> : <EyesClosedIcon />}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="new-password" className="capitalize text-[#434343]">
            New Password
          </Label>
          <div className="relative">
            <Input
              id="new-password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter new password"
              value={password}
              required
              className="w-full py-2 text-sm font-medium text-[#939393]"
              onChange={handlePasswordChange}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
            >
              {isPasswordVisible ? <EyesOpenIcon /> : <EyesClosedIcon />}
            </span>
          </div>
        </div>

        {showChecks && <PasswordChecks checks={checks} />}

        <div className="space-y-2">
          <Label
            htmlFor="confirm-password"
            className="capitalize text-[#434343]"
          >
            Confirm New Password
          </Label>
          <div className="relative">
            <Input
              id="confirm-password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Confirm new password"
              value={confirmPassword}
              required
              className="w-full py-2 text-sm font-medium text-[#939393]"
              onChange={handleConfirmPasswordChange}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
            >
              {isPasswordVisible ? <EyesOpenIcon /> : <EyesClosedIcon />}
            </span>
          </div>
          {!passwordsMatch && (
            <p className="text-sm text-red-600">Passwords do not match</p>
          )}
        </div>

        <div className="mt-2 flex space-x-6">
          <Button
            type="button"
            className="rounded-md border border-[#E2E8F0] bg-white capitalize text-[#0F172A]"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="rounded-md bg-[#F97316] text-sm font-medium capitalize text-white"
          >
            Update Password
          </Button>
        </div>
      </form>

      {isModalOpen && <SuccessModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default PasswordForm;
