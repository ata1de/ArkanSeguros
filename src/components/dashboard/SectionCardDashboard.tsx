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
            label='Clientes Novos'
            icon={UserPlus}
            amount={clientManager.clientCount}
            diff={clientManager.diff}
            description='em relação aos clientes antigos'
            plus={clientManager.newClient}
          />
          <DashboardCard 
            label={`Pessoas ${peopleTypeManager?.pf ? 'Física' : 'Jurídica'}`} 
            icon={DollarSign} 
            amount={peopleTypeManager!.clientCount}
            diff={peopleTypeManager!.diff} 
            description={` em relação as pessoas ${peopleTypeManager?.pf ? 'jurídicas' : 'físicas'}`}
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