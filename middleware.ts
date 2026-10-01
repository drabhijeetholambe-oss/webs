import { NextRequest, NextResponse } from "next/server";

const legacyHosts = new Set([
  "psychiatristnearme.in",
  "www.psychiatristnearme.in",
  "drabhijeetholambe.vercel.app",
]);

export function middleware(request: NextRequest) {
  const hostname = request.nextUrl.hostname.toLowerCase();
  if (!legacyHosts.has(hostname)) return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.protocol = "https:";
  destination.hostname = "www.drabhijeetholambe.com";
  destination.port = "";
  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: ["/:path*"],
};
