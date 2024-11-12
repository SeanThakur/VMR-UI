import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/home", "/sales", "/invoice"];

export function middleware(request: NextRequest) {
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    const token = request.cookies.get("auth_token");

    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

// Define which routes the middleware applies to
export const config = {
  matcher: ["/home", "/sales", "/invoice"],
};
