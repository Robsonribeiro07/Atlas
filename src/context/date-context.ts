"use client"
import { SetStateAction } from "react"

import { createContext } from 'react'
type CalendarContexType = {
    currentDate: Date,
    setCurrentDate: React.Dispatch<SetStateAction<Date>>
    weekDays: { dayName: string; dayNumber: number; IsDate: Date }[];
    currentMonth: string, 
    currentYear: number,
    nextWeek: () => void,
    isLimitReached: boolean,
    previousWeek: () => void,
}

export const CalendarContext = createContext<CalendarContexType>({} as CalendarContexType)