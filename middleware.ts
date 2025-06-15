import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Redirect all /community and /admin routes (including subroutes) to /comming-soon
  if (
    pathname.startsWith('/community') ||
    pathname.startsWith('/admin')
  ) {
    return NextResponse.redirect(new URL('/comming-soon', request.url));
  }
  return NextResponse.next();
}

// Specify the paths to match
export const config = {
  matcher: ['/community/:path*', '/admin/:path*'],
};
