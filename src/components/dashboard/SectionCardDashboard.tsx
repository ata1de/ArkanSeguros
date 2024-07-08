import React from 'react';
import DashboardCard from './DashboardCard';
import { Activity, DollarSign, LineChart, TrendingDown, TrendingUp, UserPlus } from 'lucide-react';
import { isClientType } from '@/utils/isClientFunction';
import { SkeletonCard } from '../Skeleton';
import { PeopleTypeProps } from '@/utils/PeopleTypeFunction';
import { accuracyStatusProps } from '@/utils/accuracyStatus';
import DashboardCardClients from './DashboardCardClients';

interface SectionCardDashboardProps {
  clientManager: isClientType
  peopleTypeManager: PeopleTypeProps 
  accuracyRate: accuracyStatusProps 
  isLoadingClientManager: boolean;
  isLoadingPeopleManager: boolean;
  isLoadingAccurate: boolean;
  isRefetchingAccurate: boolean;
}

const SectionCardDashboard: React.FC<SectionCardDashboardProps> = ({
  clientManager,
  isLoadingClientManager,
  peopleTypeManager,
  isLoadingPeopleManager,
  accuracyRate,
  isLoadingAccurate,
  isRefetchingAccurate,
}) => {
  const isLoading = isLoadingClientManager || isLoadingPeopleManager || isLoadingAccurate || isRefetchingAccurate;

  return (
    <div className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
      {isLoading ? (
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
            amount={clientManager?.clientCount || 0}
            diff={clientManager?.diff || 0}
            description='em relação aos clientes antigos'
            plus={clientManager?.newClient}
          />
          <DashboardCard
            label={`Pessoas ${peopleTypeManager?.pf ? 'Física' : 'Jurídica'}`}
            icon={DollarSign}
            amount={peopleTypeManager?.clientCount || 0}
            diff={peopleTypeManager?.diff || 0}
            description={` em relação às pessoas ${peopleTypeManager?.pf ? 'jurídicas' : 'físicas'}`}
            plus={true}
          />
          <DashboardCardClients
            label='Clientes Efetivados'
            icon={LineChart}
            amount={accuracyRate?.accuracyRate || 0}
            description={`${accuracyRate?.variation.toFixed(2)}% em relação aos clientes cancelados`}
            statsIcon={accuracyRate?.resultVariation ? TrendingUp : TrendingDown}
          />
          <DashboardCard label='Renovações' icon={Activity} amount={100} description='Renovações pendentes' />
        </>
      )}
    </div>
  );
};

export default SectionCardDashboard;
