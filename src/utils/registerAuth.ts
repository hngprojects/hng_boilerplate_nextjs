"use server";

import axios from "axios";
import { cookies } from "next/headers";
import * as z from "zod";

import { OtpSchema, RegisterSchema } from "~/schemas";

const apiUrl = process.env.API_URL;
export const registerAuth = async (values: z.infer<typeof RegisterSchema>) => {
  const cookie = cookies();
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "registration  Failed. Please check your inputs.",
    };
  }
  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/auth/register`,
      validatedFields.data,
    );
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
          error: error.response.data.message || "Registration failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};

export const verifyOtp = async (values: z.infer<typeof OtpSchema>) => {
  const otp = values.otp;
  const token = values.token;

  const payload = { otp: Number(otp), token: token };

  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/auth/verify-otp`,
      payload,
    );
    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "OTP verification failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
