import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-default text-default-foreground shadow",
        primary: "bg-primary text-primary-foreground shadow",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive-hover",
        subtle:
          "bg-subtle text-subtle-foreground shadow-sm hover:bg-subtle-hover",
        loading:
          "bg-loading text-loading-foreground shadow-sm hover:bg-loading-hover opacity-50 hover:opacity-100 transition-opacity duration-500 ease-out",
        outline:
          "bg-outline text-outline-foreground shadow-sm border border-border hover:bg-outline-hover",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-link underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        link: "h-9 px-0 py-2",
        icon: "px-2 py-2",
        circle: "px-3 py-3 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProperties
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProperties>(
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

export { Button, buttonVariants };
