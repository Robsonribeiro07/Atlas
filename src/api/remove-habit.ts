import api from "@/lib/api";


interface RemoveHabit {
    UserId: string,
    habitId: string
}

export async function RemoveHabit({UserId,habitId}: RemoveHabit) {
    const response = await api.delete('/apiHabit/delete-habit', {
        data: {UserId, habitId}
    })

    return response.data 
}