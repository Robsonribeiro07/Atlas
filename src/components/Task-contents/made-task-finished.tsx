import { useGetFinishedTaskMetrics } from "@/hooks/use-get-finished-task-metrics"
import { Skeleton } from "../ui/skeleton"

export function MadeTaskFinished() {

    const {totalFinished,total} = useGetFinishedTaskMetrics()

    return (
        total ? (
            <p className="rounded-xl bg-[#272526] flex items-center justify-center text-[0.7rem] h-fit p-1  px-2 text-[#7a7a84] font-semibold">
            {totalFinished}/{total} feitas
        </p>
        ) : (
            <Skeleton className="bg-[#272526] px-8 py-3 rounded-xl"/>
        )
    )
}