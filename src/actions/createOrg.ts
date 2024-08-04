"use server";

import axios from "axios";
import * as z from "zod";

import { auth } from "~/lib/auth";
import { organizationSchema } from "~/schemas";
import { getApiUrl } from "./getApiUrl";

const team = process.env.TEAM;

export const createOrg = async (
  values: z.infer<typeof organizationSchema>,
  token?: string,
) => {
  const apiUrl = await getApiUrl();
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
          Authorization: `Bearer ${session?.access_token || token}`,
        },
      },
    );
    return {
      team: team,
      status: response.status,
      data: response.data,
      access_token: response.data.access_token,
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
