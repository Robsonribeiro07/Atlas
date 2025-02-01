import { FisinshedTask } from "@/api/finished-task";
import { useMutation } from "@tanstack/react-query";
import { UseGetQueryKey } from "./use-get-queryKey";
import queryClient from "@/lib/query-client";
import { GetListResponse } from "@/api/get-list";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";

export function useFinishedTask() {
    
    const {queryKey} = UseGetQueryKey()

    const {user} = useUser()

    const {mutate} = useMutation({
        mutationFn: FisinshedTask,
        onMutate(variables) {
             
            const {taskId} = variables


            const allTask = queryClient.getQueryData(queryKey)

            if(allTask) {
                queryClient.setQueryData(queryKey, (data: GetListResponse) => {
                     const {task} = data
                     const update = task.map((task) => {
                        if(task._id === taskId) {
                            if(task.status === "pendente") {
                                toast.success('Tarefa marcada compo concluida')
                                return {...task, status: "concluido"}
                            } else {
                                toast.success('Tarefa marcada compo pendente')

                                return {...task, status: "pendente"}
                            }
                        }
                        console.log(task)
                        return task
                    })
                    return {
                        ...data,
                        task: update
                    }
                }) 
            }

            return {allTask}
        },
        onError(_, __, context) {
            if(context?.allTask) {
                toast.error('Falha ao marcar tarefa como concluida!')
                queryClient.setQueryData(queryKey, context.allTask)
            }
            
        },
    })


    const handleFinishedTask = ({taskId}: {taskId: string}) => {
        if(!user) return
        mutate({UserId: user.id,taskId:taskId })
    }

    return { handleFinishedTask}
}