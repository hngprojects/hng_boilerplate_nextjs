import axios from "axios";

import { getApiUrl } from "~/actions/getApiUrl";

export const exportMembersEndpoint = async (format: string = "csv") => {
  const apiUrl = await getApiUrl();
  try {
    const response = await axios.get(
      `${apiUrl}/api/v1/organisation/members/export`,
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
