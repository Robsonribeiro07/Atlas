import api from "@/lib/api";


interface RemoveAllTask {
    UserId: string,
}

export async function RemoveAllTask({UserId}: RemoveAllTask) {
    const response = await api.delete('/api/removeAll-task', {
        data: {UserId}
    })

    return response.data 
}