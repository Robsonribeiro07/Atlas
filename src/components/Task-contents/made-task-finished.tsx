import { useGetFinishedTaskMetrics } from "@/hooks/use-get-finished-task-metrics"
import { Skeleton } from "../ui/skeleton"

export function MadeTaskFinished() {

    const {totalFinished,total} = useGetFinishedTaskMetrics()

    return (
        total ? (
            <p className="rounded-md bg-grayColor  flex items-center justify-center text-[0.7rem] h-fit p-1  px-2 text-[#7a7a84] font-semibold">
            {totalFinished}/{total} feitas
        </p>
        ) : (
            <Skeleton className="bg-graySkeleton px-8 py-3 rounded-xl"/>
        )
    )
}