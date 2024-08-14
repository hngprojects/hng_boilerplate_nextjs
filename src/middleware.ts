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

  const isLoggedIn = session !== null;
  const isSuperAdmin = session?.user?.is_superadmin === true;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isSuperAdminRoute = superAdminRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute || isPublicRoute) return NextResponse.next();

  const url = request.nextUrl;
  let hostname = request.headers
    .get("host")!
    .replace(/\.localhost(:\d+)?/, `.${NEXT_PUBLIC_ROOT_DOMAIN}`);

  hostname = hostname.replace("www.", ""); // remove www. from domain
  const searchParameters = request.nextUrl.searchParams.toString();
  const path = `${url.pathname}${
    searchParameters.length > 0 ? `?${searchParameters}` : ""
  }`;

  // Rewrites for dashboard pages and dev subdomains
  if (hostname == `dashboard.${NEXT_PUBLIC_ROOT_DOMAIN}`) {
    if (!isLoggedIn && !isAuthRoute) {
      return NextResponse.redirect(
        new URL(`/login?callbackUrl=${nextUrl.pathname}`, nextUrl),
      );
    } else if (isLoggedIn && isAuthRoute) {
      return NextResponse.redirect(new URL("/", nextUrl));
    }
    if (isSuperAdminRoute && !isSuperAdmin) {
      return NextResponse.redirect(new URL("/dashboard", nextUrl));
    }
    return NextResponse.rewrite(
      new URL(`/dashboard${path === "/" ? "/" : path}`, request.url),
    );
  }

  return NextResponse.next();
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  // eslint-disable-next-line unicorn/prefer-string-raw
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
