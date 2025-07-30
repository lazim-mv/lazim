// app/middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request) {
    const response = NextResponse.next();

    if (request.nextUrl.pathname === '/sitemap') {
        response.headers.set('Content-Type', 'application/xml');
    }

    return response;
}
