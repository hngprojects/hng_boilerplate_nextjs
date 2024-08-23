import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

import { cn } from "~/lib/utils";
import { PasswordFormData } from "./schema";

type PasswordFieldProperties = {
  register: UseFormRegister<PasswordFormData>;
  name: "currentPassword" | "newPassword" | "confirmPassword";
  errorMessage: string | undefined;
};

function PasswordField({
  register,
  name,
  errorMessage,
}: PasswordFieldProperties) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((previousState) => !previousState);
  };
  return (
    <div
      className={cn(
        "flex h-10 w-full items-center gap-2 rounded-md border border-border bg-background px-4 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary",
        errorMessage && "border-red-500",
      )}
    >
      <input
        className={cn(
          "w-full bg-transparent text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        )}
        placeholder="Enter new password"
        type={showPassword ? "text" : "password"}
        {...register(name)}
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        tabIndex={-1}
        className="ml-2 text-gray-600 hover:text-gray-800 focus:outline-none"
      >
        {showPassword ? (
          <EyeOff className="size-4" />
        ) : (
          <Eye className="size-4" />
        )}
      </button>
    </div>
  );
}

export default PasswordField;
