import api from "@/lib/api";


interface GetHabit {
    userId: string,

}
export type HabitResponse  = {
    Title: string,
    _id: string
    FinishedDays: {
        checked: boolean,
        id: string
        data: string
    }[]

}

export async function GetHabit({userId}: GetHabit) {
    const response = await api.post('/apiHabit/get-habits', {
        userId
    })

    return  {data: response.data as HabitResponse[]}
}