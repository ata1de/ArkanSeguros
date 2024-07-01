import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { SkeletonCard } from '../Skeleton';

interface DashboardCardProps {
    label: string;
    icon: LucideIcon;
    amount: number;
    description: string;
    diff?: number;
    isLoading?: boolean;
    plus?: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ label, icon: Icon, amount, description, diff, isLoading, plus }) => {
  return (
        <div className={cn('flex w-full flex-col gap-3 rounded-xl border border-gray-600 p-5 shadow')}>
          <div className="flex justify-between gap-2">
            <p className='text-lg'>{label}</p>
            <Icon className='h-4 w-4 text-gray-400'/>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className='text-2xl font-semibold'>{amount}</h2>
            { diff === 0 ? <p className='text-xs text-gray-400'>Sem diferença nos dados</p> 
            : <p className='text-xs text-gray-400 '><span className={plus ? "text-green-500" : "text-red-500"}>{plus ? '+' : '-'}{diff}</span> {description}</p>}
          </div>
        </div>
  );
};

export default DashboardCard;