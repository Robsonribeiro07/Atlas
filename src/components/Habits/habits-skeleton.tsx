import { SkeletonCardHabits } from "./skeleton-card-habits";

export function HabitContentsSkeleton() {

    return Array.from({ length: 2 }).map((_, index) => {
        return (
            <div key={index} className="flex items-center justify-between gap-5">
                <div className="min-w-[70%] lg:min-w-0">
                    <SkeletonCardHabits/>
                    
                </div>

                <div className="flex gap-[1.20rem] self-end">
                    {Array.from({length: 7}).map((_,index) => {
                        return (
                            <SkeletonCardHabits key={index}/>
                        );
                    })}
                </div>
            </div>
        );
    });
}
