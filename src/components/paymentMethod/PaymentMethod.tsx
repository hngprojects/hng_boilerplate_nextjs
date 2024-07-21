"use client";

import Image from "next/image";

import CustomRadioButton from "./CustomRadioButton";

interface PaymentMethodProperties {
  image: string;
  header: string;
  width: number;
  height: number;
  active: boolean;
  onClick: () => void;
  forms: React.ReactNode;
}

const PaymentMethod: React.FC<PaymentMethodProperties> = ({
  image,
  header,
  active,
  onClick,
  forms,
  height,
  width,
}) => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-between border-2 p-6">
        <div className="flex items-center">
          <div onClick={onClick}>
            <CustomRadioButton
              name="custom-radio"
              value="option1"
              checked={active}
            />
          </div>
          <h1 className="text-center text-lg font-semibold">{header}</h1>
        </div>
        <div>
          <Image
            src={image}
            alt="MasterCard Symbol"
            className="mt-2 h-auto w-auto"
            height={height}
            width={width}
          />
        </div>
      </div>
      {forms && <div>{forms}</div>}
    </div>
  );
};

export default PaymentMethod;
