"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import PropTypes from "prop-types";
import * as React from "react";

import { cn } from "~/lib/utils";

interface AvatarProperties {
  className?: string;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarProperties
>(({ className, ...properties }, reference) => (
  <AvatarPrimitive.Root
    ref={reference}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...properties}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
Avatar.propTypes = {
  className: PropTypes.string,
};

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> &
    AvatarProperties
>(({ className, ...properties }, reference) => (
  <AvatarPrimitive.Image
    ref={reference}
    className={cn("aspect-square h-full w-full", className)}
    {...properties}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
AvatarImage.propTypes = {
  className: PropTypes.string,
};

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> &
    AvatarProperties
>(({ className, ...properties }, reference) => (
  <AvatarPrimitive.Fallback
    ref={reference}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...properties}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
AvatarFallback.propTypes = {
  className: PropTypes.string,
};

export { Avatar, AvatarImage, AvatarFallback };
