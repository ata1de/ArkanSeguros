"use client"

import Hero from '@/components/Hero';
import { AboutUs } from '@/data/aboutUs';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
    const aboutUs = AboutUs
    useEffect(() => {
        Aos.init({ duration: 1000 });
        Aos.refresh();
      }, []);
    
  return (
    <div>
        <Hero title="Proteção além da expectativa, confiança além do tempo" lastWordSubTitle="" bgUrl="/arkan_bg_about.jpg"/>

        <div className='flex flex-col justify-center items-center gap-6 mt-4'>
            <div className='px-[72px] flex flex-col justify-center max-w-[1296px]'>
                <p className='text-5xl text-LightBlue font-bold text-center pb-10'>Sobre nós</p>
                <p 
                className='pb-5 text-lg'
                dangerouslySetInnerHTML={{ __html: aboutUs.aboutUs.replace(/\n/g, '<br>') }}
                />
                    
                <div className='bg-DarkBlue text-bold w-auto rounded-xl flex justify-center items-center h-[140px]'>
                    <p className='text-center text-[24px] text-Yellow max-w-[811px] max-[720px]:text-[18px] max-[590px]:text-[14px] max-[500px]:text-[12px]'>A Arkan Seguros ficará à disposição para auxiliar no
                    desenvolvimento da sua empresa</p>
                </div>
            </div>

            <div className='px-[72px] flex flex-col justify-center max-w-[1296px]'>
                <p className='text-5xl text-LightBlue font-bold text-center pb-10'>Como surgimos</p>
                <p 
                className='pb-5 text-lg'
                dangerouslySetInnerHTML={{ __html: aboutUs.companyHistory.replace(/\n/g, '<br>') }}
                />
            </div>

        </div>
    </div>
  )
}

export default About