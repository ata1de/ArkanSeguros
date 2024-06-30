import { signInWithEmailAndPassword, auth } from '@/lib/firebase'
import { generateToken } from '@/lib/jwt'
import { NextRequest, NextResponse } from 'next/server'
import  bcrypt from 'bcrypt'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  try {
    await signInWithEmailAndPassword(auth, email, password)
    if (email === process.env.NEXT_PUBLIC_ADMIN_EMAIL) {
      const token = generateToken(email)
      const tokenCrypt = await bcrypt.hash(token, 10)
      const response = NextResponse.json({ success: true })
      response.cookies.set('auth-token', tokenCrypt, {
        httpOnly: true,
        path: '/',
        maxAge: 86400, // 1 day in seconds
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
