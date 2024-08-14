import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "~/lib/utils";

const textareaVariants = cva("text-sm rounded-md transition-colors", {
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
  },
  defaultVariants: {
    variant: "primary",
    state: "default",
  },
});

export interface TextareaProperties
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  asChild?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProperties>(
  (
    { variant, state, asChild = false, className, ...properties },
    reference,
  ) => {
    const Comp = asChild ? Slot : "textarea";

    return (
      <Comp
        className={cn(
          textareaVariants({ variant, state }),
          "w-full border px-4 py-2",
          "flex h-24 rounded-md border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={reference}
        {...properties}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
