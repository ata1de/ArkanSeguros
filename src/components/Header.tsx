"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { services } from '@/data/services'
import { cn } from '@/lib/utils'
import { NavigationMenuDemo } from './NavigationMenu'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'
import { Separator } from './ui/separator'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const Header = () => {
  const { scrollY} = useScroll()

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest> 150) {
      setHidden(true)
    } else{
      setHidden(false)
    }
  })
  return (
    <motion.div 
    className=' sticky top-0 z-50 flex justify-between items-center bg-WhiteDefault h-[112px]'
    variants={{
      visible: { y: 0},
      hidden: { y: '-100%'}
    }}
    animate={hidden ? 'hidden' : 'visible'}
    transition={{ duration: 0.35, ease: 'easeInOut'}}
    >
        <Link href='/'>
          <Image className='ml-[72px]' src="/arkan.svg" alt="Logo da Arkan" width={153} height={54} />
        </Link>

        <div className='hidden lg:flex justify-center items-center gap-[65px] pr-[48px]'>
            <Link className='font-medium text-xl transition relative no-underline hover:underline-after' href='/'>Home</Link>
            <NavigationMenuDemo/>
            <Link className='font-medium text-xl transition relative no-underline hover:underline-after' href='/about'>Sobre</Link>
            <Link className='font-medium text-xl transition relative no-underline hover:underline-after' href='/contact'>Contatos</Link>
        </div>

        <Sheet>
        <SheetTrigger asChild>
          <MenuIcon className='block lg:hidden cursor-pointer mr-[48px]' size={28} />
        </SheetTrigger>
        <SheetContent className='bg-MediumBlue'>
          <SheetHeader>
            <SheetTitle className='flex gap-2 items-center'>
              <Image src="/arkan_logo_dark.svg" alt="Logo da Arkan modo escuro" width={100} height={54} />
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
            <Link className='font-medium text-xl text-GrayBlue' href='/about'>Sobre</Link>
            <Link className='font-medium text-xl text-GrayBlue' href='/contact'>Contatos</Link>
          </div>
        </SheetContent>
    </Sheet>
    </motion.div>

    
  )
}

export default Header