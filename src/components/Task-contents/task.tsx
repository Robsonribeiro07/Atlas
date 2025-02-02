import { useShowButtonEditOrRemove } from "@/store/state-show-edit-or-remove-task";
import Checkbox from "./checkbox-task-finished";
import { DropDowmRemoveOrEditButons } from "./drop-dowm-remove-or-edit-butons";
import { Priority } from "./priority";

interface Task {
    prioridade: "Alta" | "Media" | "Baixa"
    checked: boolean
    tarefa: string
    _id: string
}
export function Task({prioridade, checked, tarefa, _id}: Task) {
     
    const {setEditing, isEditing} =  useShowButtonEditOrRemove()

    const handleEditing = () => {
        setEditing({_id})
    }

    const Checked = checked ? "line-through text-[#71717a]" : ""
    return (
        <div className="flex w-full items-center gap-3 border-b px-3 py-4 " onMouseOver={handleEditing}
        >
            <Checkbox TaskId={_id} checked={checked}/>
            <label htmlFor={_id} className={`text-sm ${Checked} text-TextColorPrimary`}>{tarefa}</label>
            
            <Priority  prioridade={prioridade} checked={checked}/>

           {isEditing === _id && (
             <DropDowmRemoveOrEditButons prioridade={prioridade} tarefa={tarefa} _id={_id} checked={checked}/>
           )}
        </div>
    )
}