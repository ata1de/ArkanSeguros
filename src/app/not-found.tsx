'use client'

import Link from "next/link";
import { Button } from "../components/ui/button";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-MediumBlue">
            <div className="flex justify-center items-center w-[900px] max-w-[1093px] h-[550px] shadow-md rounded-3xl border-2 border-LightBlue bg-[#214670] text-gray-200 px-5 max-[690px]:flex-col-reverse max-[690px]:gap-6 mx-3">
                <div className="flex flex-col items-start gap-2 max-w-[500px]">
                    <p className="text-3xl font-bold text-Yellow">404 ERROR</p>
                    <p className="text-lg font-bold text-Yellow">Parece que a página que você procura não foi encontrada!</p>
                    <p className="text-md ">Que tal aproveitar nossas dicas de segurança enquanto explora outras páginas do nosso site de seguros?</p>

                    <Link href='/'>
                        <Button className='mt-5 bg-MediumBlue w-[240px] rounded-full text-gray-200'>Voltar a Home</Button>
                    </Link>
                </div>

                <Image src="/notFound/alert.svg" alt="404" width={400} height={400} />
            </div>
        </div>
    )
}