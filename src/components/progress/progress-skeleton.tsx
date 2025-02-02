import { Skeleton } from "../ui/skeleton";

export function  ProgressSkeleton() {
    return (
        <div className="flex flex-col items-center gap-3" >
            <Skeleton className='bg-graySkeleton w-[100px] h-[100px] rounded-full'/>
            <Skeleton className='bg-graySkeleton w-[40px] h-[20px] rounded-sm'/>
            <Skeleton className='bg-graySkeleton w-[20px] h-[20px] rounded-sm'/>
        </div>
        
    )
}