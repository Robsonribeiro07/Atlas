import { Header } from "./header";
import { ProgressFinishedTask } from "./progress-finished-task";

export function ProgressContent() {
    return (
        <div className="border lg:w-[40%] w-full  h-[40vh] rounded-2xl">
            <Header/>

            <div className="w-full flex  h-full items-start mt-5 justify-around">
                <ProgressFinishedTask/>
                <ProgressFinishedTask/>
            </div>
  

        </div>
    )
}