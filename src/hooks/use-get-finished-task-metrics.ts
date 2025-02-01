import { useCallback } from "react"
import { useGetList } from "./use-get-list"

interface ResponseMetrics {
    totalTask: number,
    totalFinished: number
}

export function useGetFinishedTaskMetrics() {
    const { List } = useGetList()

   const result = useCallback(() => {
    const response = List?.task.reduce<ResponseMetrics>((acc, curr) => {
        acc.totalTask++ // Conta todas as tarefas
        if(curr.status === "concluido") {
            acc.totalFinished++ // Conta as tarefas concluídas
        }
        return acc
    }, 

    {
        totalTask: 0,
        totalFinished: 0
    })

    if(!response) return {percetagem: 0}

    const percetagem = response?.totalTask > 0 ? (response?.totalFinished / response?.totalTask) * 100 : 0

    const totalFinished = response.totalFinished

    const total = response.totalTask
    return { percetagem, totalFinished, total}
   },[List])


   const {percetagem, totalFinished, total} = result()
   return {percetagem: percetagem, totalFinished, total}

}
