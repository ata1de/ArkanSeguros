import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import SalesCard from './SalesCard'
import { UserRound } from 'lucide-react'



const SalesCardSection = () => {
  return (
    <div className={cn('flex w-full flex-col gap-3 rounded-xl border p-5 shadow')}>
        <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
            You made 
            </p>
            <SalesCard name='John Doe' email='john@email' saleAmount={100} icon={UserRound}/>
            <SalesCard name='Alice Smith' email='alice@email.com' saleAmount={150} icon={UserRound}/>
            <SalesCard name='Bob Johnson' email='bob@email.com' saleAmount={200} icon={UserRound}/>
            <SalesCard name='Charlie Brown' email='charlie@email.com' saleAmount={250} icon={UserRound}/>
            <SalesCard name='Diana Prince' email='diana@email.com' saleAmount={300} icon={UserRound}/>
            <SalesCard name='Evan Wright' email='evan@email.com' saleAmount={350} icon={UserRound}/>
            <SalesCard name='Fiona Gallagher' email='fiona@email.com' saleAmount={400} icon={UserRound}/>
            <SalesCard name='George King' email='george@email.com' saleAmount={450} icon={UserRound}/>
            <SalesCard name='Hannah Abbott' email='hannah@email.com' saleAmount={500} icon={UserRound}/>
            <SalesCard name='Ian Malcolm' email='ian@email.com' saleAmount={550} icon={UserRound}/>
            <SalesCard name='Jenna Coleman' email='jenna@email.com' saleAmount={600} icon={UserRound}/>
        </section>
    </div>
    
  )
}

export default SalesCardSection