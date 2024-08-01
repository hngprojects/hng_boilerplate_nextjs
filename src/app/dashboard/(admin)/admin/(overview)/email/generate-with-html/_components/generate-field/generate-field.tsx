"use client";

import { useRouter } from "next/navigation";

import CustomInput from "~/components/common/input/input";

const GenerateField = () => {
  const router = useRouter();
  return (
    <div className="mb-6 w-full max-w-[666px]">
      <CustomInput
        label="HTML Link"
        placeholder="Enter your link here"
        isButtonVisible={true}
        buttonContent="Generate"
        onButtonClick={() =>
          router.push("/admin/email/generate-with-html/preview-template")
        }
      />
    </div>
  );
};

export default GenerateField;
