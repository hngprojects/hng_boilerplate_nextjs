"use server";

import axios from "axios";
import * as z from "zod";

import { OtpSchema, RegisterSchema } from "~/schemas";

const apiUrl = process.env.API_URL;

export const registerUser = async (values: z.infer<typeof RegisterSchema>) => {
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

    return {
      status: response.status,
      data: response.data,
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

export const verifyOtp = async (values: z.infer<typeof OtpSchema>) => {
  const token = values.token;
  const email = values.email;

  const payload = { token, email };

  try {
    const response = await axios.post(
      `${apiUrl}/api/v1/auth/verify-otp`,
      payload,
    );
    return {
      status: response.status,
      message: response.data.message,
      data: response.data,
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

export const resendOtp = async (email: string) => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/request/token`, {
      email,
    });

    return {
      status: response.status,
      message: response.data.message,
    };
  } catch (error) {
    return axios.isAxiosError(error) && error.response
      ? {
          error: error.response.data.message || "Resend OTP failed.",
          status: error.response.status,
        }
      : {
          error: "An unexpected error occurred.",
        };
  }
};
