"use server";

import axios from "axios";
import { cookies } from "next/headers";

const apiUrl = process.env.API_URL;

export const googleAuth = async (id_token: string) => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/google`, {
      id_token: id_token,
    });

    const access_token =
      response.data.access_token ?? response.data.data.access_token;
    const cookie = cookies();
    cookie.set("access_token", access_token, {
      maxAge: 60 * 60 * 24 * 1,
      httpOnly: true,
      path: "/",
      priority: "high",
    });

    return response.data.user;
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Authentication failed",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred",
        };
  }
};
