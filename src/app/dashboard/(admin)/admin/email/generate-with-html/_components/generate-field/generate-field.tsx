"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import CustomInput from "~/components/common/input/input";

const GenerateField = () => {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  const handleButtonClick = () => {
    router.push(
      `/dashboard/admin/email/generate-with-html/preview-template?content=${encodeURIComponent(inputValue)}`,
    );
  };
  return (
    <div className="mb-6 w-full max-w-[666px]">
      <CustomInput
        label="HTML Link"
        placeholder="Enter your link here"
        isButtonVisible={true}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        buttonContent="Generate"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default GenerateField;
