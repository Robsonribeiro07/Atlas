import api from "@/lib/api";


interface GetList {
    userId: string
}
export interface GetListResponse {
    id: string,
    image_profile: string,
    task: {
        tarefa: string,
        prioridade: "Baixa" | "Media" | "Alta",
        _id: string,
        status: 'pendente' | 'concluido'
    }[],
    createAt: string,
    FinishedAt: string
}
export async function GetList({userId}: GetList) {
    const response = await api.post('/api/get-lists', {
        userId
    })

    return response.data as GetListResponse
}