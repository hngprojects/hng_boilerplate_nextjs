"use server";

import axios from "axios";

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

    return response?.data;
  } catch (error) {
    return {
      status: "error " + error,
      status_code: 500,
      message: "Google authentication failed",
      data: {
        id_token: "",
        user: {
          id: "",
          email: "",
          fullname: "",
          avatar_url: "",
          expires_in: "",
          role: "",
        },
      },
    };
  }
};

export { googleAuth };
