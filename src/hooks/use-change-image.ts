"use client"
import { useMutation } from "@tanstack/react-query";
import { useUsers } from "./use-User";
import { UpdateImage } from "@/api/update-image";
import queryClient from "@/lib/query-client";
import { GetListResponse } from "@/api/get-list";
import { toast } from "sonner";

export function useSwitchChangeImage() {

    const {userId } =  useUsers()

    const {mutate} = useMutation({
        mutationFn: UpdateImage,
        onMutate(variables) {
            const {image} = variables

            const user = queryClient.getQueryData(['users', userId])

            if(user) {
                queryClient.setQueryData(['users', userId], (data: GetListResponse) => {
                    return {
                        ...data,
                        image_profile: image,
                    }
                })
            }
            toast.success('Imagem alterada com sucesso!')

        },
       
        onError() {
            toast.error('Falha ao alterar imagem!')
        }
    })

    return {mutate}
}