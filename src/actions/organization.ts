"use server";

import axios from "axios";

import { auth } from "~/lib/auth";

const apiUrl = process.env.API_URL;

export const getSubCount = async () => {
  const session = await auth();

  try {
    const response = await axios.get(`${apiUrl}api/v1/subscriptions`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    return {
      sub: response.data.data.subscription_count,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Registration failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
