import { RandomIcons } from "../random-icons";
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { RemoveHabitsContent } from "./remove-habits-content";

interface TitleHabtsContent {
    title: string
    HabitId: string
}
export function TitleHabit({title, HabitId}: TitleHabtsContent) {
    return (
        <p className="flex gap-3"> 
         <DropdownMenu >
            <DropdownMenuTrigger>
                <div className="flex items-center gap-2">
                 <RandomIcons/>
                 {title}

                    
                </div>
            </DropdownMenuTrigger>
            <RemoveHabitsContent habitId={HabitId}/>
         </DropdownMenu>
                        
        </p>
    )
}