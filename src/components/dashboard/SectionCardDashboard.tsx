import React from 'react';
import DashboardCard from './DashboardCard';
import { Activity, CreditCard, DollarSign, User, UserPlus } from 'lucide-react';
import { isClientType } from '@/utils/isClientFunction';
import { SkeletonCard } from '../Skeleton';
import { PeopleTypeProps } from '@/utils/PeopleTypeFunction';

interface SectionCardDashboardProps {
  clientManager: isClientType | undefined
  peopleTypeManager: PeopleTypeProps | undefined // Permitindo que clientManager seja undefined
  isLoading: boolean;
}

const SectionCardDashboard: React.FC<SectionCardDashboardProps> = ({ clientManager, isLoading, peopleTypeManager }) => {
  return (
    <div className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
      {isLoading || (!clientManager || !peopleTypeManager) ? ( 
        <>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        <>
          <DashboardCard
            label={`Clientes ${clientManager.newClient ? 'Novos' : 'Antigos'}`}
            icon={UserPlus}
            amount={clientManager.clientCount}
            diff={clientManager.diff}
            description={`clientes de diferença para os ${clientManager.newClient ? 'clientes antigos' : 'clientes novos'}`}
            plus={false}
          />
          <DashboardCard 
            label={`Pessoas ${peopleTypeManager?.pf ? 'Física' : 'Jurídica'}`} 
            icon={DollarSign} 
            amount={peopleTypeManager!.clientCount}
            diff={peopleTypeManager!.diff} 
            description={` clientes de distância às pessoas ${peopleTypeManager?.pf ? 'Física' : 'Jurídica'}`}
            plus={true} 
          />
          <DashboardCard label='Sinistros' icon={User} amount={100} description='Sinistros abertos' />
          <DashboardCard label='Renovações' icon={Activity} amount={100} description='Renovações pendentes' />
        </>
      )}
    </div>
  );
};

export default SectionCardDashboard;