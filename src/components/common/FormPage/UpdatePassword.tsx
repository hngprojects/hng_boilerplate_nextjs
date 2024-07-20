"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import EyesClosedIcon from "./EyesClosedIcon";
import EyesOpenIcon from "./EyesOpenIcon";
import PasswordChecks from "./PasswordChecks";
import SuccessModal from "./SuccessModal";

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const PasswordForm: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showChecks, setShowChecks] = useState<boolean>(false);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<{
    password: string;
    confirmPassword: string;
  }>({ password: "", confirmPassword: "" });

  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setShowChecks(e.target.value.length > 0);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordsMatch(newConfirmPassword === password);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = passwordSchema.safeParse({ password, confirmPassword });
    if (!result.success) {
      const errors = result.error.format();
      setFormErrors({
        password: errors.password?._errors[0] || "",
        confirmPassword: errors.confirmPassword?._errors[0] || "",
      });
      return;
    }

    setIsModalOpen(true);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const checks = {
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    length: password.length >= 8,
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <FormItem>
            <FormLabel htmlFor="password" className="capitalize text-[#434343]">
              Current Password
            </FormLabel>
            <FormControl>
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
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormItem>
            <FormLabel
              htmlFor="new-password"
              className="capitalize text-[#434343]"
            >
              New Password
            </FormLabel>
            <FormControl>
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
            </FormControl>

           {showChecks && <PasswordChecks checks={checks} />}

            <FormMessage>{formErrors.password}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel
              htmlFor="confirm-password"
              className="capitalize text-[#434343]"
            >
              Confirm New Password
            </FormLabel>
            <FormControl>
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
            </FormControl>
            <FormMessage>{formErrors.confirmPassword}</FormMessage>
            {!passwordsMatch && (
              <p className="text-sm text-red-600">Passwords do not match</p>
            )}
          </FormItem>

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
      </Form>

      {isModalOpen && <SuccessModal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default PasswordForm;
