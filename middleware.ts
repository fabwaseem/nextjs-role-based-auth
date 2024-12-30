import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") ||
    req.nextUrl.pathname.startsWith("/signup");
  const isAdminPage = req.nextUrl.pathname.startsWith("/admin");
  const isDashboardPage = req.nextUrl.pathname.startsWith("/dashboard");
  const userRole = req.auth?.user?.role;

  // Redirect authenticated users away from auth pages
  if (isLoggedIn && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // Redirect unauthenticated users away from protected pages
  if (!isLoggedIn && (isDashboardPage || isAdminPage)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Restrict admin routes to admin users only
  if (isAdminPage && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
