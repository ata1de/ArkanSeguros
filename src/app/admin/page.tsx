import SalesCardSection from '@/components/dashboard/SalesCardSection'
import SectionCardDashboard from '@/components/dashboard/SectionCardDashboard'
import TableDashboard from '@/components/dashboard/TableDashboard'
import { DataTableDemo } from '@/components/dashboard/TableShadcnDash'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='bg-black min-h-screen text-WhiteDefault'>
        <div className='px-5 py-2'>
            <Image src="/arkan_logo_dark.svg" alt="Arkan Seguros" width={50} height={50} />
        </div>
        <Separator className='bg-gray-500'/>

        <div className='flex flex-col gap-5 w-full p-5'>
            <h1 className='text-3xl font-semibold'>Dashboard</h1>
            <div>
                <SectionCardDashboard/>
            </div>
            
            <DataTableDemo/>
        </div>

    </div>
  )
}

export default AdminPage