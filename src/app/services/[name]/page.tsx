"use client"

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Forms from '@/components/form'
import { Carousel } from '@/components/ui/carousel'
import { services } from '@/data/services'
import { useParams } from 'next/navigation'
import React from 'react'

const DetailsService = () => {
  const params = useParams()
  const { name } = params

  const service = services.find((service) => service.name === name)

  return (
    <div>
        <Header/>
    
        <Hero title={service?.titleHero ?? ''} lastWordSubTitle={name.toString()}/>
        
        <div className='flex flex-col items-center justify-center gap-8'>
            <h1 className='text-6xl font-bold text-LightBlue'>{service?.title}</h1>
            <p className='text-DarkBlue text-base'>Aqui você encontra todos os detalhes do serviço escolhido.</p>
            <p className='text-DarkBlue text-base'>Nome do serviço: </p>
        </div>

        <Carousel/>

        <Forms/>

        <Footer/>
    </div>


  )
}

export default DetailsService