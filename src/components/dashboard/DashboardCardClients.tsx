import { cn } from '@/lib/utils';
import { LucideIcon, TrendingUp } from 'lucide-react'; // Certifique-se de importar o ícone necessário
import React from 'react';

interface DashboardCardProps {
    label: string;
    icon: LucideIcon;
    amount: number;
    description: string;
    statsIcon: LucideIcon;
}

const DashboardCardClients: React.FC<DashboardCardProps> = ({ label, icon: Icon, amount, description, statsIcon: StatsIcon }) => {
  return (
        <div className={cn('flex w-full flex-col gap-3 rounded-xl border border-gray-600 p-5 shadow')}>
          <div className="flex justify-between gap-2">
            <p className='text-lg'>{label}</p>
            <Icon className='h-4 w-4 text-gray-400'/>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className='text-2xl font-semibold'>{amount}%</h2>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <StatsIcon className={`h-4 w-4 ${StatsIcon === TrendingUp ? 'text-green-400' : 'text-red-400'}`}/>
              <span>{description}</span>
            </div>
          </div>
        </div>
  );
};

export default DashboardCardClients;
