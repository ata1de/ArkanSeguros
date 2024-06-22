import { CarouselLoop } from "@/components/Carousel";
import Footer from "@/components/Footer";
import Forms from "@/components/form";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { services } from "@/data/services";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const styleServices = {
    backgroundImage: "url('/bg_waves.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  }

  return (
    <>
      <Header/>

      <Hero title="Mais que um seguro, uma parceria" lastWordSubTitle="" bgUrl="/arkan_bg.svg"/>

      <div className="bg-WhiteDefault rounded-lg mb-7">
        <div id='sobre' className='flex items-center justify-start  min-[1550px]:justify-center gap-12 py-20 px-8 sm:px-24'>
          <Image width={488} height={400} data-aos-duration='1200' className='w-[300px] items-center justify-center pl-5 hidden min-[830px]:flex' src="/arkan_vertical.svg" alt="logo da Arkan" />

          <div data-aos='fade-right' data-aos-duration='1200' className='flex justify-center items-center lg:items-start flex-col pl-5 w-[700px]'>
            <p className='text-sm font-bold pb-8'>A <span className='text-Yellow '>Arkan Seguros</span> é uma empresa verdadeira moderna, impulsionada por uma equipe altamente motivada de profissionais excepcionais e experientes</p>
            <p className='text-sm text-DarkBlue text-left '>A Arkan Seguros, com mais de 8 anos de experiência no mercado, tem como missão fundamental ajudar pessoas e empresas a encontrarem a melhor opção para cuidar da saúde, odontologia e seguros em geral. Com uma equipe altamente capacitada e dedicada, nos esforçamos para proporcionar soluções personalizadas e eficazes que atendam às necessidades específicas de cada cliente. Nosso objetivo é atender da melhor forma possível, oferecendo produtos de alta qualidade e um atendimento diferenciado. Acreditamos na construção de um relacionamento duradouro e de confiança com nossos clientes, baseado em transparência, responsabilidade e compromisso. Estamos sempre prontos para oferecer o suporte necessário, garantindo a proteção e a tranquilidade que você merece.</p>
          </div>
        </div>
        <div style={styleServices} className="flex flex-col justify-center items-center gap-[28px] mx-6 ">
            <h2 className="text-LightBlue font-bold text-6xl">Nossos seguros</h2>
            <p className="font-normal text-base text-DarkBlue">Juntos vamos encontrar a melhor opção para te proteger em diversas áreas.</p> 

            <div className=" flex flex-wrap lg:grid lg:grid-cols-4 justify-center items-center gap-5 ">
              {services.map((service) => (
                <ServiceCard key={service.name} name={service.name} icon={service.icon} title={service.title} />
              ))}
            </div>
        </div>
      </div>

      <CarouselLoop/>

      <Testimonials/>

      <Forms/>

      <Footer/>

    </>
  );
}
