"use server";

import axios from "axios";
import { z } from "zod";

import { auth } from "~/lib/auth";
import { organizationSchema } from "~/schemas";

const apiUrl = process.env.API_URL;

export const getStatistics = async () => {
  const session = await auth();

  try {
    const response = await axios.get(`${apiUrl}/api/v1/statistics`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    return {
      data: response.data.data,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Registration failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const getAllOrg = async () => {
  const session = await auth();

  try {
    const response = await axios.get(`${apiUrl}/api/v1/organisations`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    return {
      organization: response.data.data,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Registration failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const createOrg = async (values: z.infer<typeof organizationSchema>) => {
  const session = await auth();

  const validatedFields = organizationSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Create Organization Failed. Please check your inputs.",
    };
  }
  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/organisations`,
      validatedFields.data,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );
    return {
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Create Organization failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const getAnalytics = async () => {
  const session = await auth();

  try {
    const response = await axios.get(`${apiUrl}/api/v1/analytics`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    return {
      data: response.data.data,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Registration failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
