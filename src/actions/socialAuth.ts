"use server";

import axios from "axios";

import { AuthResponse, ErrorResponse, Profile } from "~/types";

const apiUrl = process.env.API_URL;

const googleAuth = async (profile: Profile): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/google`, {
      id_token: profile.id_token,
    });

    return {
      data: response.data.user,
      access_token: response.data.access_token,
    };
  } catch {
    throw new Error("Authentication failed");
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
