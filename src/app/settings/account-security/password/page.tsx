"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import PasswordCheck from "~/components/common/PasswordCheck";
import { PasswordInput } from "~/components/common/PasswordInput";
import PasswordSuccessfulModal from "~/components/modals/PasswordSuccessfulModal";
import PasswordSettingsHeading from "~/components/passwordSettings/passwordSettingsHeading";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters long")
      .refine(
        (value) => /[A-Z]/.test(value),
        "New password must contain at least one uppercase letter",
      )
      .refine(
        (value) => /\d/.test(value),
        "New password must contain at least one number",
      ),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .superRefine((data, context) => {
    if (data.newPassword !== data.confirmPassword) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords must match",
        path: ["confirmPassword"],
      });
    }
  });
type FormData = z.infer<typeof passwordSchema>;
const PasswordSettings = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(passwordSchema),
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const newPasswordValue = watch("newPassword");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const onSubmit = () => {
    openModal();
  };
  return (
    <div className="flex min-h-screen w-full items-start justify-start">
      <div className="absolute left-8 top-20 flex h-1/2 w-2/3 flex-col gap-4">
        <PasswordSettingsHeading
          heading="Password Settings"
          subheading="Update password for enhanced account security"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-[24px] lg:max-w-xl"
        >
          <span className="flex flex-col gap-[8px]">
            <Label htmlFor="current_password" className="text-base">
              Current Password
            </Label>
            <Controller
              name="currentPassword"
              control={control}
              render={({ field }) => (
                <PasswordInput
                  password={field.value}
                  onPasswordChange={field.onChange}
                  name="current_password"
                  id="current_password"
                  placeholder="Enter current password"
                />
              )}
            />
            {errors.currentPassword && (
              <p className="text-error">{errors.currentPassword.message}</p>
            )}
          </span>
          <span className="flex flex-col gap-[8px]">
            <Label htmlFor="new_password" className="text-base">
              New Password
            </Label>
            <Controller
              name="newPassword"
              control={control}
              render={({ field }) => (
                <PasswordInput
                  password={field.value}
                  onPasswordChange={(data: string) => {
                    field.onChange(data);
                    setIsFocused(true);
                  }}
                  name="new_password"
                  id="new_password"
                  placeholder="Enter new password"
                />
              )}
            />
            {isFocused && (
              <PasswordCheck
                password={newPasswordValue}
                minLength={8}
                onStrengthChange={() => {}}
              />
            )}
            {errors.newPassword && (
              <p className="text-error">{errors.newPassword.message}</p>
            )}
          </span>
          <span className="flex flex-col gap-[8px]">
            <Label htmlFor="confirm_new_password" className="text-base">
              Confirm New Password
            </Label>
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <PasswordInput
                  password={field.value}
                  onPasswordChange={field.onChange}
                  name="confirm_new_password"
                  id="confirm_new_password"
                  placeholder="Confirm new password"
                />
              )}
            />
            {errors.confirmPassword && (
              <p className="text-error">{errors.confirmPassword.message}</p>
            )}
          </span>
          <div className="flex w-2/6 flex-row gap-4">
            <Button variant={"outline"}>Cancel</Button>
            <Button type="submit" className="w-full bg-primary text-white">
              Update Password
            </Button>
          </div>
        </form>
        {isModalOpen && (
          <PasswordSuccessfulModal show={isModalOpen} onClose={closeModal} />
        )}
      </div>
    </div>
  );
};
export default PasswordSettings;
