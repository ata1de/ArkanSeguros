"use client"

import { AccordionService } from '@/components/Accordion'
import Hero from '@/components/Hero'
import { Button } from '@/components/ui/button'
import { Carousel } from '@/components/ui/carousel'
import { questionsServices } from '@/data/questionsServices'
import { services } from '@/data/services'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const DetailsService = () => {
  const params = useParams()
  const { name } = params

  const service = services.find((service) => service.name === name)

  const AccordionQuestions = questionsServices.find((question) => question.name === name)

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

        <div className='bg-DarkBlue flex justify-center items-center min-h-[600px]'>
          <div className='max-[810px]:flex-col min-[880px]:w-[880px] min-[1290px]:w-[1290px] flex flex-row gap-3 justify-center items-center'>
            <Image width={280} height={380} src='/services/questionAccordion.svg' alt=''/>

            <div className='flex flex-col items-start w-1/2 gap-3'>
              <p className='text-gray-400 font-medium'>Construa você seu próprio destino</p>
              <p className='text-4xl font-bold text-Yellow'>Perguntas mais frequentes</p>
              <AccordionService name={AccordionQuestions?.name!} questions={AccordionQuestions?.questions!}/>
            </div>
          </div>
        </div>

        <Carousel/>
    </div>


  )
}

export default DetailsService