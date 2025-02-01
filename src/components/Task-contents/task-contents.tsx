import { useGetList } from "@/hooks/use-get-list";
import { Separator } from "../separator";
import { AddNewTask } from "./add-new-task";
import { MadeTaskFinished } from "./made-task-finished";
import { TaskContainer } from "./task-container";
import Loader from "./loading";
import { useShowButtonEditOrRemove } from "@/store/state-show-edit-or-remove-task";

export function TaskContents() {

    const {List,isFetching} = useGetList()
     const Clear = useShowButtonEditOrRemove((state) => state.Clear)
   
    return (
        <div className="border lg:w-[50%] w-full  h-[50vh] rounded-2xl flex flex-col min-h-fit" onMouseLeave={Clear}>
            <header className="flex p-3 justify-between items-center" >
                <div>
                    <p className="font-[500] text-TextColorPrimary tracking-wide">Tarefas para hoje</p>
                    <p className="text-[#92959a] text-[0.850rem]">30 de janeiro de 2025</p>
                </div>

                <MadeTaskFinished/>
            </header>

            <Separator/>

            <div className="flex-1 items-center flex justify-center overflow-auto relative">
            
            {!List ? (
               <Loader/>
            ): !isFetching && List.task.length < 1 ?(
                <p className="text-center text-sm text-TextColorPrimary">Nenhuma tarefa para hoje.<br/>
                Que tal adicionar uma para começar?</p>
            ): (
                <TaskContainer/>

            )}

            </div>

            <Separator/>
            <footer className="h-[20%]">
                <AddNewTask />
            </footer>

        </div>
    )
}