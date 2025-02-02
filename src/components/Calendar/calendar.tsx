import { CalendarDaysIcon } from "lucide-react";
import { DateCalendar } from "./date";
import { NextWeek } from "./next-week";
import { PrevWeek } from "./prev-week";
import { Separator } from "../separator";
import { useCalendar } from "@/hooks/use-calendarProvider";
import { HabitContents,  } from "@/components/Habits/habit-contents";
import { useGetList } from "@/hooks/use-get-list";
import { HabitContentsSkeleton } from "@/components/Habits/habits-skeleton";

export function Calendar() {
 
    const {currentMonth,currentYear,weekDays} = useCalendar()

        const {List, isFetching} = useGetList()
        const ConverToDate = (date: string) => {
            return date.charAt(0).toUpperCase() + date.slice(1).replace('.', '')

    }
    return (
        <div className="w-full h-[35vh]  lg:h-[30vh] border shadow-xl mb-5 rounded-2xl mt-7 px-5 flex flex-col  gap-3 justify-start  py-4  overflow-auto md:overflow-visible">

            <div className="flex justify-between   w-full">
                <div className="flex gap-2  items-center">
                    <CalendarDaysIcon size={20}/>

                    <p className=" text-TextColorPrimary text-[1rem] font-[500] tracking-wide whitespace-nowrap ">
                        {ConverToDate(currentMonth)}
                       {' '}  de {currentYear}
                    </p>

                    <div className="flex items-center gap-3">
                     <PrevWeek/>
                     <NextWeek/>
                    </div>

                </div>



            <div className="flex gap-5 mt-2">
                {weekDays.map((day, index) => {
                    const {dayName, dayNumber, IsDate} = day
                    return (
                        <DateCalendar key={index} dayName={dayName} dayNumber={dayNumber} IsDate={IsDate}  />
                    )
                })}

            </div>

            </div>
             <Separator/>

 
            <div className=" lg:overflow-auto  flex gap-2 flex-col">
             {!List || isFetching ? (
                <HabitContentsSkeleton/>
             ): (
                <HabitContents/>
             ) }
            </div>

            
        </div>
    )
}