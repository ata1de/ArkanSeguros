import React from 'react';
import DashboardCard from './DashboardCard';
import { Activity, CreditCard, DollarSign, LineChart, TrendingDown, TrendingDownIcon, TrendingUp, TrendingUpIcon, User, UserPlus } from 'lucide-react';
import { isClientType } from '@/utils/isClientFunction';
import { SkeletonCard } from '../Skeleton';
import { PeopleTypeProps } from '@/utils/PeopleTypeFunction';
import { accuracyStatusProps } from '@/utils/accuracyStatus';
import DashboardCardClients from './DashboardCardClients';

interface SectionCardDashboardProps {
  clientManager: isClientType | undefined
  peopleTypeManager: PeopleTypeProps | undefined
  accuracyRate: accuracyStatusProps | undefined // Permitindo que clientManager seja undefined
  isLoading: boolean;
}

const SectionCardDashboard: React.FC<SectionCardDashboardProps> = ({ clientManager, isLoading, peopleTypeManager, accuracyRate }) => {
  return (
    <div className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
      {isLoading || (!clientManager || !peopleTypeManager || !accuracyRate) ? ( 
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
          <DashboardCardClients
          label='Clientes Efetivados' 
          icon={LineChart} 
          amount={accuracyRate.accuracyRate} 
          description={`${accuracyRate.variation}% em relação aos clientes cancelados`} 
          statsIcon={accuracyRate.resultVariation ? TrendingUp : TrendingDown}
          />
          <DashboardCard label='Renovações' icon={Activity} amount={100} description='Renovações pendentes' />
        </>
      )}
    </div>
  );
};

export default SectionCardDashboard;