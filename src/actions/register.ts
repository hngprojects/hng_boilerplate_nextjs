"use server";

import * as z from "zod";

import { RegisterSchema } from "~/schemas";
import Calls from "./axios";

const $http = Calls(process.env.API_URL);

export const CreateUser = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Login Failed. Please check your email and password.",
    };
  }
  try {
    // eslint-disable-next-line unicorn/prevent-abbreviations
    const res = await $http.post("/auth/register", validatedFields.data);
    return {
      user: res.data.newUser,
      access_token: res.data.access_token,
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      message: error?.response?.data.message,
      status: error?.response?.status,
    };
  }
};
