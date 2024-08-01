"use server";

import axios from "axios";
import { cookies } from "next/headers";

const apiUrl = process.env.API_URL;
interface Profile {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
  expires_at: number;
  provider: string;
  type: string;
  providerAccountId: string;
}

const googleAuth = async (profile: Profile) => {
  try {
    const response = await axios.post(`${apiUrl}/api/v1/auth/google`, {
      id_token: profile.id_token,
    });

    const access_token =
      response.data.access_token ?? response.data.data.access_token;
    const cookie = cookies();
    cookie.set("access_token", access_token, {
      maxAge: 60 * 60 * 24 * 1, // 1 day
      httpOnly: true,
      path: "/",
      priority: "high",
    });
    return {
      data: response.data,
      user: response.data.user,
      access_token:
        response.data.access_token ?? response.data.data.access_token,
    };
  } catch (error) {
    return error;
  }
};

export { googleAuth };
