import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface SalesCardType  {
    name: string
    email: string
    saleAmount: number
    icon: LucideIcon

}

const SalesCard = (props:SalesCardType ) => {
    const firstName = props.name.split(' ')[0]
  return (
    <div className='flex flex-wrap justify-between gap-3'>
                <section className='flex justify-between gap-3'>
                    <props.icon className='rounded-full p-1 h-12 w-12'/>
                    <div className='text-sm'>
                        <p>{props.name}</p>
                        <div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400'>{props.email}</div>
                    </div>
                    <p>{props.saleAmount}</p>
                </section>
    </div>
  )
}

export default SalesCard