import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import CustomButton from "~/components/common/Button/button";
import { cn } from "~/lib/utils";

const inputVariants = cva("text-sm  rounded-md transition-colors ", {
  variants: {
    variant: {
      primary:
        "border-primary text-primary focus:outline-none focus:ring-1 focus:ring-primary",
      border:
        "border-border text-foreground focus:outline-none focus:ring-1 focus:ring-border",
    },
    state: {
      default: "border-border",
      active: "border-primary",
      invalid: "border-error",
    },
    gap: {
      sm: "gap-1.5",
      md: "gap-2",
      lg: "gap-2.5",
    },
    labelPosition: {
      top: "flex-col",
      side: "flex-row",
    },
  },
  defaultVariants: {
    variant: "primary",
    state: "default",
    gap: "md",
    labelPosition: "top",
  },
});

export interface InputProperties
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  asChild?: boolean;
  isButtonVisible?: boolean;
  buttonContent?: string;
  buttonDisabled?: boolean;
  onButtonClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProperties>(
  (
    {
      label,
      variant,
      state,
      gap,
      labelPosition,
      asChild = false,
      isButtonVisible = false,
      buttonContent,
      buttonDisabled = false,
      onButtonClick,
      className,
      ...properties
    },
    reference,
  ) => {
    const Comp = asChild ? Slot : "input";

    return (
      <div
        className={cn(
          "flex w-full",
          {
            "items-center": labelPosition === "side",
          },
          inputVariants({ labelPosition, gap }),
        )}
      >
        {label && (
          <label className="flex border-0 text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <div className="flex items-center">
          <Comp
            className={cn(
              inputVariants({ variant, state, className }),
              "w-full border px-4 py-2",
            )}
            ref={reference}
            {...properties}
          />
          {isButtonVisible && (
            <div>
              <CustomButton
                variant={`${buttonDisabled ? "subtle" : "primary"}`}
                isLeftIconVisible={false}
                isLoading={false}
                isDisabled={buttonDisabled}
                className={`ml-2 border ${buttonDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}
                onClick={onButtonClick}
              >
                {buttonContent}
              </CustomButton>
            </div>
          )}
        </div>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input, inputVariants };
