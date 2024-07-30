"use server";

import Calls from "./axios";

const $http = Calls(process.env.API_URL);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GOOGLE_SIGN_IN = async (profile: any) => {
  try {
    // eslint-disable-next-line unicorn/prevent-abbreviations
    const res = await $http.post("/auth/google", profile);
    return {
      user: res.data,
    };
    // eslint-disable-next-line unicorn/catch-error-name, @typescript-eslint/no-explicit-any, unicorn/prevent-abbreviations
  } catch (e: any) {
    return {
      message: e?.response?.data.message,
      status: e?.response?.status,
    };
  }
};

export { GOOGLE_SIGN_IN };
