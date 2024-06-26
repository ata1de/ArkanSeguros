import { signInWithEmailAndPassword, auth } from '@/lib/firebase'
import { generateToken } from '@/lib/jwt'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  try {
    await signInWithEmailAndPassword(auth, email, password)
    if (email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
      const token = generateToken(email)
      const response = NextResponse.json({ success: true })
      response.cookies.set('auth-token', token, {
        httpOnly: true,
        path: '/',
        maxAge: 3600,
        secure: true,
        sameSite: 'strict',
      })
      return response
    } else {
      return NextResponse.json({ error: 'Acesso não autorizado' }, { status: 403 })
    }
  } catch (error) {
    return NextResponse.json({ error: 'Credenciais inválidas' }, { status: 401 })
  }
}
