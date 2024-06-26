import { authMiddleware } from '@/lib/auth'

export { authMiddleware as middleware }

// Configuração para aplicar o middleware apenas nas rotas de administração
export const config = {
  matcher: ['/admin/:path*'],
}
