import { IsCurrentDay } from "./isCurrent-day"

interface IsDate {
    dayName: string,
    IsDate: Date
    dayNumber: number
}
export function DateCalendar({dayName, dayNumber, IsDate}: IsDate) {

    const FormatIsDate = (IsDate: string) => {
        return IsDate.charAt(0).toUpperCase() + IsDate.slice(1).replace('.', '')
    }
    return (
        <div className="flex flex-col items-center text-[0.9rem] font-medium text-TextColorPrimary font-poppins relative">
            <IsCurrentDay IsDate={IsDate}/>
            <p>{FormatIsDate(dayName)}</p>
            <p>{dayNumber}</p>
        </div>
    )
}