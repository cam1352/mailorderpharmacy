import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Determine city based on domain name
  let city = 'national';
  if (hostname.includes('toronto')) city = 'toronto';
  else if (hostname.includes('vancouver')) city = 'vancouver';
  else if (hostname.includes('calgary')) city = 'calgary';

  // Add the custom header to the request so Server Components can read it
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-city', city);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};