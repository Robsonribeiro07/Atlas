"use client"
import { useGetList } from "@/hooks/use-get-list"
import { Task } from "./task"

export function TaskContainer() {

  const {List} = useGetList()



  const SliceOrdenate = List?.task.slice().reverse().sort((a,b) => {
    if(a.status === 'concluido' && b.status !== 'concluido') {
      return 1
    } 
    if(a.status !== 'concluido' && b.status === 'concluido') {
      return -1
    }
    return 0
  })



    return (
        <div className="flex flex-1 flex-col  items-start h-full overflow-auto " >

            {SliceOrdenate && (
              SliceOrdenate.map((task) => {
                const {_id, prioridade,tarefa, status} = task

                const Checked = status === "concluido" ? true : false

                console.log(Checked)
                return (
                  <Task key={_id} prioridade={prioridade} tarefa={tarefa}  checked={Checked} _id={_id} />
                )
              })
            )}
            
            
        </div>
    )
}