"use client"
import { useTheme } from "next-themes";

import LogoWhite from '../../public/logo.svg'
import LogoDark from '../../public/logo.dark.svg'
export function useGetLogoSvg() {
   

    const {theme} = useTheme()


    const LogoSvg: string = theme ? theme === 'dark' ? LogoWhite : LogoDark : LogoDark

    

    return { LogoSvg }
}