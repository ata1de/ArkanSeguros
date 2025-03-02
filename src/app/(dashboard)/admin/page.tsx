"use client"
import { DataTableDemo } from "@/components/dashboard/DataTableDemo";
import SectionCardDashboard from "@/components/dashboard/SectionCardDashboard";
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAccurateDoneLeads, getAllLeads, getClientType, getPeopleType, getProgressClient, getServicesByUsers, getUserCountByMonth } from "@/process/leads";
import { ClientDataTableType } from '@/services/clients';
import { IconsSpinner } from "@/types/dashboard";
import { accuracyStatusProps, ClientManagerProps, PeopleTypeProps, ProgressClientsProps, ServicesByUsersProps, UserCountByMonthProps } from '@/types/leads';
import { TabsContent } from '@radix-ui/react-tabs';
import { useQuery } from '@tanstack/react-query';
import { HomeIcon, User2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AdminPage = () => {

  const {data: DataProgressStatus, isLoading: isLoadingProgressStatus, isRefetching: isRefetchingProgressStatus } = useQuery<ProgressClientsProps>({
    queryKey: ['progress'],
    queryFn: getProgressClient,
  })

  const {data: DataAccurate, isLoading: isLoadingAccurate, isRefetching: isRefetchingAccurate } = useQuery<accuracyStatusProps>({
    queryKey: ['accurate'],
    queryFn: getAccurateDoneLeads,
  })

  const {data: dataUsers, isLoading} = useQuery<ClientDataTableType[]>({
    queryKey: ['users'],
    queryFn: getAllLeads,
  });

  console.log('data users', dataUsers);

  const {data: dataPeopleManager, isLoading: isLoadingPeopleManager} = useQuery<PeopleTypeProps>({
    queryKey: ['peopleTypeManager'],
    queryFn: getPeopleType,
  });

  const {data: dataClientManager, isLoading: isLoadingClientManager} = useQuery<ClientManagerProps>({
    queryKey: ['clientManager'],
    queryFn: getClientType,
  });

  const {data: dataUserByMonth, isLoading: isLoadingUserByMonth} = useQuery<UserCountByMonthProps[]>({
    queryKey: ['userByMonth'],
    queryFn: getUserCountByMonth,
  });

  const {data: dataServices, isLoading: isLoadingServices} = useQuery<ServicesByUsersProps[]>({
    queryKey: ['services'],
    queryFn: getServicesByUsers,
  });

  return (
    <div className='bg-DarkBlue min-h-screen text-WhiteDefault'>
      <div className='px-5 py-2'>
        <Tabs defaultValue='home'>
          <TabsList className='flex justify-center max-[425px]:flex-col max-[425px]:h-[130px] items-center gap-7 min-[425px]:w-[400px] bg-DarkBlue my-4 pl-5'>
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

          <SectionCardDashboard accuracyRate={DataAccurate!} peopleTypeManager={dataPeopleManager!} clientManager={dataClientManager!}  isLoadingClientManager={isLoadingClientManager} isLoadingAccurate={isLoadingAccurate} isLoadingPeopleManager={isLoadingPeopleManager} isRefetchingAccurate={isRefetchingAccurate} isLoadingProgressStatus={isLoadingProgressStatus} isRefetchingProgressStatus={isRefetchingProgressStatus} progressClients={DataProgressStatus!} dataUserByMonth={dataUserByMonth!} dataServices={dataServices!}
          isLoadingUserByMonth={isLoadingUserByMonth} isLoadingServices={isLoadingServices}
          />

          <TabsContent value='users'>
            <div className='flex flex-col gap-3 w-full p-5'>
              <h1 className='text-3xl font-semibold'>Clientes</h1>
              {isLoading ?
              <div className='w-full h-full m-auto flex items-center justify-center'>
                <IconsSpinner.spinner className='w-14 h-14 animate-spin' />
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
