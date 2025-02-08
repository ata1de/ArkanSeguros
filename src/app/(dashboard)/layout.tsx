"use client"

import LoadingSpinner from "@/components/dashboard/LoadingSpinner"
import { getStorage } from "@/lib/storage"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

    useEffect(() => {
        const token = getStorage('token')
        const currentPath = window.location.pathname

        setIsAuthenticated(!!token)

        if (token && currentPath === '/login') {
            return router.push('/admin')
        }

        if (!token && currentPath !== '/login') {
            return router.push('/login')
        }

    }, [router])

    if (isAuthenticated === null) {
        return <LoadingSpinner />
    }

    return (
        <div>
            {children}
        </div>
    )
}
