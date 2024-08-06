"use server";

export const getApiUrl = async (): Promise<string> => {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    throw new Error("API_URL environment variable is not defined");
  }

  return apiUrl;
};
