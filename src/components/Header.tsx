import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'
import { NavigationMenuDemo } from './NavigationMenu'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Separator } from './ui/separator'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-WhiteDefault h-[112px]'>
        <Image className='ml-[72px]' src="/arkan.svg" alt="Logo" width={153} height={54} />

        <div className='hidden lg:flex justify-center items-center gap-[65px] pr-[48px]'>
            <Link className='font-medium text-xl' href='/'>Home</Link>
            <NavigationMenuDemo/>
            <Link className='font-medium text-xl' href='/sobre'>Sobre</Link>
            <Link className='font-medium text-xl' href='/contatos'>Contatos</Link>
        </div>

        <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className='block lg:hidden cursor-pointer mr-[48px]' size={28} />
        </SheetTrigger>
        <SheetContent className='bg-MediumBlue'>
          <SheetHeader>
            <SheetTitle className='flex gap-2 items-center'>
              <Image src="/arkan_logo_dark.svg" alt="Logo" width={100} height={54} />
              {/* <p className='uppercase text-2xl text-Yellow font-bold font-sans'>ARKAN</p> */}
            </SheetTitle>
            <SheetDescription className='text-left'>
              Browse our site through this area.
            </SheetDescription>
            <Separator className='w-auto'/>
          </SheetHeader>
          <div className='justify-center flex flex-col my-5 gap-5'>
            <Link className='font-medium text-xl text-GrayBlue' href='/'>Home</Link>
            <NavigationMenuDemo/>
            <Link className='font-medium text-xl text-GrayBlue' href='/sobre'>Sobre</Link>
            <Link className='font-medium text-xl text-GrayBlue' href='/contatos'>Contatos</Link>
          </div>
        </SheetContent>
    </Sheet>
    </div>

    
  )
}

export default Header