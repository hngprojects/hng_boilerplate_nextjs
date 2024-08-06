"use server";

import axios from "axios";

import { AuthResponse, ErrorResponse } from "~/types";

const apiUrl = process.env.API_URL;

const googleAuth = async (
  id_token: string,
): Promise<AuthResponse | ErrorResponse> => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/google`, {
      id_token: id_token,
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

export { googleAuth, twitterAuth };
