import { useUser } from "@clerk/nextjs";
import { useMemo } from "react";

export function UseGetQueryKey() {

    const  {user} = useUser()


    const queryKey = useMemo(() => {
        return user?.id ? ['users', user.id] : ['users'];
    }, [user?.id]);  

    
    return {queryKey}
}