import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

interface HeroInterface {
  title: string,
  lastWordSubTitle: string,
  bgUrl: string
}

function findWord(service: string){
  switch(service) {
    case "plano-de-saude":
      return 'sua saúde'
    case "seguros-automotivos":
      return 'seu automóvel'
    case "plano-odontologico":
      return 'sua felicidade'
    case "certificados-digitais":
      return 'seu certificado'
    case "seguros-prediais":
      return 'seu seguro'
    case "seguro-de-vida":
      return 'sua vida'
    case "seguros-equipamentos-maquinas":
      return 'seus equipamentos'
    case "protecao-veicular":
      return 'seu veiculo'

    default:
      return 'sua empresa'
  }
}

const Hero = ({title, lastWordSubTitle, bgUrl }: HeroInterface) => {
  const containerStyle = {
    position: 'relative',
    height: '100vh',
    backgroundImage: `url(${bgUrl})`,
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
  // ####################################### titulo dinamico ##############################
  const listTitle = title.split(' ')
  const lenghtListTitle = listTitle.length
  const lastWord = listTitle[lenghtListTitle -1]
  const newTitleWithoutLastWord = listTitle.slice(0, lenghtListTitle-1).join(' ')
  // ##########################################################################################


  const subTitleLastWord = findWord(lastWordSubTitle)
  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle} className='flex flex-col gap-5 w-1/2 items-left justify-center ml-[72px] h-full'>
        <h1 className='font-bold text-[48px] max-[475px]:text-[36px] text-WhiteDefault max-w-[500px]'>
          {newTitleWithoutLastWord} <span className='text-Yellow'>{lastWord}.</span>
        </h1>
        <p className='font-normal text-[24px] max-[475px]:text-[16px]'>Conte conosco para proteger <span className='text-Yellow'>você</span> & <span className='text-Yellow'>{subTitleLastWord}.</span></p>
        <Link href="https://wa.me/+5581988575153?text=Ol%C3%A1%2C+venha+nos+conhecer%2C+n%C3%A3o+hesite+em+mandar+mensagem%21%21" target='_blank' className='no-underline w-[313px]'>
          <Button className='p-5 bg-Yellow w-[313px] rounded-full h-[72px] font-bold text-2xl max-[475px]:text-xl max-[475px]:w-[230px]'>Entrar em contato</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
