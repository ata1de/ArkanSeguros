import React from 'react'
import { CarouselItem } from './ui/carousel'
import Image from 'next/image'
import Link from 'next/link'

interface CarouselProvider {
    linkProvider: string
    urlImage: string
}

const CarouselProvider = ({ linkProvider, urlImage}: CarouselProvider) => {
  return (
    
        <CarouselItem className="basis-[200px] flex items-center justify-center">
            <Link href={linkProvider} target='_blank'>
                <Image src={urlImage} alt='icon' width={100} height={100}/>
            </Link>
        </CarouselItem>
  )
}

export default CarouselProvider