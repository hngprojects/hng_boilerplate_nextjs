export interface FormResponse {
  success: boolean;
  message: string;
}

export async function submitForm<T>(data: T): Promise<FormResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_PROBE_URL}/api/v1/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();

    return { success: true, message: responseData.message };
  } catch {
    return {
      success: false,
      message: "There was an error submitting your form. Please try again.",
    };
  }
}
