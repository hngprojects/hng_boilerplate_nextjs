"use server";

import axios from "axios";
import { cookies } from "next/headers";
import * as z from "zod";

import { LoginSchema } from "~/schemas";

const apiUrl = process.env.API_URL;

export const loginAuth = async (values: z.infer<typeof LoginSchema>) => {
  const cookie = cookies();
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Login Failed. Please check your email and password.",
    };
  }
  const { email, password } = validatedFields.data;
  const payload = { email, password };
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/login`, payload);
    const access_token =
    response.data.access_token ?? response.data.data.access_token;
    
    cookie.set("access_token", access_token, {
      maxAge: 60 * 60 * 24 * 1,
      httpOnly: true,
      path: "/",
      priority: "high",
    });

    return response?.data?.user;
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
