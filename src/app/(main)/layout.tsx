import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Forms from "@/components/form";
import Image from "next/image";
import Link from "next/link";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header/>
            {children}
            <Forms/>
            <Footer/>
            
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
        </div>
    )
}
