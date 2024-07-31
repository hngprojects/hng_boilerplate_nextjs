import { auth } from "./lib/auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from "./lib/routes";

export default auth((request) => {
  const { nextUrl } = request;
  const isLoggedIn = !!request.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isProtectedRoute = DEFAULT_LOGIN_REDIRECT.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (isProtectedRoute && !isLoggedIn) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }
  return;
});

export const config = {

  matcher: [String.raw`/((?!.+\.[\w]+$|_next).*)`, "/", "/(api|trpc)(.*)"],
};
