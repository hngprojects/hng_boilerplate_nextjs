import { NextRequest, NextResponse } from "next/server";

import {
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  superAdminRoutes,
} from "~/lib/routes";
import { auth } from "./lib/auth";

const NEXT_PUBLIC_ROOT_DOMAIN = "staging.nextjs.boilerplate.hng.tech";

export default async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const session = await auth();

  const isLoggedIn = true;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isSuperAdminRoute = superAdminRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute || isPublicRoute) return;

  const url = request.nextUrl;
  let hostname = request.headers
    .get("host")!
    .replace(/\.localhost(:\d+)?/, `.${NEXT_PUBLIC_ROOT_DOMAIN}`);

  hostname = hostname.replace("www.", ""); // remove www. from domain
  const searchParameters = request.nextUrl.searchParams.toString();
  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = `${url.pathname}${
    searchParameters.length > 0 ? `?${searchParameters}` : ""
  }`;

  // Check if the user is not logged in and trying to access an auth route
  if (!isLoggedIn && !isAuthRoute) {
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${nextUrl.pathname}`, nextUrl),
    );
  }

  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  if (isSuperAdminRoute && !session?.user?.is_superadmin) {
    return NextResponse.redirect(new URL("/dashboard", nextUrl));
  }

  if (hostname === `dashboard.${NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(
      new URL(`/dashboard${path === "/" ? "/" : path}`, request.url),
    );
  }

  return;
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  // eslint-disable-next-line unicorn/prefer-string-raw
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
