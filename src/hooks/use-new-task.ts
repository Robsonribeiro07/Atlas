import { GetListResponse } from "@/api/get-list"
import { NewTask } from "@/api/new-task"
import queryClient from "@/lib/query-client"
import { useUser } from "@clerk/nextjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { UseGetQueryKey } from "./use-get-queryKey"
import { useStateNewTaskDialog } from "@/store/state-dialog-new-task"

const SchemaHabit = z.object({
    tarefa: z.string().min(2, "No minimo 2 caracteres"),
    prioridade: z.enum(["Baixa", "Media", "Alta"]),
})

type schemaHabit = z.infer<typeof SchemaHabit>
export function useNewTask() {

    const {user} = useUser()

    const CloseDialog = useStateNewTaskDialog((state) => state.Close)
    


    const {queryKey} = UseGetQueryKey()

    const { register, handleSubmit, reset, control } = useForm<schemaHabit>({
        resolver: zodResolver(SchemaHabit),
        defaultValues: {
            prioridade: 'Media',
            tarefa: '',
        }
        
    })
    
    const {mutate} = useMutation({
        mutationFn: NewTask,
        onMutate: (Variable) => {
            reset()
            const {id,prioridade,tarefa} = Variable


            const Alltask = queryClient.getQueryData(queryKey)

            if(Alltask) {
                queryClient.setQueryData(queryKey, (data: GetListResponse) => {

                    return {
                        ...data,
                        task: [...data.task, {_id: id, prioridade: prioridade, tarefa: tarefa}]
                    }
                })
            }

            CloseDialog()
            return {Alltask}

        },
        onError(_, __, context) {
            if(context?.Alltask) {
                toast.error('Falha ao adicionar tarefa!')
                queryClient.setQueryData(['users'], context.Alltask)
            }
            
        },
    })
    
    const handleSubmitForm =  (data: schemaHabit) => {
        if(!user?.id) return 
    
        const {prioridade, tarefa} = data

        console.log(prioridade)

        mutate({id: user!.id!, prioridade: prioridade, tarefa: tarefa })

        
        
    }

   
    
    return {
        register,
        handleSubmit: handleSubmit(handleSubmitForm),
        control,
    }
}