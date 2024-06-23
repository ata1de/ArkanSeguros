"use client"

import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'
import { useRouter } from 'next/navigation'

interface ServiceCardProps {
    title: string
    icon: string
    name: string
    
}

const ServiceCard = ({title, icon, name}: ServiceCardProps) => {
  const router = useRouter()
  return (
    <div 
    data-aos='flip-left' data-aos-duration='1500'
     className='bg-white shadow-md w-[250px] h-[260px] flex flex-col items-start justify-center pl-[22px] cursor-pointer border-2 border-LightGray rounded' 
     onClick={()=> router.push(`/services/${name}`)}
     >
        <Image src={icon} alt={`Icon do serviço ${title}`} width={32} height={32}/>
        <Separator className='my-4 max-w-[260px]'/>
        <p className='max-w-[213px] font-bold text-xl h- text-DarkBlue'>{title}</p>
    </div>
  )
}

export default ServiceCard