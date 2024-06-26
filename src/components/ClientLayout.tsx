"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Forms from "@/components/form";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLoginOrAdminRoute = pathname === '/login' || pathname === '/admin';

  return (
    <>
      {!isLoginOrAdminRoute && <Header />}
      {children}
      {!isLoginOrAdminRoute && <Forms />}
      {!isLoginOrAdminRoute && <Footer />}
      {!isLoginOrAdminRoute && (
        <Link
          href="https://wa.me/+5581986884201?text=Ol%C3%A1%2C+venha+nos+conhecer%2C+n%C3%A3o+hesite+em+mandar+mensagem%21%21"
          target="_blank"
          className="fixed bottom-5 right-7 z-[51]"
        >
          <Image
            src="/icons/icon_wpp.svg"
            alt="icon do Whatsaap"
            width={50}
            height={50}
          />
        </Link>
      )}
    </>
  );
}
