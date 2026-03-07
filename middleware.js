import { NextResponse } from "next/server";

export function middleware(request) {

  const paid = request.cookies.get("paid");

  if (!paid && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};