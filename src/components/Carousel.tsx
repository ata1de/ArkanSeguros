"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import CarouselProvider from "./CarouselItem"

export function CarouselLoop() {
    const plugin = React.useRef(
        Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true})
      )
  return (
    <div className="bg-Yellow h-[200px] flex justify-center items-center mt-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[plugin.current]}
        className="w-full max-w-[90%]" 
      >
        <CarouselContent className="">
          <CarouselProvider urlImage='/providers/amil.svg' linkProvider="https://institucional.amil.com.br/"/>
          <CarouselProvider urlImage='/providers/sulamerica.png' linkProvider="https://portal.sulamericaseguros.com.br/home.htm"/>
          <CarouselProvider urlImage="/providers/hapvida.png" linkProvider="https://www.hapvida.com.br/site/"/>
          <CarouselProvider urlImage="/providers/mapfre.png" linkProvider="https://www.mapfre.com.br/para-voce/"/>
          <CarouselProvider urlImage="/providers/bradesco.png" linkProvider="https://banco.bradesco/html/classic/index.shtm"/>
          <CarouselProvider urlImage="/providers/allianz.png" linkProvider="https://www.allianz.com.br/"/>
          <CarouselProvider urlImage="/providers/odontoprev.png" linkProvider="https://www.odontoprev.com.br/"/>
          <CarouselProvider urlImage="/providers/porto-seguro.png" linkProvider="https://www.portoseguro.com.br/"/>
          <CarouselProvider urlImage='/providers/amil.svg' linkProvider="https://institucional.amil.com.br/"/>
          <CarouselProvider urlImage='/providers/sulamerica.png' linkProvider="https://portal.sulamericaseguros.com.br/home.htm"/>
          <CarouselProvider urlImage="/providers/hapvida.png" linkProvider="https://www.hapvida.com.br/site/"/>
          <CarouselProvider urlImage="/providers/mapfre.png" linkProvider="https://www.mapfre.com.br/para-voce/"/>
          <CarouselProvider urlImage="/providers/bradesco.png" linkProvider="https://banco.bradesco/html/classic/index.shtm"/>
          <CarouselProvider urlImage="/providers/allianz.png" linkProvider="https://www.allianz.com.br/"/>
          <CarouselProvider urlImage="/providers/odontoprev.png" linkProvider="https://www.odontoprev.com.br/"/>
          <CarouselProvider urlImage="/providers/porto-seguro.png" linkProvider="https://www.portoseguro.com.br/"/>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
