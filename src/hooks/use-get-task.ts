import { GetList } from "@/api/get-list";
import { useQuery } from "@tanstack/react-query";
import { useUsers } from "./use-User";

export function useGetTask() {

    const {userId} = useUsers()

    const {data: User, error, isLoading} = useQuery({
        queryKey: ['task'],
        queryFn: () => GetList({userId: userId!}),
        enabled: !!userId,
        refetchOnWindowFocus: false
        
    })

    if(isLoading) return {isLoading}

    if(error) return {error}

    return {User, isLoading: false}




}