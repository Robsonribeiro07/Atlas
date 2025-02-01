import { Trash } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import ButtonEditOrRemoveOpen from "./button-open-dropdowmenu";
import { EditTaskContent } from "./edit-task-content";
import { useShowButtonEditOrRemove } from "@/store/state-show-edit-or-remove-task";
import { useRemoveTask } from "@/hooks/use-remove-task";


interface TaskProps {
    prioridade: "Alta" | "Media" | "Baixa"
    tarefa: string
    _id: string

}
export function DropDowmRemoveOrEditButons({prioridade, tarefa, _id}: TaskProps) {

    const {setEditingContentTask, isOpenDropDowm, toogleDropDowm} = useShowButtonEditOrRemove()
    
    const {handleRemoveTask} = useRemoveTask()

    
    const handleEditingContent = () => {
           setEditingContentTask({_id,tarefa,prioridade})
    }
   

    return (
        <DropdownMenu open={isOpenDropDowm} onOpenChange={toogleDropDowm}>
            <DropdownMenuTrigger className="absolute  right-4">
                <ButtonEditOrRemoveOpen checked={false}/>
            </DropdownMenuTrigger>

           <DropdownMenuContent >
            <EditTaskContent handleEditingContent={handleEditingContent}/>

            <DropdownMenuItem className="cursor-pointer" onClick={() => handleRemoveTask({taskId: _id})}>
                <Trash/>
                Remover
            </DropdownMenuItem>
            </DropdownMenuContent>


            
        </DropdownMenu>
    )
}