import { RemoveTask } from "@/api/remove-task";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { UseGetQueryKey } from "./use-get-queryKey";
import queryClient from "@/lib/query-client";
import { GetListResponse } from "@/api/get-list";
import { toast } from "sonner";
   
export function useRemoveTask() {

    const {user} = useUser()
   
    const {queryKey} = UseGetQueryKey()

    const {mutate} = useMutation({
        mutationFn: RemoveTask,
        onMutate: (variables) => {
            const {taskId} = variables


            const Alltask = queryClient.getQueryData(queryKey)

            if(Alltask) {
                queryClient.setQueryData(queryKey, (data: GetListResponse) => {

                    const { task} = data
                    const UpdateTaskNotWithinTask = task.filter(task => task._id !== taskId)

                    return {
                        ...data,
                        task: UpdateTaskNotWithinTask
                    }
                    
                })

                toast.success('Tarefa removida com sucesss')
            }

            return { Alltask}
        },
        onError(_, __, context) {
            if(context?.Alltask) {
                toast.error('Falha ao remover tarefa!')
                queryClient.setQueryData(queryKey, context.Alltask)
            }

            
        },

    })


    const handleRemoveTask = ({taskId}: {taskId: string}) => {
        if(!user) return
        mutate({UserId: user.id,taskId},)

    }
    
    return { handleRemoveTask}
}