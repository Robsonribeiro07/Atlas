
import { useFinishedHabit } from "@/hooks/use-finished-habit";
import { useUsers } from '@/hooks/use-User';
import { Button } from "../ui/button";

interface cardHabit {
    checked: boolean
    HabitId: string
    IsDate: Date
}
export function CardHabit({checked, HabitId, IsDate}: cardHabit) {

    const Checked = checked ? "bg-green-500 " : "bg-[#0c0c0c] hover:bg-[gray]"



    const {userId} = useUsers()

    const {mutate} = useFinishedHabit()

    const handleFinsishedHabit = () => {
        if(!userId) return
        mutate({HabitId: HabitId, FinishedDays: IsDate,UserId: userId, _id: new Date().getMilliseconds().toString()})
        
        console.log(HabitId)

        console.log(IsDate)
    }
    return (
        <Button className={`rounded-[6px] bg-[#0c0c0d] border ${Checked} `} size={'card'} onClick={handleFinsishedHabit}/>
    )
}