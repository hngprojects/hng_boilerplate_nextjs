"use client";

import Image from "next/image";

import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

interface PaymentMethodProperties {
  image: string;
  header: string;
  width: number;
  height: number;
  forms: React.ReactNode;
  selectedValue: string;
  onChange: (value: string) => void;
}

const PaymentMethod: React.FC<PaymentMethodProperties> = ({
  image,
  header,
  forms,
  height,
  width,
  selectedValue,
  onChange,
}) => {
  const handleRadioChange = () => {
    onChange(header);
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-between border-2 p-6">
        <div className="flex items-center">
          <RadioGroup value={selectedValue} onValueChange={handleRadioChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={header} id={`radio-${header}`} />
              <Label htmlFor={`radio-${header}`}>{header}</Label>
            </div>
          </RadioGroup>
          <h1 className="pl-5 text-center text-lg font-semibold"></h1>
        </div>
        <div>
          <Image
            src={image}
            alt={header}
            className="mt-2 h-auto w-auto"
            height={height}
            width={width}
          />
        </div>
      </div>
      {forms}
    </div>
  );
};

export default PaymentMethod;
