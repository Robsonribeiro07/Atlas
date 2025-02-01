import { ChevronRight } from "lucide-react";
import { HoverCard, HoverCardTrigger } from "../ui/hover-card";
import { useCalendar } from "@/hooks/use-calendarProvider";
import { HoverShowPrevOrNextWeek } from "./hover-show-prev-or-next-week";

export function NextWeek() {
    const {nextWeek, isLimitReached} = useCalendar()

    

  
    const IsLimit = isLimitReached ? "text-gray-500" : ""

    console.log(isLimitReached)
    return (
        <HoverCard openDelay={0}>
            <HoverCardTrigger> 
                <ChevronRight size={20} onClick={nextWeek} className={`cursor-pointer ${IsLimit} `}/>
            </HoverCardTrigger>

            <HoverShowPrevOrNextWeek text="Ir para proxima semana"/>
        </HoverCard>
    )
}