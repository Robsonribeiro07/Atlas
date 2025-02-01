import { GetListResponse } from "@/api/get-list"
import queryClient from "@/lib/query-client"
import { useUser } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { UseGetQueryKey } from "./use-get-queryKey"
import { useShowButtonEditOrRemove } from "@/store/state-show-edit-or-remove-task"
import { EditTask } from "@/api/edit-task"

const SchemaNewTask = z.object({
    tarefa: z.string().min(2, "No minimo 2 caracteres"),
    prioridade: z.enum(["Baixa", "Media", "Alta"]),
})
interface editingContent {
    tarefa: string,
    prioridade: "Alta" | "Media" | "Baixa"
    _id: string;
  }
type schemaNewTask = z.infer<typeof SchemaNewTask>
export function useEditTask() {

    const {user} = useUser()

    const {editingContent, setEditingContentTask    , Clear} = useShowButtonEditOrRemove()
    
    
    const handleUpdateEditingContentState = ({prioridade, _id,tarefa}: editingContent) => {
        setEditingContentTask({
            prioridade,
            _id,
            tarefa,
        })

    }

    const {queryKey} = UseGetQueryKey()

    const { register, handleSubmit, reset, control } = useForm<schemaNewTask>({
        resolver: zodResolver(SchemaNewTask),
        values: {
            prioridade: "Media",
            tarefa: editingContent.tarefa,
        }
        
    })
    
    const {mutate} = useMutation({
        mutationFn: EditTask,
        onMutate: (Variable) => {
            reset()
            const {TaskId,UpdateName,UpdatePrioridade} = Variable
            

            const Alltask = queryClient.getQueryData(queryKey)

            if(Alltask) {
                queryClient.setQueryData(queryKey, (data: GetListResponse) => {
                      
                    const EditingTask = data.task.map(task => {
                        if(task._id === TaskId) {
                            return {
                                _id: task._id,
                                prioridade: UpdatePrioridade,
                                tarefa: UpdateName,
                            }
                        }
                        return task
                    })
                 
                    Clear()

                    return {
                        ...data,
                        task: EditingTask,
                    }
                })
            }
            
            return {Alltask}

        },
        onError(_, __, context) {
            if(context?.Alltask) {
                toast.error('Falha ao Editar tarefa!')
                queryClient.setQueryData(['users'], context.Alltask)
            }
            
        },onSuccess(_, variables,) {
            const {TaskId,UpdateName,UpdatePrioridade} = variables
            toast.success('Tarefa editada com sucesso!')
            handleUpdateEditingContentState({_id: TaskId, prioridade: UpdatePrioridade, tarefa: UpdateName})
            
        },
    })
    
    const handleSubmitForm =  (data: schemaNewTask) => {
        if(!user?.id) return 
    
        const {prioridade,tarefa } = data

        console.log(prioridade)

        mutate({TaskId: editingContent._id, UpdateName: tarefa, UpdatePrioridade: prioridade,UserId: user.id})

        
        
    }

   
    
    return {
        register,
        handleSubmit: handleSubmit(handleSubmitForm),
        control,
    }
}