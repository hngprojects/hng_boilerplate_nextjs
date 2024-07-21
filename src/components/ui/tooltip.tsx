"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as React from "react";

import { cn } from "~/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

type ColorVariant = "primary" | "secondary" | "neutral";

type ColorValue = { bgColor: string; textColor: string; arrowColor: string };
// { primary: ColorVal; secondary: ColorVal; neutral: ColorVal }
const colorStyles: Record<ColorVariant, ColorValue> = {
  primary: {
    bgColor: "bg-[#F97316]",
    textColor: "text-white",
    arrowColor: "fill-[#F97316]",
  },
  secondary: {
    bgColor: "bg-white",
    textColor: "text-[#F97316]",
    arrowColor: "fill-white",
  },
  neutral: {
    bgColor: "bg-white",
    textColor: "text-[#0A0A0A]",
    arrowColor: "fill-white",
  },
};

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    arrowPosition?: "top" | "bottom" | "left" | "right";
    header?: string;
    body?: string;
    subText?: string;
    colorVariant?: "primary" | "secondary" | "neutral";
  }
>(
  (
    {
      className,
      arrowPosition = "top",
      sideOffset = 4,
      header,
      body,
      subText,
      colorVariant = "primary",
      ...properties
    },
    reference,
  ) => {
    const colorVariantKey: ColorVariant = colorVariant;

    const { bgColor, textColor, arrowColor } = colorStyles[colorVariantKey];

    return (
      <TooltipPrimitive.Content
        ref={reference}
        side={arrowPosition}
        sideOffset={sideOffset}
        className={cn(
          `z-50 flex h-[41px] w-[189px] flex-col gap-[12px] overflow-hidden rounded-md p-[12px] px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 lg:h-[94px] lg:w-[384px] lg:!pb-[16px] xl:h-[132px] xl:w-[384px]`,
          bgColor,
          textColor,
          className,
        )}
        style={{ boxShadow: "0px 3px 14px 3px #0A39B01F" }}
        {...properties}
      >
        {header && (
          <div className="hidden text-[14px] font-semibold leading-[16.94px] lg:block">
            {header}
          </div>
        )}
        {body && (
          <div className="lg:clamp-2 mb-1 overflow-hidden truncate text-[14px] font-medium leading-[16.94px] lg:whitespace-normal">
            {body}
          </div>
        )}
        {subText && (
          <div className="xl:clamp-2 hidden overflow-hidden whitespace-normal text-[12px] font-[400] leading-[14.52px] xl:block">
            {subText}
          </div>
        )}
        <TooltipPrimitive.Arrow className={arrowColor} />
      </TooltipPrimitive.Content>
    );
  },
);

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
