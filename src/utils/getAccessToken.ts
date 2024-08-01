"use server";

export const getAccessToken = async (): Promise<string> => {
  const accessToken = process.env.ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error("ACCESS_TOKEN environment variable is not defined");
  }

  return accessToken;
};
