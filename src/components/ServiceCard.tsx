import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'

interface ServiceCardProps {
    name: string
    icon: string
    
}

const ServiceCard = ({name, icon}: ServiceCardProps) => {
  return (
    <div className='bg-white w-[308px] h-[310px] flex flex-col items-start justify-center pl-[22px]'>
        <Image src={icon} alt='icon' width={32} height={32}/>
        <Separator className='my-4 max-w-[260px]'/>
        <p className='max-w-[213px] font-bold text-2xl'>{name}</p>
    </div>
  )
}

export default ServiceCard