"use client"

import Header from '@/components/Header'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, []);

  return (
    <div className='border-t-4 border-Yellow px-[32px] min-[465px]:px-[72px] pb-[52px] bg-DarkBlue min-h-[739px] text-white'>
      <p className='font-bold text-5xl min-[465px]:text-7xl pt-[42px] mb-[32px]'>Contatos</p>

      <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom" className='rounded-md border-4 border-LightBlue mb-4 bg-MediumBlue flex flex-col md:flex-row justify-between items-center p-3 text-WhiteDefault min-[465px]:p-6 '>
        <div className='flex flex-col justify-center items-start gap-[6px] '>
          <p className='font-semibold text-2xl'>Arkan Seguros</p>
          <p className='text-slate-300'>R. Mearim, 614 - Estância, Recife - PE, 50771-450</p>
          <div className='flex justify-center items-center gap-3'>
            <Image src="/icons/icon_contact_phone.svg" alt="icon de celular" width={24} height={24} />
            <p className='text-slate-300'>(81) 98688-4201</p>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <Image src="/icons/icon_contact_email.svg" alt="icon de email" width={24} height={24} />
            <p className='text-slate-300'>Contato@arkanseguros.com.br</p>
          </div>
        </div>

        {/* Separator vertical, escondido em telas md e maiores */}
        <Separator orientation="vertical" className=" hidden h-[150px] w-[2px] bg-GrayBlue md:block" />

        {/* Separator horizontal, mostrado apenas em telas md e maiores */}
        <Separator orientation="horizontal" className="block w-full h-[2px] bg-GrayBlue md:hidden max-[768px]:my-5" />

        <Image src="/icons/icon_localization.svg" alt="icone de localização" width={100} height={100} />
      </div>

      <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="relative overflow-hidden" style={{ paddingBottom: '222px', position: 'relative'}}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.110574255994!2d-34.9277703!3d-8.0902051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1eeab998b3a1%3A0x31ec5e9ee4f1cad7!2sR.%20Mearim%2C%20614%20-%20Est%C3%A2ncia%2C%20Recife%20-%20PE%2C%2050771-450!5e0!3m2!1spt-BR!2sbr!4v1719056638261!5m2!1spt-BR!2sbr" 
          className="absolute top-0 left-0 w-full h-[222px]" 
          style={{ border: 0 }} 
          allowFullScreen={false}   
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  )
}

export default Contact
