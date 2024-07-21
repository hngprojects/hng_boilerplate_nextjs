import React, { forwardRef } from "react";

import { cn } from "~/lib/utils";

export interface SVGProperties extends React.SVGAttributes<SVGSVGElement> {
  asChild?: boolean;
  useGsap?: boolean;
  children?: React.ReactNode;
  href?: string;
}

const LoadingSpinner = forwardRef<SVGSVGElement, SVGProperties>(
  ({ className, ...properties }, reference) => {
    return (
      <svg
        stroke="#fff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        ref={reference}
        className={cn("size-6", className)}
        {...properties}
      >
        <g className="spinner_V8m1">
          <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3"></circle>
        </g>
      </svg>
    );
  },
);

LoadingSpinner.displayName = "LoadingSpinner";
export default LoadingSpinner;
