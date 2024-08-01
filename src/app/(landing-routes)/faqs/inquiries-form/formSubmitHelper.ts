// formSubmitHelper.ts
import { z } from "zod";

import FormSchema from "./formSchema";

export interface FormResponse {
  success: boolean;
  message: string;
}

export async function submitForm(
  formData: z.infer<typeof FormSchema>,
): Promise<FormResponse> {
  try {
    const response = await fetch(
      "https://deployment.api-php.boilerplate.hng.tech/api/v1/inquiries",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    return {
      success: result.success,
      message: result.message,
    };
  } catch {
    return {
      success: false,
      message: "An error occurred while submitting the form.",
    };
  }
}
