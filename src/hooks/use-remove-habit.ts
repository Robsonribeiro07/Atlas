import { RemoveHabit } from "@/api/remove-habit";
import { useHabitsStore } from "@/store/habit-store";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";

export function useRemoveHabit() {

    const RemoveHabits = useHabitsStore((state) => state.removeHabits)

    const {user} = useUser()
    
    const {mutate} = useMutation({
        mutationFn: RemoveHabit,
        onMutate: (Variable) => {
            const {habitId} = Variable

            console.log('habitId aqui' + habitId)

            if(!habitId) return


            RemoveHabits({HabitId: habitId})


        }

    })

    const handleRemoveHabit = ({habitId}: {habitId: string}) => {

        if(!user) return
        mutate({habitId: habitId, UserId: user.id })

    }

    return { handleRemoveHabit }
}