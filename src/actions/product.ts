// // /api/v1/organisations/{orgId}/products

import axios from "axios";
import { z } from "zod";

import { auth } from "~/lib/auth";
import { productSchema } from "~/schemas";

const apiUrl = process.env.API_URL;

export const createProduct = async (
  values: z.infer<typeof productSchema>,
  org_id: string,
) => {
  const validatedFields = productSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Create Organization Failed. Please check your inputs.",
    };
  }

  const session = await auth();
  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/organisations/${org_id}/products`,
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
          error: error.response.data.message || "Registration failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
