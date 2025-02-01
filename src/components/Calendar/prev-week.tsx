import { ChevronLeft } from "lucide-react";
import { HoverCard, HoverCardTrigger } from "../ui/hover-card";
import { useCalendar } from "@/hooks/use-calendarProvider";
import { HoverShowPrevOrNextWeek } from "./hover-show-prev-or-next-week";

export function PrevWeek() {
    const {previousWeek} = useCalendar()
    return (
        <HoverCard openDelay={300} closeDelay={0}>
            <HoverCardTrigger>
                <ChevronLeft size={20} onClick={previousWeek} className="cursor-pointer" />
            </HoverCardTrigger>

            <HoverShowPrevOrNextWeek text="Ir para semana Anterior"/>
        </HoverCard>
    )
}