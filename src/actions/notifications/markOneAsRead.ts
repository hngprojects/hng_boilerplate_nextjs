import axios from "axios";

import { auth } from "~/lib/auth";
import { getApiUrl } from "../getApiUrl";

interface ReadProperties {
  notificationId: string;
  // token?: string;
}

export const markOneAsRead = async ({
  notificationId,
  // token,
}: ReadProperties) => {
  const apiUrl = await getApiUrl();
  const session = await auth();

  try {
    const response = await axios.patch(
      `${apiUrl}/api/v1/notifications/${notificationId}`,
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
