"use client"

import React, { useEffect } from 'react';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Toaster } from './ui/sonner';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from './ui/label';
import { services } from '@/data/services';
import { createClient } from '@/services/clients';
import { MaskedInput } from './InputMask';

const clientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phone: z.string()
    .regex(/^\(\d{2}\)\s\d{5}-\d{4}$/)
    .min(1),
  peopleType: z.string().min(1),
  demand: z.string().min(1),
  service: z.string().min(1),
  isClient: z.string().min(1),
});

type ClientSchema = z.infer<typeof clientSchema>;

const Forms = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ClientSchema>({
    resolver: zodResolver(clientSchema)
  });

  const handleClient = async (data: ClientSchema) => {
    reset();
    try {
      const emailConfig = {
        subject: 'Relatório de novo cliente',
        data: data
      };

      const responsePostClient = await createClient(data);
      
      if (responsePostClient.status === 200) {
        
        const response = await fetch('/api/sendMail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(emailConfig)
        });
  
        if (response.ok) {
          toast.success('Formulário enviado com sucesso!', {
            style: { backgroundColor: '#25D366', color: 'white' },
            position: 'bottom-left',
            duration: 2500 // O toast desaparecerá após alguns segundos
          });
        } else {
          toast.error('Falha ao enviar formulário. Tente novamente.', {
            style: { backgroundColor: '#EE1B22', color: 'white' },
            position: 'bottom-left',
            duration: 2500
          });
        }}
      else {
        toast.error('Erro na transferência de dados', {
          style: { backgroundColor: '#EE1B22', color: 'white' },
          position: 'bottom-left',
          duration: 2500
        });
      }
    } catch (error) {
      console.log(error);
      toast.error('Erro ao enviar o e-mail. Tente novamente.', {
        style: { backgroundColor: '#EE1B22', color: 'white' },
        position:'bottom-left', 
        duration: 2500
      });
    }
  };

  return (
    <div id='form' className='bg-LightBlue min-h-[730px] flex flex-col justify-center items-center pt-[65px]'>
      <p className='font-bold text-[72px] text-white mb-5 max-[400px]:text-[68px] max-[598px]:text-center'>
        Fale com a <span className='border-b-4 border-Yellow'>Arkan</span>
      </p>

      <form onSubmit={handleSubmit(handleClient)} className='flex flex-col justify-center items-center gap-2 w-[210px] md:w-[310px] lg:w-[908px]'>
        <div className='flex max-[465px]:flex-col items-center justify-center gap-6 mb-8'>
          <div className='flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-col gap-3 items-start'>
              <Label className='text-white text-right'>Nome</Label>
              <Input
                className={`text-black w-[200px] md:w-[300px] lg:w-[440px] ${errors.name ? 'border-red-500 border-4' : ''}`}
                placeholder='Digite seu nome'
                {...register('name')}
              />
            </div>
            <div className='flex flex-col gap-3 items-start'>
              <Label className='text-white text-right'>Email</Label>
              <Input
                className={`text-black w-[200px] md:w-[300px] lg:w-[440px] ${errors.email ? 'border-red-500 border-4' : ''}`}
                placeholder='Digite seu email'
                {...register('email')}
              />
            </div>
            <div className='flex flex-col gap-3 items-start'>
              <Label className='text-white text-right'>Como podemos te ajudar</Label>
              <select
                className={`text-slate-500 p-2 ring-offset-background bg-background rounded w-[200px] md:w-[300px] lg:w-[440px] ${errors.service ? 'border-red-500 border-4' : ''}`}
                {...register('service')}
                defaultValue={'Plano Odontológico'}
              >
                {services.map((service) => (
                  <option value={service.title} key={service.name}>{service.title}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className='flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-col gap-3 items-start'>
              <Label className='text-white text-right'>Telefone</Label>
              <MaskedInput
                mask="(99) 99999-9999"
                className={`text-black w-[200px] md:w-[300px] lg:w-[440px] ${errors.phone ? 'border-red-500 border-4' : ''}`}
                placeholder='(00) 00000-0000'
                {...register('phone')}
              />
            </div>
            <div className='flex flex-col gap-3 items-start'>
              <Label className='text-white text-right'>Segurado/Novo cliente</Label>
              <select
                className={`text-slate-500 p-2 ring-offset-background bg-background rounded w-[200px] md:w-[300px] lg:w-[440px] ${errors.isClient ? 'border-red-500 border-4' : ''}`}
                {...register('isClient')}
                defaultValue={'Novo cliente'}
              >
                <option value='Cliente da casa'>Segurado</option>
                <option value='Novo cliente'>Novo Cliente</option>
              </select>
            </div>
            <div className='flex flex-col gap-3 items-start'>
              <Label className='text-white text-right'>Pessoa Jurídica/Física</Label>
              <select
                className={`text-slate-500 p-2 ring-offset-background bg-background rounded w-[200px] md:w-[300px] lg:w-[440px] ${errors.peopleType ? 'border-red-500 border-4' : ''}`}
                {...register('peopleType')}
                defaultValue={'Pessoa Fisica'}
              >
                <option value='Pessoa Fisica'>Pessoa Física</option>
                <option value='Pessoa Juridica'>Pessoa Jurídica</option>
              </select>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-3 items-start mb-6'>
          <Label className='text-white'>Demanda</Label>
          <Textarea
            className={`text-black resize-none h-[150px] max-[465px]:w-[340px] w-[418px] md:w-[628px] lg:w-[908px] ${errors.demand ? 'border-red-500 border-4' : ''}`}
            placeholder='Escreva o serviço que você deseja, detalhe o quanto puder.'
            {...register('demand')}
          />
        </div>

        <Button className='bg-Yellow w-[241px] ml-auto rounded-full mb-5 max-[598px]:mb-5' type='submit'>
          ENVIAR
        </Button>
      </form>
      <div id="sonner-toaster">
        <Toaster />
      </div>
    </div>
  );
};

export default Forms;
