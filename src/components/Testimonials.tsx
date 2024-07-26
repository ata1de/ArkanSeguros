"use client"

import { testimonials } from '@/data/testimonials'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { Separator } from './ui/separator'

const Testimonials = () => {
  return (
    <div style={{background: 'linear-gradient(to bottom, #091B2F, #0A111B)'}} className='back flex flex-col max-[1350px]:py-9 min-[1350px]:flex-row justify-center items-center gap-[50px] min-h-[600px]'>
        <div className='w-1/3 max-[1079px]:w-[400px] max-[500px]:w-[328px] '>   
            <p id='titleTestimonial' className='font-bold text-[40px] text-white ' >Clientes satisfeitos, histórias verdadeiras</p>

            <p className='text-slate-400'>Experiências <span className='text-Yellow'>reais</span> que fazem a  <span className='text-Yellow'>diferença</span>. Descubra como nossos serviços <span className='text-Yellow'>transformaram</span> vidas.
            </p>
            <Link href={'/contact'} className='no-underline'>
                <Button className='mt-5 bg-Yellow w-[240px] rounded-full'>Entre em contato</Button>
            </Link>
        </div>
        <div className='flex flex-wrap lg:grid lg:grid-cols-2 justify-center items-center gap-5'>
            {testimonials.slice(0, 4).map((testimonial, index) => (
                <div key={index} className='bg-MediumBlue border-2 border-LightBlue max-[434px]:w-[340px] w-[387px] h-[214px] flex flex-col items-start justify-center rounded-md p-5 gap-2'>
                    <div className='flex justify-center items-center gap-5'>
                        <Image className='rounded-full border-LightBlue border-2' src={testimonial.image} width={44} height={44} alt='icone das testemunhas'/>
                        <p className='font-bold text-xl text-white'>{testimonial.name}</p>
                    </div>
                    <p className='text-slate-400'>{testimonial.position}</p>
                    <Separator className='max-w-[334px] bg-slate-400'/>
                    <p className=' h-[72px] font-normal text-base text-white overflow-hidden max-[334px]:truncate '>
                      {testimonial.description}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials
