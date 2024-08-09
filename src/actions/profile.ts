"use server";

import axios from "axios";

import { auth } from "~/lib/auth";
import { UpdateProfileType } from "~/types";

const apiUrl = process.env.API_URL;

export default async function updateProfile({
  payload,
}: {
  payload: UpdateProfileType;
}) {
  try {
    const session = await auth();
    const userId = session?.user.id;
    if (!userId) {
      return { message: "User Id is not set", data: {}, status_code: 400 };
    }
    const request = await axios.patch(
      `${apiUrl}/api/v1/profile/${userId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
        },
      },
    );
    const response = request.data;
    return response;
  } catch {
    return {
      message: "Error Occured creating user",
      data: {},
      status_code: 500,
    };
  }
}
