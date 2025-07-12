'use client'

import * as LucideIcons from 'lucide-react'
import { type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Separator } from './ui/separator'

interface ServiceCardProps {
  title: string
  icon: string | null
  svgIcon: string | undefined
  name: string
}

const ServiceCard = ({ title, icon, name, svgIcon }: ServiceCardProps) => {
  const router = useRouter()

  const LucideIcon = svgIcon ? (LucideIcons as unknown as Record<string, LucideIcon>)[svgIcon] : undefined

  return (
    <div
      data-aos='flip-left'
      data-aos-duration='1500'
      className='bg-white shadow-md w-[250px] h-[260px] flex flex-col items-start justify-center pl-[22px] cursor-pointer border-2 border-LightGray rounded'
      onClick={() => router.push(`/services/${name}`)}
    >
      {icon ? (
        <Image src={icon} alt={`Icon do serviço ${title}`} width={32} height={32} />
      ) : LucideIcon ? (
        <LucideIcon
          className='text-LightBlue w-8 h-8'
          aria-label={`Icon do serviço ${title}`}
        />
      ) : null}

      <Separator className='my-4 max-w-[260px]' />
      <p className='max-w-[250px] font-bold text-md text-DarkBlue pr-2'>{title}</p>
    </div>
  )
}

export default ServiceCard