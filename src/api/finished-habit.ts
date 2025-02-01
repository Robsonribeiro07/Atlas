import api from "@/lib/api";


interface FinishedHabit {
    UserId: string,
    HabitId: string,
    FinishedDays: Date
    _id: string,

}


export async function FinishedHabit({UserId, HabitId, FinishedDays, _id}: FinishedHabit) {

    const response = await api.patch('/apiHabit/finished-habit', {
        UserId, HabitId, FinishedDays, _id
})

    return response.data 
}