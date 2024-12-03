import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token");
  const pathname = request.nextUrl.pathname;

  if (token && pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (!token && pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images).*)"],
};
