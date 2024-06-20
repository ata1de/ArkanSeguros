import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'
import { NavigationMenuDemo } from './NavigationMenu'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-WhiteDefault h-[112px]'>
        <Image className='ml-[72px]' src="/arkan.svg" alt="Logo" width={153} height={54} />

        <div className='flex justify-center items-center gap-[65px] pr-[48px]'>
            <Link className='font-medium text-xl' href='/'>Home</Link>
            <NavigationMenuDemo/>
            <Link className='font-medium text-xl' href='/sobre'>Sobre</Link>
            <Link className='font-medium text-xl' href='/contatos'>Contatos</Link>
        </div>
    </div>
  )
}

export default Header