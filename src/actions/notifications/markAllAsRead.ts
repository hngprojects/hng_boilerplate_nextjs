import axios from "axios";

import { getApiUrl } from "../getApiUrl";

export const markAllAsRead = async (token: string) => {
  const apiUrl = await getApiUrl();

  try {
    const response = await axios.patch(
      `${apiUrl}/api/v1/notifications`,
      { is_read: true },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return {
      data: response.data,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error:
            error.response.data.message ||
            "Failed to mark notifications as read.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
