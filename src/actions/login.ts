"use server";

import axios from "axios";
import * as z from "zod";

import { LoginSchema } from "~/schemas";

const apiUrl = process.env.API_URL;
const team = process.env.TEAM;

export const loginUser = async (values: z.infer<typeof LoginSchema>) => {
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
    return {
      status: response.status,
      data: response.data,
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

    const pantheruser = {
      id: response.data.user.id,
      email: response.data.user.email,
      fullname: response.data.user.name,
      first_name: response.data.user.profile.first_name,
      last_name: response.data.user.profile.last_name,
      image: response.data.user.profile.avatarUrl,
      expires_in: response.data.user.otp_expires_at,
      role: response.data.user.role,
      access_token: response.data.access_token,
    };

    const starlightuser = {
      id: response.data.user.id,
      email: response.data.user.email,
      first_name: response.data.user.first_name,
      last_name: response.data.user.last_name,
      image: response.data.user.avatarUrl,
      role: response.data.user.role,
      access_token: response.data.access_token,
    };

    const kimikouser = {
      id: response.data.user.id,
      email: response.data.user.email,
      first_name: response.data.user.profile.first_name,
      last_name: response.data.user.profile.last_name,
      image: response.data.user.profile.avatarUrl,
      role: response.data.user.role,
      access_token: response.data.access_token,
    };

    const anchoruser = {
      id: response.data.user.id,
      email: response.data.user.email,
      first_name: response.data.user.first_name,
      last_name: response.data.user.last_name,
      image: response.data.user.avatar_url,
      role: response.data.user.role,
      access_token: response.data.access_token,
    };

    const bulldozeruser = {
      id: response.data.user.id,
      email: response.data.user.email,
      first_name: response.data.user.first_name,
      last_name: response.data.user.last_name,
      image: response.data.user.avatar_url,
      role: response.data.user.role,
      access_token: response.data.access_token,
    };

    return {
      data:
        team === "panther"
          ? pantheruser
          : team === "starlight"
            ? starlightuser
            : team === "kimiko"
              ? kimikouser
              : team === "anchor"
                ? anchoruser
                : team === "bulldozer"
                  ? bulldozeruser
                  : response.data,
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
