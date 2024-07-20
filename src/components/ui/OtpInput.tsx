import React, { useEffect, useRef, useState } from "react";

interface OTPInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  numInputs: number;
  onInputChange: (value: string) => void;
}

const OtpInput: React.FC<OTPInputProps> = ({
  numInputs,
  onInputChange,
  ...props
}) => {
  const [otp, setOtp] = useState<string[]>(Array(numInputs).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value.slice(0, 1); // Restrict to one character
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onInputChange(newOtp.join(""));

    if (value && index < numInputs - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  //   const handleKeyDown = (
  //     event: React.KeyboardEvent<HTMLInputElement>,
  //     index: number,
  //   ) => {
  //     if (event.key === "Backspace") {
  //       if (otp[index] === "") {
  //         if (index > 0) {
  //           inputRefs.current[index - 1]?.focus();
  //         }
  //       } else {
  //         const newOtp = [...otp];
  //         newOtp[index] = "";
  //         setOtp(newOtp);
  //         onInputChange(newOtp.join(""));
  //       }
  //     }
  //   };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="flex gap-2">
      {Array.from({ length: numInputs }, (_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(index, e)}
          //   onKeyDown={(e) => handleKeyDown(e, index)}
          className={`h-[60px] w-[60px] border text-center ${otp[index] ? "border-[#EF4444]" : "border-[#CBD5E1]"} rounded-md focus:outline-none`}
          {...props}
        />
      ))}
    </div>
  );
};

export default OtpInput;
