import { NextRequest, NextResponse } from "next/server";

// List of allowed origins (domains)
const allowedOrigin = "deployment.nextjs.boilerplate.hng.tech";

export default function middleware(request: NextRequest) {
  const origin = request.headers.get("origin");

  // Create a response object
  const response = NextResponse.next();

  // Check if the origin is allowed and if origin is not undefined
  if (origin && allowedOrigin.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS",
    );
    response.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization",
    );

    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(undefined, {
        headers: response.headers,
      });
    }

    return response;
  }

  // If the origin is not allowed or undefined, return a 403 Forbidden response
  return new Response("Forbidden", {
    status: 403,
  });
}

export const config = {
  matcher: ["/api/:path*"], // Apply the middleware to all API routes
};
