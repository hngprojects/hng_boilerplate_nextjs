export interface FormResponse {
  success: boolean;
  message: string;
}

export async function submitForm(): Promise<FormResponse> {
  const dummyData = [
    {
      success: true,
      message: "Your question has been submitted successfully",
    },
    {
      success: false,
      message: "There was an error submitting your question. Please try again.",
    },
  ];

  // Simulate a delay to mimic an actual network request
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Randomly pick success or error for demonstration
  return dummyData[Math.floor(Math.random() * dummyData.length)];
}
