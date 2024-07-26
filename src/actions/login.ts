"use server";

import { createSession, deleteSession } from "~/lib/services/session";

interface Properties {
  email: string;
  password: string;
}

export const loginUser = async (data: Properties) => {
  const { email } = data;
  await createSession(email);
};

export async function deleteUserCookie() {
  deleteSession();
}
