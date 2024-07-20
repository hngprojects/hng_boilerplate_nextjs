"use client";

import React, { useState } from "react";

import OtpInput from "../../components/ui/OtpInput";

const GuidePage: React.FC = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  return (
    <div className="flex min-h-screen w-[100vw] flex-col items-center justify-center p-2">
      <h1 className="mb-4 text-3xl font-bold">OTP Input Component Guide</h1>
      <p className="mb-4">
        This guide demonstrates how to use the OtpInput component.
      </p>

      <div className="mb-4 rounded-md bg-gray-100 p-4 shadow-md">
        <h2 className="mb-2 text-xl font-semibold">Preview</h2>
        <OtpInput numInputs={6} onInputChange={handleOtpChange} />
        <p className="mt-2">Entered OTP: {otp}</p>
      </div>

      <div className="rounded-md bg-gray-100 p-4 shadow-md">
        <h2 className="mb-2 text-xl font-semibold">Usage</h2>
        <pre className="rounded-md bg-gray-900 p-2 text-white">
          <code>
            {`import React, { useState } from 'react';
import OtpInput from '../../components/ui/OtpInput';

const ExampleComponent: React.FC = () => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };

  return (
    <div>
      <OtpInput numInputs={6} onInputChange={handleOtpChange} />
      <p>Entered OTP: {otp}</p>
    </div>
  );
};

export default ExampleComponent;`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default GuidePage;
