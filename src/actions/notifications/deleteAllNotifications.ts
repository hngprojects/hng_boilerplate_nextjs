import axios from "axios";

import { auth } from "~/lib/auth";
import { getApiUrl } from "../getApiUrl";

export const deleteAllNotifications = async () => {
  const apiUrl = await getApiUrl();
  const session = await auth();

  try {
    const response = await axios.delete(
      `${apiUrl}/api/v1/notifications/clear-all`,
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
            error.response.data.message || "Failed to delete notifications.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
