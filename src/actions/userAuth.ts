"use server";

import axios from "axios";
import * as z from "zod";

import { LoginSchema } from "~/schemas";
import { AuthResponse, ErrorResponse } from "~/types";

const apiUrl = process.env.API_URL;

const credentialsAuth = async (
  values: z.infer<typeof LoginSchema>,
): Promise<AuthResponse | ErrorResponse> => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      message: "Something went wrong",
      status_code: 401,
    };
  }
  const { email, password } = validatedFields.data;
  const payload = { email, password };
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/login`, payload);

    return {
      data: response.data.user,
      access_token: response.data.access_token,
    };
  } catch (error) {
    return {
      message:
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data.message
          ? error.response.data.message
          : "Something went wrong",
      status_code:
        axios.isAxiosError(error) && error.response
          ? error.response.status
          : undefined,
    };
  }
};

const googleAuth = async (
  idToken: string,
): Promise<AuthResponse | ErrorResponse> => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/google`, {
      id_token: idToken,
    });

    return {
      data: response.data.user,
      access_token: response.data.access_token,
    };
  } catch (error) {
    return {
      message:
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data.message
          ? error.response.data.message
          : "Something went wrong",
      status_code:
        axios.isAxiosError(error) && error.response
          ? error.response.status
          : undefined,
    };
  }
};

const twitterAuth = async (
  access_token: string,
): Promise<AuthResponse | ErrorResponse> => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/twitter`, {
      access_token: access_token,
    });

    return {
      data: response.data.user,
      access_token: response.data.access_token,
    };
  } catch (error) {
    return {
      message:
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data.message
          ? error.response.data.message
          : "Something went wrong",
      status_code:
        axios.isAxiosError(error) && error.response
          ? error.response.status
          : undefined,
    };
  }
};

export { credentialsAuth, googleAuth, twitterAuth };
