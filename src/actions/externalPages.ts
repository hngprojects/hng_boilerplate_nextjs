"use server";

import axios from "axios";

const apiUrl = process.env.API_URL;

export const getFaqs = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/v1/faqs`);

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Unable to Fetch FAQS",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
