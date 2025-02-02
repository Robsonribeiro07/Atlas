import { NewTask } from "@/api/new-task";
import { useMutation } from "@tanstack/react-query";
import { useUsers } from "./use-User";
import queryClient from "@/lib/query-client";
import { GetListResponse } from "@/api/get-list";
import { toast } from "sonner";

export function useAddNewList() {
  const { userId } = useUsers();

  const { mutate } = useMutation({
    mutationFn: NewTask,
    onMutate(variables) {
      const { tarefa, prioridade , } = variables;


      const Alltask = queryClient.getQueryData(['users', userId]);

      if (Alltask) {
        queryClient.setQueryData(['users', userId], (data: GetListResponse) => {
          const newTask = { tarefa, prioridade, status: 'pendente'};

          console.log(newTask)
          return {
            ...data,
            task: [...data.task, newTask, ],
          };
        });
      }

      console.log(Alltask)

      return { Alltask };
    },
    onError(_, __, context) {
      toast.error('Falha ao adicionar tarefa');
      if (context?.Alltask) {
        queryClient.setQueryData(['users', userId], context.Alltask);
      }
    },
    onSuccess() {
      toast.success('Tarefa adicionada com sucesso!');
    },
  });

  return { mutate };
}
