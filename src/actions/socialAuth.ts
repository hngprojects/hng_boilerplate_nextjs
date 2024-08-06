"use server";

import axios from "axios";

import { User } from "~/types";

interface AuthResponse {
  data: User;
  access_token: string;
}

const apiUrl = process.env.API_URL;

const googleAuth = async (id_token: string): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/google`, {
      id_token: id_token,
    });

    return {
      data: response.data.user,
      access_token: response.data.access_token,
    };
  } catch {
    throw new Error("Authentication failed");
  }
};

const twitterAuth = async (access_token: string): Promise<AuthResponse> => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/twitter`, {
      access_token: access_token,
    });

    return {
      data: response.data.user,
      access_token: response.data.access_token,
    };
  } catch {
    throw new Error("Authentication failed");
  }
};

export { googleAuth, twitterAuth };
