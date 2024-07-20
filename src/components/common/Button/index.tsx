import { Slot } from "@radix-ui/react-slot";
import { VariantProps } from "class-variance-authority";
import React from "react";

import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export interface ButtonProperties
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProperties>(
  ({ className, variant, size, asChild = false, ...properties }, reference) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={reference}
        {...properties}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };

export { buttonVariants } from "~/components/ui/button";
