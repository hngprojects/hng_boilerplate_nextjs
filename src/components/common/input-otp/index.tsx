import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { cn } from "~/lib/utils";

interface Properties {
  maxLength?: number;
  slotClassName?: string;
  className?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
}

export function InputOtp(properties: Properties) {
  const {
    maxLength = 6,
    slotClassName,
    className,
    onChange,
    onComplete,
    ...rest
  } = properties;
  return (
    <InputOTP
      maxLength={maxLength}
      onChange={onChange}
      onComplete={onComplete}
      {...rest}
    >
      <InputOTPGroup className={cn("flex gap-[10px] md:gap-4", className)}>
        {/* eslint-disable unicorn/no-useless-spread */}
        {/* eslint-disable unicorn/no-new-array */}
        {[...new Array(maxLength)].map((_, index) => (
          <InputOTPSlot key={index} index={index} className={slotClassName} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
}
