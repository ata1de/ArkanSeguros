"use client"

import React from 'react';
import { Textarea } from './ui/textarea';
import { Input } from './ui/input';
import { Toaster } from './ui/sonner';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Label } from './ui/label';

const clientSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email format" }).min(1, { message: "Email is required" }),
  phone: z.string()
    .regex(/^\(?\d{2}\)?\s\d{5}-\d{4}$/, { message: "Phone number must be in the format (81) 99242-3427" })
    .min(1, { message: "Phone number is required" }),
  peopleType: z.string().min(1, { message: "Company name is required" }),
  demand: z.string().min(1, { message: "Demand description is required" })
});

type ClientSchema = z.infer<typeof clientSchema>;

const Forms = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ClientSchema>({
    resolver: zodResolver(clientSchema)
  });

  const handleClient = async (data: ClientSchema) => {
    try {
      const emailConfig = {
        userName: data.name,
        userEmail: data.email,
        subject: 'Relatório de novo cliente',
        html: `Olá,\n\nAqui estão as informações dos novos clientes registrados no seu site:\n\n\
                <p>Nome: ${data.name}</p>\n\
               <p>Email: ${data.email}</p>\n\
               <p>Telefone: ${data.phone}</p>\n\
               <p>Tipo de Pessoa: ${data.peopleType}</p>\n\
               <p>Demanda: ${data.demand}</p>\n\
               --------------------------\n`
      };

      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailConfig)
      });

      if (response.ok) {
        toast.success('Formulário enviado com sucesso!', {
          style: { backgroundColor: 'green', color: 'white' },
          duration: 2000 // O toast desaparecerá após alguns segundos
        });
      } else {
        toast.error('Falha ao enviar formulário. Tente novamente.', {
          style: { backgroundColor: 'red', color: 'white' },
          duration: 2000
        });
      }
    } catch (error) {
      console.log(error);
      toast.error('Erro ao enviar o e-mail. Tente novamente.', {
        style: { backgroundColor: 'red', color: 'white' },
        duration: 2000
      });
    }
    
    reset();
  };

  return (
    <div className='bg-LightBlue min-h-[700px] flex flex-col justify-center items-center pt-[65px]'>
      <p className='font-bold text-[72px] text-white mb-5 max-[598px]:text-center'>
        Fale com a <span className='border-b-4 border-Yellow'>Arkan</span>
      </p>

      <form onSubmit={handleSubmit(handleClient)} className='flex flex-col justify-center items-center gap-2 w-[210px] md:w-[310px] lg:w-[908px]'>
        <div className='flex max-[465px]:flex-col items-center justify-center gap-6 mb-8'>
          <div className='flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-col gap-3 items-start'>
              <Label className='text-white text-right'>Nome</Label>
              <Input
                className={`text-black w-[200px] md:w-[300px] lg:w-[440px] ${errors.name ? 'border-red-500' : ''}`}
                placeholder='Digite seu nome'
                {...register('name')}
              />
            </div>
            <div className='flex flex-col gap-3 items-start'>
              <Label className='text-white text-right'>Email</Label>
              <Input
                className={`text-black w-[200px] md:w-[300px] lg:w-[440px] ${errors.email ? 'border-red-500' : ''}`}
                placeholder='Digite seu email'
                {...register('email')}
              />
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-8'>
            <div className='flex flex-col gap-3 items-start'>
              <Label className='text-white text-right'>Telefone</Label>
              <Input
                className={`text-black w-[200px] md:w-[300px] lg:w-[440px] ${errors.phone ? 'border-red-500' : ''}`}
                placeholder='(00) 00000-0000'
                {...register('phone')}
              />
            </div>

            <div className='flex flex-col gap-3 items-start'>
              <Label className='text-white text-right'>Pessoa Jurídica/Física</Label>
              <select
                className={`text-slate-500 p-2 ring-offset-background bg-background rounded w-[200px] md:w-[300px] lg:w-[440px] ${errors.phone ? 'border-red-500' : ''}`}
                {...register('peopleType')}
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
            className={`text-black resize-none h-[150px] w-[350px] md:w-[628px] lg:w-[908px] ${errors.demand ? 'border-red-500' : ''}`}
            placeholder='Escreva o serviço que você deseja, detalhe o quanto puder.'
            {...register('demand')}
          />
        </div>

        <Button className='bg-Yellow w-[241px] ml-auto rounded-full max-[598px]:mb-5' type='submit'>
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
