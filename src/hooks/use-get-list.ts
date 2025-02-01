import { useQuery } from '@tanstack/react-query'
import { useUsers } from "./use-User";
import { GetList } from '@/api/get-list';
import { useCallback } from "react";
import { UseGetQueryKey } from './use-get-queryKey';

export function useGetList() {
    
    const { userId } = useUsers();

    const {queryKey} = UseGetQueryKey()

    const fetchList = useCallback(() => GetList({ userId: userId! }), [userId]);



    const query = useQuery({
        queryKey,
        queryFn: fetchList, 
        enabled: Boolean(userId), 
        refetchOnWindowFocus: false, 
        staleTime: Infinity
    });

    return {
        List: query.data,
        isFetching: query.isFetching,
        error: query.error
    }
}
