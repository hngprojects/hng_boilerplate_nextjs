import * as React from "react";

import { cn } from "~/lib/utils";

export interface InputProperties
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProperties>(
  ({ className, type, ...properties }, reference) => {
    return (
      <input
        type={type}
        className={cn("", className)}
        ref={reference}
        {...properties}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
