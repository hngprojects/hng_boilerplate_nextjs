import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";

interface Properties {
  onChange?: (value: string) => void;
  onComplete?: () => void;
  slotClassName?: string;
  slotNumber?: number;
  className?: string;
  containerClassName?: string;
}

export function InputOtp({
  onChange,
  onComplete,
  slotNumber = 6,
  slotClassName,
  className,
  // containerClassName,
}: Properties) {
  return (
    <InputOTP
      maxLength={6}
      onComplete={onComplete}
      onChange={onChange}
      containerClassName={className}
    >
      <InputOTPGroup className={"flex gap-[10px] md:gap-4"}>
        {/* eslint-disable unicorn/no-new-array */}
        {/* eslint-disable unicorn/no-useless-spread */}
        {[...new Array(slotNumber)].map((_, index) => (
          <InputOTPSlot key={index} index={index} className={slotClassName} />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
}
