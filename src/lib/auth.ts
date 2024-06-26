import { NextRequest, NextResponse } from 'next/server'
import { verifyToken } from './jwt'

export async function authMiddleware(req: NextRequest) {
  const token = req.cookies.get('auth-token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  try {
    verifyToken(token)
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}
