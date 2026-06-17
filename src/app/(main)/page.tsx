"use client"

import { CarouselLoop } from "@/components/Carousel";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import { services } from "@/data/services";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const styleServices = {
    backgroundImage: "url('/bg_waves.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  }
  useEffect(() => {
    Aos.init({ duration: 1200 });
    Aos.refresh();
  }, []);


  return (
    <>
      <Hero title="Mais que uma consultoria, uma parceria" lastWordSubTitle="" bgUrl="/arkan_bg.svg"/>

      <div className="bg-WhiteDefault rounded-lg mb-7 ">
        <div id='sobre' data-aos='fade-right' data-aos-duration='1200' className='flex items-center justify-start  min-[1550px]:justify-center gap-12 py-20 px-8 sm:px-24'>
          <Image width={488} height={400} className='w-[300px] items-center justify-center pl-5 hidden min-[830px]:flex' src="/arkan_vertical.svg" alt="logo da Arkan" />

          <div  className='flex justify-center items-center lg:items-start flex-col pl-5 w-[700px]'>
            <p className='text-sm font-bold pb-8'>A <span className='text-Yellow '>Arkan Seguros</span> é uma empresa verdadeiramente moderna, impulsionada por uma equipe altamente motivada de profissionais excepcionais e experientes.</p>
            <p className='text-sm text-DarkBlue text-left '>A Arkan Consultoria é especialista em Gestão Comercial para licitações públicas, atuando há mais de 9 anos na geração de oportunidades e no crescimento de empresas que desejam atuar no mercado governamental. Com experiência, conhecimento técnico e acompanhamento estratégico, ajudamos nossos clientes a participarem de processos licitatórios com mais segurança, competitividade e chances reais de sucesso.

            Nossa atuação abrange todas as etapas das licitações, desde a análise de editais e organização documental até a elaboração de propostas e suporte especializado durante os processos. Mais do que assessorar empresas em licitações, trabalhamos para estruturar estratégias comerciais que impulsionam resultados e fortalecem a atuação no setor público.

            Comprometidos com a excelência, transparência e proximidade, construímos relações de confiança e entregamos soluções que transformam oportunidades em crescimento sustentável para nossos clientes.
            </p>
          </div>
        </div>
        <div style={styleServices} className="flex flex-col justify-center items-center gap-[28px] mx-6 ">
            <h2 className="text-LightBlue font-bold text-6xl">Nossos produtos</h2>
            <p className="font-normal text-base text-DarkBlue">Juntos vamos encontrar a melhor opção para te proteger em diversas áreas.</p> 

            <div  className=" flex flex-wrap lg:grid lg:grid-cols-4 justify-center items-center gap-5 ">
              {services.map((service) => (
                <ServiceCard key={service.name} name={service.name} icon={service.icon} title={service.title} />
              ))}
            </div>
        </div>
      </div>

      <CarouselLoop/>

      <Testimonials/>
    </>
  );
}
