        import { NewHabit } from "@/api/new-habit";
        import { useHabitsStore } from "@/store/habit-store";
        import { useUser } from "@clerk/nextjs";
        import { useMutation } from "@tanstack/react-query";
        import { toast } from "sonner";

        export function useNewHabit() {

            const {user} = useUser()

            const newHabit = useHabitsStore((state) => state.addNewHabit)
            const restoreBackup = useHabitsStore((state) => state.restoreBackOnFailed)

            const uniqueId = `${Date.now()}-${Math.floor(Math.random() * 100000)}`;
            const {mutate, isSuccess, isPending} = useMutation({
                mutationFn: NewHabit,
                onMutate(variables) {
                    const {Title, habitId} = variables


                    newHabit({
                        Title,
                       _id: habitId
                    })
                },
                onError: () => {
                    restoreBackup()
                    toast.dismiss()
                    toast.error('Falha ao adicionar Habito!');
                },
                onSuccess: () => {
                    toast.dismiss()
                    toast.success('Habito adicionado com sucesso!')
                }
            })

            if(!user) return { error: "User not authenticated" }
            const handleAddHabit = ({Title}: {Title: string}) => {
                mutate({Title, UserId: user.id, id: new Date().getMilliseconds().toString(), habitId: uniqueId  })

                return { isSuccess}

            }

            return { handleAddHabit, isPending}



        }