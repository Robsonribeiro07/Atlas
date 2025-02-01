import api from "@/lib/api";


interface NewHabit {
    UserId: string,
    Title: string
    id: string
    habitId: string
}

export async function NewHabit({UserId,Title, habitId,id}: NewHabit) {
    const response = await api.post('/apiHabit/new-habit', {
        UserId, Title, habitId, id
    })

    return response.data 
}