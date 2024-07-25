"use server";

// import "server-only"
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type SessionPayload = {
  email: string | number;
  expiresAt: Date;
};
const secretKey = "VxrwwYPcY5Cjv3uEXrQefzbm7GgWmJu";
const key = new TextEncoder().encode(secretKey);

export async function joseEncrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1d")
    .sign(key);
}

export async function joseDecrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, key, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch {
    return;
  }
}

export async function createSession(email: string) {
  const expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); // 1 days
  const session = await joseEncrypt({ email, expiresAt });

  setCookie("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
    cookies,
  });
  // redirect("/");
}

export async function verifySession() {
  const cookie = getCookie("session", { cookies });
  const session = await joseDecrypt(cookie!);
  if (!session?.email) {
    return redirect("/login");
  }
  return {
    isAuth: true,
    email: session.email,
  };
}

export async function updateSession() {
  const session = getCookie("session", { cookies });
  const payload = (await joseDecrypt(session)) as SessionPayload;
  if (!session || !payload) return redirect("/login");

  const expires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000); // 1 days

  setCookie("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/",
    cookies,
  });
}

export async function deleteSession() {
  deleteCookie("session");
  deleteCookie("session", { cookies });
}
