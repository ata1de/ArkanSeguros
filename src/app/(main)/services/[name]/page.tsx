"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Forms from '@/components/form'
import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/ui/carousel'
import { services } from '@/data/services'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const DetailsService = () => {
  const params = useParams()
  const { name } = params

  const service = services.find((service) => service.name === name)

  return (
    <div>
        <Hero title={service?.titleHero ?? ''} lastWordSubTitle={name.toString()} bgUrl={service?.url_bg ?? ''}/>
        
        <div className='flex flex-col items-start justify-center gap-8 p-[72px]'>
            <h1 className='text-6xl font-bold text-LightBlue'>{service?.title}</h1>
            <p className='text-DarkBlue text-lg max-w-[1296px]'>{service?.description}</p>
            <Link href="https://wa.me/+5581988575153?text=Ol%C3%A1%2C+venha+nos+conhecer%2C+n%C3%A3o+hesite+em+mandar+mensagem%21%21">
                <Button className='mt-5 bg-LightBlue w-[240px] rounded-full'>Contrate agora</Button>
            </Link>
        </div>

        <Carousel/>
    </div>


  )
}

export default DetailsService