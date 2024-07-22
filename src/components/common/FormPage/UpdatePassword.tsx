"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import PasswordChecks from "./PasswordChecks";

interface VisibilityState {
  currentPassword: boolean;
  newPassword: boolean;
  confirmPassword: boolean;
}

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/\d/, "Password must contain at least one number")
      .regex(
        /[!"#$%&()*,.:<>?@^{|}]/,
        "Password must contain at least one special character",
      ),
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
  const [isPasswordVisible, setIsPasswordVisible] = useState<VisibilityState>({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });
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

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setShowChecks(event.target.value.length > 0);
  };

  const handleConfirmPasswordChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
    setPasswordsMatch(newConfirmPassword === password);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = passwordSchema.safeParse({ password, confirmPassword });
    if (!result.success) {
      const errors = result.error.format();
      setFormErrors({
        password: errors.password?._errors[0] || "",
        confirmPassword: errors.confirmPassword?._errors[0] || "",
      });
      return;
    }
  };

  const togglePasswordVisibility = (field: keyof VisibilityState) => {
    setIsPasswordVisible((previous) => ({
      ...previous,
      [field]: !previous[field],
    }));
  };

  const checks = {
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    passwordLength: password.length >= 8,
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <FormItem>
            <FormLabel
              htmlFor="password"
              className="font-normal capitalize opacity-80"
            >
              Current Password
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  id="password"
                  type={isPasswordVisible.currentPassword ? "text" : "password"}
                  placeholder="Enter current password"
                  required
                  className="w-full py-2 text-sm font-medium opacity-60"
                />
                <span
                  onClick={() => togglePasswordVisibility("currentPassword")}
                  className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                >
                  {isPasswordVisible.currentPassword ? <Eye /> : <EyeOff />}
                </span>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>

          <FormItem>
            <FormLabel
              htmlFor="new-password"
              className="font-normal capitalize opacity-80"
            >
              New Password
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  id="new-password"
                  type={isPasswordVisible.newPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={password}
                  required
                  className="w-full py-2 text-sm font-medium opacity-60"
                  onChange={handlePasswordChange}
                />
                <span
                  onClick={() => togglePasswordVisibility("newPassword")}
                  className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                >
                  {isPasswordVisible.newPassword ? <Eye /> : <EyeOff />}
                </span>
              </div>
            </FormControl>

            {showChecks && <PasswordChecks checks={checks} />}

            <FormMessage>{formErrors.password}</FormMessage>
          </FormItem>

          <FormItem>
            <FormLabel
              htmlFor="confirm-password"
              className="font-normal capitalize opacity-80"
            >
              Confirm New Password
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={isPasswordVisible.confirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  required
                  className="w-full py-2 text-sm font-medium opacity-60"
                  onChange={handleConfirmPasswordChange}
                />
                <span
                  onClick={() => togglePasswordVisibility("confirmPassword")}
                  className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3"
                >
                  {isPasswordVisible.confirmPassword ? <Eye /> : <EyeOff />}
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
              className="rounded-md border border-border bg-white capitalize text-foreground"
            >
              Cancel
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-md bg-primary text-sm font-medium capitalize text-background"
                >
                  Show Dialog
                </Button>
              </AlertDialogTrigger>

              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Password Successfully Updated!
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Your password has been successfully updated! You can now log
                    in with your new password.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </form>
      </Form>
    </>
  );
};

export default PasswordForm;
