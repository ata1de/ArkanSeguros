"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export function CarouselLoop() {
    const plugin = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true})
      )
  return (
    <div className="bg-Yellow h-[200px] flex justify-center items-center mt-12">
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-[90%]" 
      >
        <CarouselContent className="">
          <CarouselItem className="basis-[200px]">
                <Image src='/providers/amil.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
                <Image src='/providers/sulamerica.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
            <Image src='/providers/amil.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
            <Image src='/providers/amil.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
            <Image src='/providers/amil.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
            <Image src='/providers/amil.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
                <Image src='/providers/amil.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
                <Image src='/providers/sulamerica.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
            <Image src='/providers/amil.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
            <Image src='/providers/amil.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
            <Image src='/providers/amil.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
          <CarouselItem className="basis-[200px]">
            <Image src='/providers/amil.svg' alt='icon' width={100} height={100}/>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
