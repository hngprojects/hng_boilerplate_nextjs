"use server";

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
      error: "Create Product Failed. Please check your inputs.",
    };
  }

  const session = await auth();
  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/organisations/${org_id}/products`,
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
          error: error.response.data.message || "Product creation failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
export const getAllProduct = async (org_id: string) => {
  const session = await auth();
  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/${org_id}/products`,

      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );
    return {
      products: response.data.data,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Error Occured.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const deleteProduct = async (org_id: string, product_id: string) => {
  const session = await auth();
  try {
    const response = await axios.delete(
      `${apiUrl}/api/v1/organisations/${org_id}/products/${product_id}`,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );
    return {
      status: response.status,
      message: "Product deleted successfully.",
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Error Occurred.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
