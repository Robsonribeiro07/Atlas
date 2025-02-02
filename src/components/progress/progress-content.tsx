import { Header } from "./header";
import { ProgressFinishedHabits } from "./progress-finished-habits";
import { ProgressFinishedTask } from "./progress-finished-task";

export function ProgressContent() {
    return (
        <div className="border lg:w-[40%] w-full  h-[40vh] rounded-2xl shadow-xl">
            <Header/>

            <div className="w-full flex  h-full items-center mt-5 justify-around">
                 <ProgressFinishedTask/>
                
                <ProgressFinishedHabits/>
            </div>
  

        </div>
    )
}