"use client"
import PieCharts, { Icons } from '@/components/dashboard/PieChart';
import SectionCardDashboard from '@/components/dashboard/SectionCardDashboard';
import { DataTableDemo } from "@/components/dashboard/DataTableDemo";
import FormClicksChart from '@/components/dashboard/TinyChart';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { HomeIcon, User2Icon } from 'lucide-react';
import { ClientTypeFirebase, clientsTypeCount, getAllClients, getServicesByUsers, getUserCountByMonth, peopleCounts } from '@/services/clients';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { isClientFunction, isClientType } from '@/utils/isClientFunction';
import { PeopleTypeFunction, PeopleTypeProps } from '@/utils/PeopleTypeFunction';
import Link from 'next/link';

const queryClient = new QueryClient();

const AdminPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminContent />
    </QueryClientProvider>
  );
};

const AdminContent = () => {
  const [clientManager, setClientManager] = useState<isClientType>();
  const [peopleTypeManager, setPeopleTypeManager] = useState<PeopleTypeProps>();
  const [usersCount, setUserCount] = useState<{ month: string; clicks: number; }[]>([]);


  const getAllUsers = async () => {
    try {
      const response = await getAllClients();
      return response;
    } catch (error) {
      console.error("Error fetching match details:", error);
      throw new Error("Failed to fetch all clients");
    }
  };
  
  const getClientManager = async () => {
    try {
      const response = await clientsTypeCount();
      return response;
    } catch (error) {
      console.error("Error fetching match details:", error);
      throw new Error("Failed to fetch clients type");
    }
  }

  const getPeopleTypeManager = async () => {
    try {
      const response = await peopleCounts();
      return response;
    } catch (error) {
      console.error("Error fetching match details:", error);
      throw new Error("Failed to fetch people type");
    }
  }

  const getUserByMonth = async () => {
    try {
      const response = await getUserCountByMonth();
      return response;
    } catch (error) {
      console.error("Error fetching match details:", error);
      throw new Error("Failed to fetch user count by month");
    }
  }


  const getServices = async () => {
    try {
      const response = await getServicesByUsers();
      return response;
    } catch (error) {
      console.error("Error fetching match details:", error);
      throw new Error("Failed to fetch people type");
    }
  }

  const {data: dataUsers, isLoading} = useQuery<ClientTypeFirebase[]>({
    queryKey: ['users'],
    queryFn: getAllUsers,
  });

  const {data: dataPeopleManager} = useQuery<PeopleTypeProps>({
    queryKey: ['peopleTypeManager'],
    queryFn: getPeopleTypeManager,
  });

  const {data: dataClientManager, isLoading: isLoadingClientManager} = useQuery<isClientType>({
    queryKey: ['clientManager'],
    queryFn: getClientManager,
  });

  const {data: dataUserByMonth, isLoading: isLoadingUserByMonth} = useQuery<{ month: string; clicks: number; }[]>({
    queryKey: ['userByMonth'],
    queryFn: getUserByMonth,
  });

  const {data: dataServices, isLoading: isLoadingServices} = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  });
  // const cardAnalytics = async () => {
  //   try {
  //     const clientManager = await clientsTypeCount()
  //     const peopleTypeManager = await peopleCounts() 
  //     const userByMonth = await getUserCountByMonth()
  //     setUserCount(userByMonth)
  //     setPeopleTypeManager(peopleTypeManager);
  //     setClientManager(clientManager);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   if (dataUsers) {
  //     cardAnalytics()
  //   }
  // }, [dataUsers]);


  return (
    <div className='bg-DarkBlue min-h-screen text-WhiteDefault'>
      <div className='px-5 py-2'>
        <Tabs defaultValue='home'>
          <TabsList className='flex justify-center items-center gap-7 w-[400px] bg-DarkBlue my-4 pl-5'>
            <Link href='/'><Image className='object-contain' src="/arkan_logo_dark.svg" alt="Arkan Seguros" width={70} height={70} /></Link>
            <div className='grid grid-cols-2 w-[300px]'>
              <TabsTrigger value='home' className='flex justify-center items-center gap-3'>
                <HomeIcon size={24} className='' />
                <p className='text-lg font-semibold'>Home</p>
              </TabsTrigger>
              <TabsTrigger value='users' className='flex justify-center items-center gap-3'>
                <User2Icon size={24} className='' />
                <p className='text-lg font-semibold'>Usuários</p>
              </TabsTrigger>
            </div>
          </TabsList>
          <Separator className='bg-gray-600' />
          <TabsContent value='home'>
            <div className='flex flex-col gap-5 w-full p-5'>
              <h1 className='text-3xl font-semibold'>Dashboard</h1>
              <div>
                <SectionCardDashboard peopleTypeManager={dataPeopleManager!} clientManager={dataClientManager!}  isLoading={isLoadingClientManager} />
              </div>
              <div className='flex max-[1301px]:flex-col items-center justify-center gap-3 w-full mt-8 mb-12'>
                <div className='w-2/3 max-[1301px]:w-full h-[370px] flex flex-col items-start justify-center p-5 border border-gray-600 rounded-md'>
                  <p className='text-xl font-medium py-3'>Usuários/mês</p>
                  <FormClicksChart data={dataUserByMonth!} isLoading={isLoadingUserByMonth} />
                </div>
                <div className='w-1/3 max-[1301px]:w-full h-[370px] flex flex-col items-start justify-center p-5 border border-gray-600 rounded-md'>
                  <p className='text-xl font-medium py-3'>Serviço/usuário</p>
                  <PieCharts data={dataServices!} isLoading={isLoadingServices} />
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value='users'>
            <div className='flex flex-col gap-3 w-full p-5'>
              <h1 className='text-3xl font-semibold'>Clientes</h1>
              {isLoading ? 
              <div className='w-full h-full m-auto flex items-center justify-center'>
                <Icons.spinner className='w-14 h-14 animate-spin' />
              </div>
              :
              <DataTableDemo data={dataUsers!} />
              
              }
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
