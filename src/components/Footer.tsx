import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'

const Footer = () => {
  return (
    <div className='bg-DarkBlue border-t-2 border-Yellow px-[83px] pt-[100px]  '>
        <div className='flex justify-between items-center'>
            <Image src='/arkan_logo_dark.svg' width={358} height={289.5} alt='Logo Arkan'/>

            <div className='flex flex-col justify-center items-center md:items-end gap-4'>
                <div>
                    <p className='font-bold text-center md:text-right text-WhiteDefault'>Contato</p>
                    <p className='text-LightGray text-center md:text-right'>999999 | 988989</p>
                    <p className='text-LightGray text-center md:text-right'>arkan@email.com</p>
                </div>
                <div>
                    <p className='font-bold text-center md:text-right text-WhiteDefault'>Redes Sociais</p>
                    <p className='text-LightGray text-center md:text-right'>Instagram</p>
                    <p className='text-LightGray text-center md:text-right'>Whatsapp</p>
                    <p className='text-LightGray text-center md:text-right'>Linkedin</p>    
                </div>
            </div>
        </div>

        <Separator className='my-4 bg-GrayBlue'/>

        <p className='text-GrayBlue text-center pb-2'>Todos os direitos reservados © | Arkan Seguros</p>

    </div>
  )
}

export default Footer