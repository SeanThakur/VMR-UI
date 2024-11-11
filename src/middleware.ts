// middleware.ts
import { NextRequest, NextResponse } from "next/server";

// Define the protected routes
const protectedRoutes = ["/home", "/sales", "/invoice"];

export function middleware(request: NextRequest) {
  // Check if the request is for a protected route
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    // Get the auth token from the cookies
    const token = request.cookies.get("auth_token");

    // If no token is found, redirect to the login page
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // If no issues, continue the request
  return NextResponse.next();
}

// Define which routes the middleware applies to
export const config = {
  matcher: ["/home", "/sales", "/invoice"], // Adjust this to match the paths you want to protect
};
