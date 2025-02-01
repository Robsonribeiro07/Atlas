import { HoverCardContent } from "@radix-ui/react-hover-card"

interface ShowPrevOrNextWeekProps {
    text: string
}
export function HoverShowPrevOrNextWeek({text}: ShowPrevOrNextWeekProps) {
    return (
        <HoverCardContent className="text-[0.750rem] w-fit p-1 bg-[#161616]">
          {text}
        </HoverCardContent>
    )
}