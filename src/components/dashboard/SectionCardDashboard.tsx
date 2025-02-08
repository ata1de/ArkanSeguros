import { ClientManagerProps, PeopleTypeProps, ProgressClientsProps, accuracyStatusProps } from '@/types/leads';
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
            amount={clientManager?.newClientsCount || 0}
            diff={clientManager?.difference || 0}
            description={'em relação aos clientes antigos'}
            plus={clientManager?.isNewClientPrevalence}
          />
          <DashboardCard
            label={`Pessoas ${peopleTypeManager?.isPfPrevalence ? 'Física' : 'Jurídica'}`}
            icon={DollarSign}
            amount={peopleTypeManager?.isPfPrevalence ? peopleTypeManager?.pfCount : peopleTypeManager?.pjCount}
            diff={peopleTypeManager?.difference || 0}
            description={` em relação às pessoas ${peopleTypeManager?.isPfPrevalence ? 'físicas' : 'jurídicas'}`}
            plus={true}
          />
          <DashboardCardClients
            label='Clientes Efetivados'
            icon={LineChart}
            amount={accuracyRate?.doneAccuracyRate || 0}
            description={`${accuracyRate?.variationRate.toFixed(2)}% em relação aos clientes cancelados`}
            statsIcon={accuracyRate?.isPositiveVariation ? TrendingUp : TrendingDown}
            isProgress={false}
          />
          <DashboardCardClients
          label='Clientes em Progresso'
          icon={Activity}
          amount={progressClients.percentage}
          statsIcon={Loader}
          description={`${progressClients.inProgressCountLeads} ${
                  progressClients.inProgressCountLeads > 1 ? "clientes estão" : "cliente está"
                } no processo para a efetivação`
          }
          isProgress={true}
          />
        </>
      )}
    </div>
  );
};

export default SectionCardDashboard;
