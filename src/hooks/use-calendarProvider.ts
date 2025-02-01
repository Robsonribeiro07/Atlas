import { CalendarContext } from "@/context/date-context";
import { useContext } from "react";

export function useCalendar() {

    const context = useContext(CalendarContext)

    if(!context) {
        throw new Error("useCalendar must be used within a CalendarProvider")
        
    }
    return context;
}