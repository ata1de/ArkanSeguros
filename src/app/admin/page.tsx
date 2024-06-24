import SectionCardDashboard from '@/components/SectionCardDashboard'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='bg-black h-screen text-WhiteDefault'>
        <div className='px-5 py-2'>
            <Image src="/arkan_logo_dark.svg" alt="Arkan Seguros" width={50} height={50} />
        </div>
        <Separator/>

        <div className='flex flex-col gap-5 w-full p-5'>
            <h1 className='text-3xl font-semibold'>Dashboard</h1>
            <div>
                <SectionCardDashboard/>
            </div>
        </div>
    </div>
  )
}

export default AdminPage