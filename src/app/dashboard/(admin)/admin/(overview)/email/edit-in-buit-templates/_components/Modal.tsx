"use client";

import React, { ChangeEvent, useState } from "react";

import Input from "./Input";

interface InputProperties {
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

interface ModalProperties {
  inputs: InputProperties[];
  buttonText?: string;
}

const Modal: React.FC<ModalProperties> = ({ inputs, buttonText = "Save" }) => {
  const initialFormValues: { [key: string]: string } = {};
  for (const input of inputs) {
    initialFormValues[input.label] = "";
  }

  const [formValues, setFormValues] = useState<{ [key: string]: string }>(
    initialFormValues,
  );

  const handleChange =
    (label: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setFormValues((previousValues) => ({
        ...previousValues,
        [label]: event.target.value,
      }));
    };

  return (
    <div className="inline-block transform overflow-hidden rounded-md bg-white px-4 pb-4 pt-5 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
      <div>
        <div className="mt-3 sm:mt-5">
          <div className="mt-2">
            {inputs.map((input) => (
              <Input
                key={input.label}
                label={input.label}
                value={formValues[input.label] || ""}
                onChange={handleChange(input.label)}
                placeholder={input.placeholder}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-5 flex sm:mt-6">
        <button className="inline-flex justify-center rounded-md border border-transparent bg-orange-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:text-sm">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Modal;
