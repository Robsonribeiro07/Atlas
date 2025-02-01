import {Album, Heart} from 'lucide-react'
import { useMemo } from 'react'

const icons = [Album, Heart]


export function RandomIcons() {
    const RandomICons = useMemo(() => {
       return icons[Math.floor(Math.random() * icons.length)]
    },[]) 


    return <RandomICons/>
}