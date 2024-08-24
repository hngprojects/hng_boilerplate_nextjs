"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import PasswordSuccessfulModal from "~/components/common/modals/password-successful";
import { toast } from "~/components/ui/use-toast";
import { cn } from "~/lib/utils";
import { passwordSchema, type PasswordFormData } from "./schema";

type PasswordField = "current" | "new" | "confirmNew";

const Password = () => {
  const { data } = useSession();

  const [open, setOpen] = useState<boolean>(false);
  const [isPending, setIsPending] = useState(false);

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirmNew: false,
  });

  const [formData, setFormData] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    mode: "all",
  });

  const submitHandler = async (values: PasswordFormData) => {
    try {
      setIsPending(true);
      const payload = {
        old_password: values.currentPassword,
        new_password: values.newPassword,
        confirm_new_password: values.confirmPassword,
      };
      const baseUrl = await getApiUrl();
      const API_URL = `${baseUrl}/api/v1/auth/password`;

      await axios.put(API_URL, payload, {
        headers: {
          Authorization: `Bearer ${data?.access_token}`,
        },
      });
      setOpen(true);
      reset({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error) {
      const errorMessage = (error as HttpError)?.response?.data?.message;
      toast({
        title: "Error",
        description: errorMessage,
      });
      setIsPending(false);
    } finally {
      setIsPending(false);
    }
  };

  const togglePasswordVisibility = (field: PasswordField) => {
    setShowPassword((previousState) => ({
      ...previousState,
      [field]: !previousState[field],
    }));
  };

  const disabled =
    !formData.confirmPassword || !formData.oldPassword || !formData.password;

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
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mb-6 grid gap-4">
          <div className="relative">
            <CustomInput
              placeholder="Enter current password"
              label="Current Password"
              className="border-border"
              type={`${showPassword.current ? "text" : "password"}`}
              name="oldPassword"
              value={formData.oldPassword}
              onChange={formDataHandler}
            />
            <span
              className="absolute right-2 top-9 cursor-pointer"
              onClick={() => togglePasswordVisibility("current")}
            >
              {showPassword.current ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          <div className="relative">
            <CustomInput
              placeholder="Enter new password"
              label="New Password"
              className="border-border"
              type={`${showPassword.new ? "text" : "password"}`}
              name="password"
              value={formData.password}
              onChange={formDataHandler}
            />
            <span
              className="absolute right-2 top-9 cursor-pointer"
              onClick={() => togglePasswordVisibility("new")}
            >
              {showPassword.new ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          </div>
          <div className="relative">
            <CustomInput
              placeholder="Confirm new password"
              label="Confirm new Password"
              className="border-border"
              type={`${showPassword.confirmNew ? "text" : "password"}`}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={formDataHandler}
            />
            <span
              className="absolute right-2 top-9 cursor-pointer"
              onClick={() => togglePasswordVisibility("confirmNew")}
            >
              {showPassword.confirmNew ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </span>
          <div className="">
            <div className="flex w-full flex-col gap-2 rounded-md border-border text-sm text-primary transition-colors focus:border-primary focus:outline-none">
              <label className="flex border-0 text-sm font-medium text-foreground">
                Current Password
              </label>
              <div className="flex w-full items-center">
                <input
                  className={cn(
                    "flex h-10 w-full flex-col gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    errors.currentPassword && "border-red-500",
                  )}
                  placeholder="Enter current password"
                  type="password"
                  {...register("currentPassword")}
                />
              </div>
            </div>
            {errors.currentPassword && (
              <p className="mt-0.5 text-xs text-red-500">
                {errors.currentPassword?.message}
              </p>
            )}
          </div>
          <div className="">
            <div className="flex w-full flex-col gap-2 rounded-md border-border text-sm text-primary transition-colors focus:border-primary focus:outline-none">
              <label className="flex border-0 text-sm font-medium text-foreground">
                New Password
              </label>
              <div className="flex w-full items-center">
                <input
                  className={cn(
                    "flex h-10 w-full flex-col gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    errors.newPassword && "border-red-500",
                  )}
                  placeholder="Enter new password"
                  type="password"
                  {...register("newPassword")}
                />
              </div>
            </div>
            {errors.newPassword && (
              <p className="mt-0.5 text-xs text-red-500">
                {errors.newPassword?.message}
              </p>
            )}
          </div>
          <div className="">
            <div className="flex w-full flex-col gap-2 rounded-md border-border text-sm text-primary transition-colors focus:border-primary focus:outline-none">
              <label className="flex border-0 text-sm font-medium text-foreground">
                Confirm new password
              </label>
              <div className="flex w-full items-center">
                <input
                  className={cn(
                    "flex h-10 w-full flex-col gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    errors.confirmPassword && "border-red-500",
                  )}
                  placeholder="Confrim new Password"
                  type="password"
                  {...register("confirmPassword")}
                />
              </div>
            </div>
            {errors.confirmPassword && (
              <p className="mt-0.5 text-xs text-red-500">
                {errors.confirmPassword?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-start gap-6">
          <CustomButton
            type="button"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            Cancel
          </CustomButton>
          <CustomButton
            isDisabled={!isValid}
            type="submit"
            className={`bg-primary ${isPending && "opacity-50"}`}
            isLoading={isPending}
          >
            Update Password
          </CustomButton>
        </div>
      </form>
      <PasswordSuccessfulModal onClose={() => setOpen(!open)} show={open} />
    </div>
  );
};

interface HttpError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export default Password;
