"use client"
import PieCharts from '@/components/dashboard/PieChart';
import SectionCardDashboard from '@/components/dashboard/SectionCardDashboard';
import { DataTableDemo } from "@/components/dashboard/DataTableDemo";
import FormClicksChart from '@/components/dashboard/TinyChart';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { HomeIcon, User2Icon } from 'lucide-react';

const AdminPage = () => {
  return (
    <div className='bg-DarkBlue min-h-screen text-WhiteDefault'>
        <div className='px-5 py-2'>
            <Tabs defaultValue='home'>
              <TabsList className='flex justify-center items-center gap-7 w-[400px] bg-DarkBlue my-4 pl-5'>
                  <Image className='object-contain' src="/arkan_logo_dark.svg" alt="Arkan Seguros" width={70} height={70} /> 
                  <div className='grid grid-cols-2 w-[300px]'>
                    <TabsTrigger value='home' className='flex justify-center items-center gap-3'>
                      <HomeIcon size={24} className=''/>
                      <p className='text-lg font-semibold'>Home</p>
                    </TabsTrigger>
                    <TabsTrigger value='users' className='flex justify-center items-center gap-3'>
                      <User2Icon size={24} className=''/>
                      <p className='text-lg font-semibold'>Usuários</p>
                    </TabsTrigger>
                  </div> 
              </TabsList>
             <Separator className='bg-gray-600'/> 
              <TabsContent value='home'>
                <div className='flex flex-col gap-5 w-full p-5'>
                    <h1 className='text-3xl font-semibold'>Dashboard</h1>
                    <div>
                        <SectionCardDashboard/>
                    </div>
                    <div className='flex max-[1301px]:flex-col items-center justify-center gap-3 w-full mt-8 mb-12'>
                      <div className='w-2/3 max-[1301px]:w-full h-[300px] flex flex-col items-start justify-center p-5 border border-gray-600 rounded-md'>
                        <p className='text-xl font-medium py-3'>Usuários/mês</p>  
                        <FormClicksChart/>
                      </div>
                      <div className='w-1/3 max-[1301px]:w-full h-[300px] flex flex-col items-start justify-center p-5 border border-gray-600 rounded-md'>  
                      <p className='text-xl font-medium py-3'>Serviço/usuário</p>
                        <PieCharts/>
                      </div>
                    </div>
                </div>
              </TabsContent>
              <TabsContent value='users'>
                <div className='flex flex-col gap-3 w-full p-5'>
                  <h1 className='text-3xl font-semibold'>Clientes</h1>
                  <DataTableDemo/>
                </div>
              </TabsContent>  
            </Tabs>
        </div>
    </div>
  )
}

export default AdminPage;
