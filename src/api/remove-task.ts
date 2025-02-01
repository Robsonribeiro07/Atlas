import api from "@/lib/api";


interface RemoveTask {
    UserId: string,
    taskId: string,
}

export async function RemoveTask({UserId, taskId}: RemoveTask) {
    const response = await api.delete('/api/remove-task', {
        data: {UserId, taskId}
    })

    return response.data 
}