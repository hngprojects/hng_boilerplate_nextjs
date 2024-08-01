import { NextRequest, NextResponse } from "next/server";

import { apiAuthPrefix, authRoutes, publicRoutes } from "~/lib/routes";

const NEXT_PUBLIC_ROOT_DOMAIN = "deployment.nextjs.boilerplate.hng.tech";
export default async function middleware(request: NextRequest) {
  const { nextUrl } = request;

  const isLoggedIn = true;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

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

  //rewrites for dashboard pages and dev subdomains
  if (hostname == `dashboard.${NEXT_PUBLIC_ROOT_DOMAIN}`) {
    if (!isLoggedIn && !isAuthRoute) {
      return Response.redirect(
        new URL(`/login?callbackUrl=${nextUrl.pathname}`, nextUrl),
      );
    } else if (isLoggedIn && isAuthRoute) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return NextResponse.rewrite(
      new URL(`/dashboard${path === "/" ? "/" : path}`, request.url),
    );
  }

  return;
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [String.raw`/((?!.+\.[\w]+$|_next).*)`, "/", "/(api|trpc)(.*)"],
};
