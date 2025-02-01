"use client"
import { HeaderWelcome } from "@/components/header-welcome";
import ParticlesCanvas from "@/components/particles-background";
import { Button } from "@/components/ui/button";
import { ChevronRight, Instagram } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import previewDark from '../../../public/preview-dark.webp'
import Image from "next/image";
import Link from "next/link";
import { useAuth   } from "@clerk/nextjs";
import { Footer } from "@/components/footer";
export default function Home() {

  const [localStorageTheme, setThemeLocalStorage] = useState('')
  const {theme} = useTheme()
  const {isSignedIn} = useAuth()

  useEffect(() => {
     
    if(typeof window!== 'undefined'){
      const getThemeLocalStorage = localStorage.getItem('theme');
      if(getThemeLocalStorage){
      setThemeLocalStorage(getThemeLocalStorage);

      }
    }
  },[]) 

  const selectedTheme = localStorageTheme ? localStorageTheme : theme

  console.log(selectedTheme)
  const hrefButton = isSignedIn ? '/dashboard' : '/auth/sign-in'

  return (
     <div className="w-[72vw] min-h-screen mx-auto select-none ">
       <ParticlesCanvas theme={selectedTheme ?? 'dark'}/>

       <HeaderWelcome/>


       <div className="dark:text-TextColorPrimary text-[#151615] flex justify-start items-center h-full mt-[8rem] text-4xl tracking-wider font-bold flex-col ">
        <p>Domine Seus Hábitos, <br/>
        Transforme Sua Vida</p>

        <p className="text-center text-[1.1rem] leading-tight font-[500] mt-3 dark:text-TextColorPrimary text-[#212322]">
        Habituate ajuda você construir, gerenciar, e manter hábitos positivos. <br/> Comece sua jornada para um você melhor hoje.
        </p>

        <div className="tracking-wide  flex gap-3 items-center mt-3 "> 
          <Button asChild>
            <Link href={hrefButton}>
            Começar <ChevronRight/>
            </Link>
          </Button>
            <Button className="bg-[#eeefee] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#eeefee]" asChild>
            <Link href='https://www.instagram.com/robson_ribeiro.07/'>
            Instragram <Instagram/>
            </Link>
          </Button>
        </div>

        <Image src={previewDark} alt="preview dark" height={1000} width={1000} className="mt-4" />
       </div>

        <Footer/>
     </div>
  );
}
