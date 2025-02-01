import api from "@/lib/api";


interface NewTask {
    id: string,
    prioridade: string,
    tarefa: string
}

interface Response {
    message: "Sucess" | "failed"
}
export async function NewTask({id, prioridade,tarefa}: NewTask) {
    const response = await api.post('/api/new-task', {
        id, prioridade, tarefa
    })

    return response.data as Response
}