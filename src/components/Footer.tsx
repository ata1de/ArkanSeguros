import Image from 'next/image'
import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-DarkBlue border-t-2 border-Yellow px-[83px] pt-[100px]  '>
        <div className='flex flex-col gap-8 md:gap-0 md:flex-row justify-between items-center'>
            <Image src='/arkan_logo_dark.svg' width={358} height={289.5} alt='Logo Arkan'/>

            <div className='flex flex-col justify-center items-center md:items-end gap-4'>
                <div>
                    <p className='font-bold text-center md:text-right text-WhiteDefault'>Contato</p>
                    <p className='text-LightGray text-center md:text-right'>98688-4201 | 988575153</p>
                    <p className='text-LightGray text-center md:text-right'>Contato@arkanseguros.com.br</p>
                </div>
                <div>
                    <p className='font-bold text-center md:text-right text-WhiteDefault'>Redes Sociais</p>
                    <Link href='https://www.instagram.com/arkanseguros/' target='_blank' className='no-underline'>
                        <p className='text-LightGray text-center md:text-right'>Instagram</p>
                    </Link>
                    <Link href="https://wa.me/+5581986884201?text=Ol%C3%A1%2C+venha+nos+conhecer%2C+n%C3%A3o+hesite+em+mandar+mensagem%21%21" target='_blank' className='no-underline'>
                        <p className='text-LightGray text-center md:text-right'>Whatsaap</p>
                    </Link>
                    <Link href='https://www.facebook.com/arkanseguro/' target='_blank' className='no-underline'>
                        <p className='text-LightGray text-center md:text-right'>Facebook</p>
                    </Link>    
                </div>
            </div>
        </div>

        <Separator className='my-4 bg-GrayBlue'/>

        <p className='text-GrayBlue text-center pb-3'>Todos os direitos reservados © | Arkan Seguros</p>

    </div>
  )
}

export default Footer