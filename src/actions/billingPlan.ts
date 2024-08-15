"use server";

import axios from "axios";

import { auth } from "~/lib/auth";

const apiUrl = process.env.API_URL;

export const getBillingPlans = async () => {
  try {
    const session = await auth();
    const response = await axios.get(`${apiUrl}/api/v1/billing-plans`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

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
