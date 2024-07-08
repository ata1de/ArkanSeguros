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

  const styleAccordion = {
    backgroundImage: `url('/bg_login.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

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

        <div className='bg-DarkBlue flex justify-center items-center min-h-[600px] relative' style={styleAccordion} >
          <div className='max-[810px]:flex-col min-[880px]:w-[880px] min-[1290px]:w-[1290px] flex flex-row gap-5 justify-center items-center'>
            <Image width={300} height={380} src={AccordionQuestions?.image!} alt='' className='rounded-lg mr-5'/>

            <div className='flex flex-col items-start w-1/2 gap-3'>
              <p className='text-gray-400 font-medium'>Construa você seu próprio destino</p>
              <p className='text-4xl font-bold text-Yellow'>Perguntas mais frequentes</p>
              <AccordionService name={AccordionQuestions?.name!} questions={AccordionQuestions?.questions!} image=''/>
            </div>
          </div>
          {/* <Image width={40} height={40} src='/questionsServices/question.svg' alt='question icon' className='absolute left-[14%] bottom-20 rotate-[20deg]'/>
          <Image width={40} height={40} src='/questionsServices/question.svg' alt='question icon' className='absolute left-[80%] top-24 rotate-[160deg]'/> */}
        </div>

        <Carousel/>
    </div>


  )
}

export default DetailsService