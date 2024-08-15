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
  const { price, quantity, ...rest } = validatedFields.data;

  const newPrice = Number.parseInt(price);
  const newQuantity = Number.parseInt(quantity);

  const acceptdata = { ...rest, price: newPrice, quantity: newQuantity };
  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/organisations/${org_id}/products`,
      acceptdata,
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
  if (!org_id) {
    return {
      error: "invalid organisation",
    };
  }
  try {
    const session = await auth();

    const response = await axios.get(
      `${apiUrl}/api/v1/${org_id}/products`,

      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );
    return {
      products: response.data.data,
      response: response,
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

export const getProductDetails = async (product_id: string) => {
  try {
    const session = await auth();
    const response = await axios.delete(
      `${apiUrl}/api/v1/products/${product_id}`,

      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );
    return {
      status: response.status,
      message: "Product deleted successfully.",
      products: response.data.data,
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
