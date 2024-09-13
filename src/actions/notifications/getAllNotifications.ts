"use server";

import axios from "axios";

import { auth } from "~/lib/auth";

const apiUrl = process.env.API_URL;

export const getAllNotifications = async () => {
  const session = await auth();
  try {
    const response = await axios.get(`${apiUrl}/api/v1/notifications`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error:
            error.response.data.message || "Failed to fetch notifications.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
