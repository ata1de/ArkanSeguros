import React from 'react'
import DashboardCard from './DashboardCard'
import { Activity, CreditCard, DollarSign, User } from 'lucide-react'

const SectionCardDashboard = () => {
  return (
    <div  className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
        <DashboardCard label='Clientes' icon={DollarSign} amount={100} description='Clientes ativos' />
        <DashboardCard label='Apólices' icon={User} amount={100} description='Apólices ativas' />
        <DashboardCard label='Sinistros' icon={CreditCard} amount={100} description='Sinistros abertos' />
        <DashboardCard label='Renovações' icon={Activity} amount={100} description='Renovações pendentes' />
    </div>
  )
}

export default SectionCardDashboard