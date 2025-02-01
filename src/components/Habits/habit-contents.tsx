import { useGetHabits } from "@/hooks/use-get-habits";
import { useCalendar } from "@/hooks/use-calendarProvider";
import { useMemo } from "react";
import { RandomIcons } from "../random-icons";
import { CardHabit } from "./card-habit";

export function HabitContents() {
    const { weekDays } = useCalendar();
    const { habits } = useGetHabits();

    const habitElements = useMemo(() => {
        return habits?.map((habitItem) => {
            const { FinishedDays, Title, _id } = habitItem;

            return (
                <div key={_id} className=" flex items-center justify-between gap-5  ">
                    <div className="min-w-[70%] lg:min-w-0">
                        
                        <p className="flex gap-3"> 
                           <RandomIcons />
                            {Title}</p>
                    </div>

                    <div className="flex gap-[1.20rem] self-end">
                        {weekDays.map((date) => {
                            const { IsDate } = date;

                            const formattedDate = IsDate.toISOString().split('T')[0];

                            const exitingDate = FinishedDays.find((day) => {
                                const finishedDate = new Date(day.data).toISOString().split('T')[0]; 
                                return finishedDate === formattedDate;
                            });

                            return (
                                <CardHabit
                                    key={IsDate.toString()}
                                    checked={exitingDate ? exitingDate.checked : false} 
                                    IsDate={IsDate}
                                    HabitId={_id}
                                />
                            );
                        })}
                    </div>
                </div>
            );
        });
    }, [habits, weekDays]);

    return <>{habitElements}</>;
}
