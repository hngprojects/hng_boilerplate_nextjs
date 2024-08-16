import axios from "axios";

import { getApiUrl } from "../getApiUrl";

export const deleteAllNotifications = async (token: string) => {
  const apiUrl = await getApiUrl();

  try {
    const response = await axios.delete(
      `${apiUrl}/api/v1/notifications/clear-all`,
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
            error.response.data.message || "Failed to delete notifications.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
