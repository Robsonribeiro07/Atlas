import { FinishedHabit } from "@/api/finished-habit";
import { useMutation } from "@tanstack/react-query";
import { useHabitsStore } from "@/store/habit-store";
import { toast } from "sonner";

export function useFinishedHabit() {
    const updateHabit = useHabitsStore((state) => state.updateHabit); 
    const habits = useHabitsStore((state) => state.habits); 
    const recoveryBackup = useHabitsStore((state) => state.restoreBackupFinishedDats);

    const ConverDate = (date: Date | string) => {
        return new Date(date).toISOString().split('T')[0];
    }

    const { mutate } = useMutation({
        mutationFn: FinishedHabit,
        onMutate: async (variables) => {
            const { HabitId, FinishedDays} = variables;


                 
            const newHabit = {
                id: new Date().getMilliseconds().toString(),
                checked: true,
                data: FinishedDays.toISOString(),
            }

            updateHabit(HabitId, newHabit); // Atualiza o hábito no Zustand
               
        },
      
        onSuccess(_, variables, ) {
            const {HabitId, FinishedDays} = variables
            toast.dismiss()

            habits.forEach((habits) => {
                if(habits._id === HabitId) {
                    const exitingDate = habits.FinishedDays.find(day => ConverDate(day.data) === ConverDate(FinishedDays));


                   if(exitingDate) {
                     if(exitingDate.checked === true) {
                        toast.success('Habito marcado como concluido')
                     } else {
                        toast.success('Habito marcado como pendente')
                     }
                   }
                   
                }
            }) 


             
        
        },
        onError: (error) => {
            toast.dismiss()
            toast.error('Falha ao marcar como concluído');
            console.log(error)
            setTimeout(() => {
                recoveryBackup(); // Restaura o backup dos dados caso o mutationFn falhe
                
            }, 300);
        }
    });

    return { mutate };
}
