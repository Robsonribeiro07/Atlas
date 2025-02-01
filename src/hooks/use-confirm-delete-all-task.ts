import { RemoveAllTask } from "@/api/removeAll-task";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { UseGetQueryKey } from "./use-get-queryKey";
import queryClient from "@/lib/query-client";
import { GetListResponse } from "@/api/get-list";
import { useTaskConfirmDeleteAll } from "@/store/state-dialog-confirm-delete";

export function useConfirmDeleteAllTask() {

    const {user} = useUser()

    const CloseDialog = useTaskConfirmDeleteAll((state) => state.Close)
   
    const {queryKey} = UseGetQueryKey()
    const {mutate} = useMutation({
        mutationFn: RemoveAllTask,
        onMutate: () => {

            const AllTask = queryClient.getQueryData<GetListResponse>(queryKey)


            if(AllTask) {
                queryClient.setQueryData(queryKey, (data: GetListResponse) => {

                    return {
                        ...data,
                        task: []
                    }

                } )
            }
            CloseDialog()
            toast.success('Todas as tarefas foram removidas')
            

            return { AllTask}
        },
        onError(_, __, context) {
            if(context?.AllTask) {
                toast.error('Falha ao remover tarefas!')
                queryClient.setQueryData(queryKey, context.AllTask)
            }
            
        },

    })

    const handleConfirDeleteAllTask = () => {
        if(!user) {
            toast.info('User not authenticated')
            return
        }
        mutate({UserId: user.id})
    }

    return { handleConfirDeleteAllTask }
 
}