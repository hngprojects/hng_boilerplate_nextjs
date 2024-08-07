"use server";

import axios from "axios";

import { auth } from "~/lib/auth";
import { User } from "~/types";

export enum StockStatusType {
  IN_STOCK = "in stock",
  OUT_STOCK = "out of stock",
  LOW_STOCK = "low on stock",
}

export enum ProductSizeType {
  SMALL = "Small",
  STANDARD = "Standard",
  LARGE = "Large",
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  category?: string;
  image?: string;
  price: number;
  quantity: number;
  is_deleted?: boolean;
  size: ProductSizeType;
  stock_status: StockStatusType;
  org: Organisation;
}

export interface Organisation {
  id: string;
  name: string;
  description: string;
  email: string;
  industry: string;
  type: string;
  country: string;
  address: string;
  owner: User;
  state: string;
  creator: User;
  isDeleted: boolean;
  products: Product[];
  role: "admin" | "manager" | "user" | "custom" | string;
}

const apiUrl = process.env.API_URL;

export const getSubCount = async () => {
  const session = await auth();

  try {
    const response = await axios.get(`${apiUrl}api/v1/subscriptions`, {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    return {
      sub: response.data.data.subscription_count,
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
