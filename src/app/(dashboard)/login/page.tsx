"use client";

import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { setStorage } from "@/lib/storage";
import { login } from "@/process/auth";
import { LoginResponseType, loginSchema, LoginSchemaType } from "@/types/auth";
import { errorHandler } from "@/utils/errors";
import { successAlert } from "@/utils/successAlert";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginPage = () => {
  const router = useRouter();
  const { register, formState: { errors }, handleSubmit } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSuccessLoginHandler = (data: LoginResponseType) => {
    successAlert('Usuário logado! Seja bem vindo')

    setStorage('token', data.token)
    setStorage('user', JSON.stringify(data.user))

    router.push("/admin");
  }

  const { mutate: loginMutate } = useMutation<LoginResponseType, Error, LoginSchemaType>({
		mutationKey: ['login'],
		mutationFn: login,
		onSuccess: onSuccessLoginHandler,
		onError: errorHandler
	});

  const onSubmit = useCallback<SubmitHandler<LoginSchemaType>>(
		(body) => {
			return loginMutate(body);
		},
		[loginMutate]
	);

  const styleLogin = {
    backgroundColor: "#102843",
    backgroundImage: `url('/bg_login.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "10px 10px 10px 10px",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-WhiteDefault">
      <div className="flex justify-center items-center w-[1000px] max-w-[1093px] h-[500px] shadow-md rounded-lg bg-white">
        <div style={styleLogin} className="h-full w-1/3 flex flex-col items-center gap-9 p-7">
          <div className="flex flex-col items-center gap-2 pt-3">
            <Image src="/arkan_logo_dark.svg" alt="logo" width={100} height={100} />
            <small className="text-GrayBlue font-bold text-lg">Arkan Seguros</small>
          </div>

          <div className="flex flex-col items-start gap-2">
            <p className="text-[24px] max-w-[200px] text-WhiteDefault font-black">Bem vindo ao <span className="text-Yellow">Arkan Analytics</span></p>
            <p className="text-base font-normal text-GrayBlue">Acesse sua conta agora mesmo</p>
          </div>
        </div>
        <div className="w-2/3 h-full flex flex-col items-center gap-5 px-12 py-7 rounded-lg">
          <div className="flex flex-col items-center pb-5">
            <p className="text-[32px] font-bold text-black pt-3">Entre na sua conta</p>
            <p className="text-[20px] text-gray-400">Preencha seus dados</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input className="w-full p-2 border border-gray-300 rounded " type="email" id="email" {...register("email")} />
              {errors.email && <span className="text-red-400">{errors.email.message}</span>}
            </div>
            <div className="w-full">
              <label htmlFor="password">Senha</label>
              <input className="w-full p-2 border border-gray-300 rounded" type="password" id="password" {...register("password")} />
              {errors.password && <span className="text-red-400">{errors.password.message}</span>}
            </div>
            <div className="inline-flex m-auto">
                <Button className="w-[253px] rounded-full text-[20px] font-bold" type="submit">Entrar</Button>
            </div>
          </form>
        </div>
      </div>
      <div id="sonner-toaster">
        <Toaster />
      </div>
    </div>
  );
};

export default LoginPage;
