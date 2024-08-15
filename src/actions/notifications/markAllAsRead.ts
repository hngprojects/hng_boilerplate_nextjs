import axios from "axios";

import { auth } from "~/lib/auth";
import { getApiUrl } from "../getApiUrl";

export const markAllAsRead = async () => {
  const apiUrl = await getApiUrl();
  const session = await auth();

  try {
    const response = await axios.patch(
      `${apiUrl}/api/v1/notifications`,
      { is_read: true },
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
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
