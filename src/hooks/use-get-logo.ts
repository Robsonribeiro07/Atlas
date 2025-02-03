"use client"
import { useTheme } from "next-themes";

import LogoWhite from '../../public/logo.svg'
import LogoDark from '../../public/logo.dark.svg'
import { useMemo } from "react";
export function useGetLogoSvg() {
   

    const {theme} = useTheme()

    

    const LogoSvg: string = useMemo(() => {
      return theme === 'dark' ? LogoWhite : LogoDark 
    },[theme])

    

    return { LogoSvg }
}