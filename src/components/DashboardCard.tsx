import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface DashboardCardProps {
    label: string
    icon: LucideIcon
    amount?: number
    description: string

}

const DashboardCard = (props: DashboardCardProps) => {
  return (
    <div className={cn('flex w-full flex-col gap-3 rounded-xl border p-5 shadow')}>
        <div className="flex justify-between gap-2">
            <p className='text-lg'>{props.label}</p>
            <props.icon className='h-4 w-4 text-gray-400'/>
        </div>

        <div className="flex flex-col gap-1">
            <h2 className='text-2xl font-semibold'>{props.amount}</h2>
            <p className='text-xs text-gray-400 '>{props.description}</p>
        </div>

    </div>
  )
}

export default DashboardCard