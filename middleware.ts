import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const isAuthPage = request.nextUrl.pathname === '/login'
  const token = request.cookies.get('firebase-token')?.value

  // Handle auth pages (login, register, etc.)
  if (isAuthPage) {
    if (token) {
      return NextResponse.redirect(new URL('/welcome', request.url))
    }
    return NextResponse.next()
  }

  // Handle protected routes
  if (!token) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('from', request.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/welcome/:path*',
    '/login'
  ]
} 