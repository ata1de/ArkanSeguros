"use client"

import { AccordionService } from '@/components/Accordion'
import { CarouselLoop } from '@/components/Carousel'
import Hero from '@/components/Hero'
import { Button } from '@/components/ui/button'
import { questionsServices, ServiceQuestions } from '@/data/questionsServices'
import { Services, services } from '@/data/services'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DetailsService = () => {
  const params = useParams()
  const { name } = params
  const [uniqueService, setUniqueService] = useState<Services>()
  const [accordionQuestions, setAccordionQuestions] = useState<ServiceQuestions>()

  useEffect(() => {
    const service = services.find((service) => service.name === name)
    const AccordionQuestions = questionsServices.find((question) => question.name === name)
    setUniqueService(service)
    setAccordionQuestions(AccordionQuestions)
  }, [name])

  if (!accordionQuestions || !uniqueService) {
    return <div className='min-h-screen flex justify-center items-center'>
      <Loader2Icon className='text-Yellow animate-spin' size={120}/>
    </div>;
  }

  const styleAccordion = {
    backgroundImage: `url('/bg_login.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div>
      <Hero title={uniqueService?.titleHero ?? ''} lastWordSubTitle={name.toString()} bgUrl={uniqueService?.url_bg ?? ''} />

      <div className='flex flex-col items-start justify-center gap-8 p-[72px]'>
        <h1 className='text-6xl font-bold text-LightBlue'>{uniqueService?.title}</h1>
        <p
          className='text-DarkBlue text-lg max-w-[1296px]'
          dangerouslySetInnerHTML={{ __html: uniqueService?.description.replace(/\n/g, '<br>') }}
        />
        <Link href="https://wa.me/+5581988575153?text=Ol%C3%A1%2C+venha+nos+conhecer%2C+n%C3%A3o+hesite+em+mandar+mensagem%21%21">
          <Button className='mt-5 bg-LightBlue w-[240px] rounded-full'>Contrate agora</Button>
        </Link>
      </div>

      <CarouselLoop />

      <div className='bg-DarkBlue flex justify-center items-center  min-h-[600px] relative' style={styleAccordion}>
        <div className='max-[810px]:flex-col min-[880px]:w-[880px] min-[1290px]:w-[1290px] flex flex-row gap-5 justify-center items-center'>
          <Image width={300} height={380} src={accordionQuestions?.image!} alt='' className='rounded-lg mr-5 max-[810px]:hidden' />

          <div className='flex flex-col items-start w-1/2 gap-3 max-[810px]:my-7 max-[810px]:w-full'>
            <p className='text-gray-400 font-medium'>Construa você seu próprio destino</p>
            <p className='text-4xl font-bold text-Yellow'>Perguntas mais frequentes</p>
            <AccordionService name={accordionQuestions?.name!} questions={accordionQuestions?.questions!} image='' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default DetailsService
