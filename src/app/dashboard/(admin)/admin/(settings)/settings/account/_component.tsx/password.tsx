"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import PasswordSuccessfulModal from "~/components/common/modals/password-successful";
import { toast } from "~/components/ui/use-toast";
import PasswordField from "./password-field";
import { passwordSchema, type PasswordFormData } from "./schema";

const Password = () => {
  const { data } = useSession();

  const [open, setOpen] = useState<boolean>(false);
  const [isPending, setIsPending] = useState(false);

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
          <div className="">
            <div className="flex w-full flex-col gap-2 rounded-md border-border text-sm text-primary transition-colors focus:border-primary focus:outline-none">
              <label className="flex border-0 text-sm font-medium text-foreground">
                Current Password
              </label>
              <div className="flex w-full items-center">
                <PasswordField
                  register={register}
                  name="currentPassword"
                  errorMessage={errors?.currentPassword?.message}
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
                <PasswordField
                  register={register}
                  name="newPassword"
                  errorMessage={errors?.newPassword?.message}
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
                <PasswordField
                  register={register}
                  name="confirmPassword"
                  errorMessage={errors?.confirmPassword?.message}
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
