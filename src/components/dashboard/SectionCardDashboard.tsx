import { ClientManagerProps } from '@/types/leads';
import { PeopleTypeProps } from '@/utils/PeopleTypeFunction';
import { accuracyStatusProps } from '@/utils/accuracyStatus';
import { ProgressClientsProps } from '@/utils/progressClients';
import { Activity, DollarSign, LineChart, Loader, TrendingDown, TrendingUp, UserPlus } from 'lucide-react';
import React from 'react';
import { SkeletonCard } from '../Skeleton';
import DashboardCard from './DashboardCard';
import DashboardCardClients from './DashboardCardClients';

interface SectionCardDashboardProps {
  clientManager: ClientManagerProps
  peopleTypeManager: PeopleTypeProps
  accuracyRate: accuracyStatusProps
  progressClients: ProgressClientsProps
  isLoadingProgressStatus: boolean
  isLoadingClientManager: boolean;
  isLoadingPeopleManager: boolean;
  isLoadingAccurate: boolean;
  isRefetchingAccurate: boolean;
  isRefetchingProgressStatus: boolean;
}

const SectionCardDashboard: React.FC<SectionCardDashboardProps> = ({
  clientManager,
  isLoadingClientManager,
  peopleTypeManager,
  progressClients,
  isLoadingPeopleManager,
  accuracyRate,
  isLoadingAccurate,
  isLoadingProgressStatus,
  isRefetchingAccurate,
  isRefetchingProgressStatus
}) => {
  const isLoading = isLoadingClientManager || isLoadingProgressStatus || isLoadingPeopleManager || isLoadingAccurate
  const isRefetching = isRefetchingAccurate || isRefetchingProgressStatus



  return (
    <div className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
      {isLoading || isRefetching ? (
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
            amount={clientManager?.newClientCount || 0}
            diff={clientManager?.difference || 0}
            description={'em relação aos clientes antigos'}
            plus={clientManager?.isNewClientPrevalence}
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
            isProgress={false}
          />
          <DashboardCardClients 
          label='Clientes em Progresso' 
          icon={Activity} 
          amount={progressClients.percentProgress}
          statsIcon={Loader} 
          description={`${progressClients.amountProgress} cliente's estão no processo para ser efetivados`} 
          isProgress={true}
          />
        </>
      )}
    </div>
  );
};

export default SectionCardDashboard;
