"use server";

import axios from "axios";
import { z } from "zod";

import { auth } from "~/lib/auth";
import { roleSchema } from "~/schemas";

const apiUrl = process.env.API_URL;

export const getRoles = async (org_id: string) => {
  const session = await auth();

  try {
    const response = await axios.get(
      `${apiUrl}/api/v1/organisations/${org_id}/roles`,
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
          error: error.response.data.message || "Failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const createRole = async (
  values: z.infer<typeof roleSchema>,
  org_id: string,
) => {
  const validatedFields = roleSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Create Role Failed. Please check your inputs.",
    };
  }

  const session = await auth();
  const payload = validatedFields.data;

  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/organisations/${org_id}/roles`,
      payload,
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
          error: error.response.data.message || "Role creation failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
export const updatePermissions = async (
  values: z.infer<typeof roleSchema>,
  org_id: string,
) => {
  const validatedFields = roleSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Create Role Failed. Please check your inputs.",
    };
  }

  const session = await auth();
  const payload = validatedFields.data;

  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/organisations/${org_id}/roles`,
      payload,
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
          error: error.response.data.message || "Role creation failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
