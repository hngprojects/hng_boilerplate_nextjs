"use client";

import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { useSession } from "next-auth/react";
import { ChangeEvent, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import CustomInput from "~/components/common/input/input";
import PasswordSuccessfulModal from "~/components/common/modals/password-successful";
import { toast } from "~/components/ui/use-toast";

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
  });
  const formDataHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  const submit = async () => {
    if (formData.password !== formData.confirmPassword) {
      return toast({
        title: "Warning!",
        description: "Password does not match",
      });
    }
    try {
      setIsPending(true);
      const baseUrl = await getApiUrl();
      const API_URL = `${baseUrl}/api/v1/auth/change-password`;

      const payload = {
        oldPassword: formData.oldPassword,
        newPassword: formData.password,
      };

      await axios.post(API_URL, payload, {
        headers: {
          Authorization: `Bearer ${data?.access_token}`,
        },
      });
      setOpen(true);
      setFormData({
        oldPassword: "",
        password: "",
        confirmPassword: "",
      });
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
      <div>
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
          </div>
        </div>
        <div className="flex items-center justify-start gap-6">
          <CustomButton variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </CustomButton>
          <CustomButton
            isDisabled={disabled}
            onClick={submit}
            className="bg-primary"
            isLoading={isPending}
          >
            Update Password
          </CustomButton>
        </div>
      </div>
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
