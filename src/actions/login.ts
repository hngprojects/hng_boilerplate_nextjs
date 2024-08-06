"use server";

import axios from "axios";
import { cookies } from "next/headers";
import * as z from "zod";

import { LoginSchema } from "~/schemas";

const apiUrl = process.env.API_URL;

export const loginUser = async (values: z.infer<typeof LoginSchema>) => {
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
    const access_token = response.data.access_token;

    cookie.set("access_token", access_token, {
      maxAge: 60 * 60 * 24 * 1,
      httpOnly: true,
      path: "/",
      priority: "high",
    });
    return {
      status: response.status,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Login failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const nextlogin = async (values: z.infer<typeof LoginSchema>) => {
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

    return response.data;
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Login failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
