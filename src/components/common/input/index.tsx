import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import CustomButton from "~/components/common/common-button/common-button";
import { cn } from "~/lib/utils";

const inputVariants = cva("text-sm rounded-md transition-colors", {
  variants: {
    variant: {
      primary:
        "border-primary text-primary focus:outline-none focus:border-primary",
      border:
        "border-border text-foreground focus:outline-none focus:border-border",
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
  labelClassName?: string;
  height?: string | number;
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
      labelClassName,
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
          <label
            className={cn(
              "flex border-0 text-sm font-medium text-foreground",
              labelClassName,
            )}
          >
            {label}
          </label>
        )}
        <div className="flex w-full items-center">
          <Comp
            className={cn(
              inputVariants({ variant, state }),
              "w-full border px-4 py-2",
              "flex h-10 rounded-md border-input bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              className,
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
