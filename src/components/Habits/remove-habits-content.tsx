import { Trash } from "lucide-react";
import { DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { useRemoveHabit } from "@/hooks/use-remove-habit";
import { useHabitsStore } from "@/store/habit-store";

interface HabitProps {
    habitId: string
}
export function RemoveHabitsContent({habitId}: HabitProps ) {

    const {handleRemoveHabit} = useRemoveHabit()

    

    return (
        <DropdownMenuContent side="right">
            <DropdownMenuItem onClick={() => {handleRemoveHabit({habitId})}}>
                <Trash/>
                Remover Habit
            </DropdownMenuItem>
        </DropdownMenuContent>
    )
}