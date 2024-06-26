"use client"
import PieCharts from '@/components/dashboard/PieChart';
import SectionCardDashboard from '@/components/dashboard/SectionCardDashboard';
import { DataTableDemo } from "@/components/dashboard/DataTableDemo";
import FormClicksChart from '@/components/dashboard/TinyChart';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';

const AdminPage = () => {
  return (
    <div className='bg-DarkBlue min-h-screen text-WhiteDefault'>
        <div className='px-5 py-2'>
            <Image src="/arkan_logo_dark.svg" alt="Arkan Seguros" width={50} height={50} />
        </div>
        <Separator className='bg-gray-500'/>
        <div className='flex flex-col gap-5 w-full p-5'>
            <h1 className='text-3xl font-semibold'>Dashboard</h1>
            <div>
                <SectionCardDashboard/>
            </div>
            <div className='flex items-center justify-center gap-3 w-full my-8'>
              <div className='w-2/3 h-64'>
                <p className='text-xl font-medium mb-3'>Usuários/mês</p>  
                <FormClicksChart/>
              </div>
              <div className='w-1/3 h-64'>  
              <p className='text-xl font-medium my-3'>Serviço/usuário</p>
                <PieCharts/>
              </div>
            </div>
            <DataTableDemo/>
        </div>
    </div>
  )
}

export default AdminPage;
