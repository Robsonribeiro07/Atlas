import { useGetHabits } from "@/hooks/use-get-habits";
import { useCalendar } from "@/hooks/use-calendarProvider";
import { useMemo } from "react";
import { RandomIcons } from "../random-icons";
import { CardHabit } from "./card-habit";

export function HabitContents() {
    const { weekDays } = useCalendar();
    const { habits, isLoading } = useGetHabits();

    const habitElements = useMemo(() => {
        if (habits.length === 0 && !isLoading) {
            return (
                <div className="flex justify-center items-center h-[200px] gap-5">
                    <p>Nenhum hábito encontrado. Que tal adicionar um novo hábito para começar?</p>
                </div>
            );
        }

        return habits.slice().reverse().map(({ FinishedDays, Title, _id }) => (
            <div key={_id} className="flex items-center justify-between gap-5">
                <div className="min-w-[70%] lg:min-w-0">
                    <p className="flex gap-3"> 
                        <RandomIcons />
                        {Title}
                    </p>
                </div>

                <div className="flex gap-[1.20rem] self-end">
                    {weekDays.map(({ IsDate }) => {
                        const formattedDate = IsDate.toDateString();

                        const existingDate = FinishedDays.find(({ data }) => {
                            return new Date(data).toDateString() === formattedDate;
                        });

                        return (
                            <CardHabit
                                key={IsDate.toString()}
                                checked={existingDate?.checked ?? false} 
                                IsDate={IsDate}
                                HabitId={_id}
                            />
                        );
                    })}
                </div>
            </div>
        ));
    }, [habits, weekDays, isLoading]);

    return <>{habitElements}</>;
}