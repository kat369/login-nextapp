import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/" || path === "/signup";

  const adminpath = path === "/adminpage" || path === "/" || path === "/signup";
  const userpath = path === "/profile" || path === "/" || path === "/signup";

  const token = request.cookies.get("token")?.value || "";

  const admin = request.cookies.get("isAdmin")?.value || "false";

  if (adminpath && token && admin === "false") {
    return NextResponse.redirect(new URL("/profile", request.nextUrl));
  }

  if (userpath && token && admin === "true") {
    return NextResponse.redirect(new URL("/adminpage", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/profile", "/signup", "/adminpage"],
};
