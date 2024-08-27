import axios from "axios";

import { getApiUrl } from "~/actions/getApiUrl";
import { useSession } from "next-auth/react";

export const exportMembersEndpoint = async (format: string = "csv") => {
  const apiUrl = await getApiUrl();
  const { data: session } = useSession();
  if (!session?.currentOrgId) return;
  try {
    const response = await axios.get(
      `${apiUrl}/api/v1/organisations/${session?.currentOrgId}/users/export`,
      {
        params: {
          format: format,
        },
      },
    );
    return {
      success: true,
      format: format,
      response: response,
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        error: true,
        message: error.response?.data?.message || error?.message,
      };
    }
    return {
      error: true,
      message: "An unknown error occurred",
    };
  }
};
