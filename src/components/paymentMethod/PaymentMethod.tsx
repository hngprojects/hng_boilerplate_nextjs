"use client";

import Image from "next/image";
import React, { ReactNode } from "react";

import CustomRadioButton from "./CustomRadioButton";

interface PaymentMethodProperties {
  image: string;
  header: string;
  active: boolean;
  onClick: () => void;
  forms: ReactNode;
}

const PaymentMethod: React.FC<PaymentMethodProperties> = ({
  image,
  header,
  active,
  onClick,
  forms,
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
            width={40}
            height={40}
            className="mt-2 h-10 w-10"
          />
        </div>
      </div>
      {forms}
    </div>
  );
};

export default PaymentMethod;
