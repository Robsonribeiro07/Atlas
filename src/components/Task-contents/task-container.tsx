"use client"
import { useGetList } from "@/hooks/use-get-list"
import { Task } from "./task"

export function TaskContainer() {

  const {List} = useGetList()


  console.log(List)

    return (
        <div className="flex flex-1 flex-col  items-start h-full overflow-auto " >

            {List?.task && (
              List.task.slice().reverse().map((task) => {
                const {_id, prioridade,tarefa, status} = task

                const Checked = status === "concluido" ? true : false
                return (
                  <Task key={_id} prioridade={prioridade} tarefa={tarefa}  checked={Checked} _id={_id} />
                )
              })
            )}
            
        </div>
    )
}