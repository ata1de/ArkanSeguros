import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
  const containerStyle = {
    position: 'relative',
    height: '100vh',
    backgroundImage: "url('/arkan_bg.svg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to left, rgba(25, 131, 145, 0.7), rgba(9, 25, 41, 0.7))',
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle} className='flex flex-col gap-5 w-1/2 items-left justify-center ml-[72px] h-full'>
        <h1 className='font-bold text-[48px] text-WhiteDefault max-w-[500px]'>
          Mais que um seguro, uma <span className='text-Yellow'>parceria.</span>
        </h1>
        <p className='font-normal text-[24px]'>Conte conosco para proteger <span className='text-Yellow'>você</span> & a <span className='text-Yellow'>sua empresa.</span></p>
        <Link href="https://wa.me/+5581988575153?text=Ol%C3%A1%2C+venha+nos+conhecer%2C+n%C3%A3o+hesite+em+mandar+mensagem%21%21" target='_blank' className='no-underline'>
          <Button className='p-5 bg-Yellow w-[313px] rounded-full h-[72px] font-bold text-2xl'>Entrar em contato</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
