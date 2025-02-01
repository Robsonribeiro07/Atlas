import api from "@/lib/api";


interface EditTask {
    UserId: string,
    TaskId: string,
    UpdateName: string
    UpdatePrioridade: "Alta" | "Media"  | "Baixa"

    
}

export async function EditTask({UserId, TaskId, UpdateName,UpdatePrioridade}: EditTask) {
    const response = await api.patch('/api/edit-task', {
        UserId, TaskId, UpdateName,UpdatePrioridade
    })

    return response.data 
}