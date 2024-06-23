import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Forms from "@/components/form";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Arkan Seguros",
  description: "Proteção e segurança com seguros personalizados para você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        <Forms />
        <Footer />
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
      </body>
    </html>
  );
}
