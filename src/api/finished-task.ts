import api from "@/lib/api";


interface FisinshedTask {
    UserId: string,
    taskId: string,
}

export async function FisinshedTask({UserId, taskId}: FisinshedTask) {
    const response = await api.patch('/api/finished-task', {
        UserId, taskId
    })

    return response.data 
}