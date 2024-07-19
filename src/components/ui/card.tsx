<<<<<<< HEAD
import * as React from "react";

import { cn } from "~/lib/utils";
=======
import * as React from "react"

import { cn } from "~/lib/utils"
>>>>>>> 5f988f9 (feat(HGN-53): created the waitlist hero card component)

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...properties}
  />
));
Card.displayName = "Card";
=======
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"
>>>>>>> 5f988f9 (feat(HGN-53): created the waitlist hero card component)

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...properties}
  />
));
CardHeader.displayName = "CardHeader";
=======
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"
>>>>>>> 5f988f9 (feat(HGN-53): created the waitlist hero card component)

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
<<<<<<< HEAD
>(({ className, ...properties }, reference) => (
  <h3
    ref={reference}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...properties}
  />
));
CardTitle.displayName = "CardTitle";
=======
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"
>>>>>>> 5f988f9 (feat(HGN-53): created the waitlist hero card component)

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
<<<<<<< HEAD
>(({ className, ...properties }, reference) => (
  <p
    ref={reference}
    className={cn("text-sm text-muted-foreground", className)}
    {...properties}
  />
));
CardDescription.displayName = "CardDescription";
=======
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"
>>>>>>> 5f988f9 (feat(HGN-53): created the waitlist hero card component)

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className, ...properties }, reference) => (
  <div ref={reference} className={cn("p-6 pt-0", className)} {...properties} />
));
CardContent.displayName = "CardContent";
=======
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"
>>>>>>> 5f988f9 (feat(HGN-53): created the waitlist hero card component)

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
<<<<<<< HEAD
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn("flex items-center p-6 pt-0", className)}
    {...properties}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
=======
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
>>>>>>> 5f988f9 (feat(HGN-53): created the waitlist hero card component)
