import { Edit } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { EditTaskForm } from "./form-edit.task";
import { useShowButtonEditOrRemove } from "@/store/state-show-edit-or-remove-task";


interface TaskContent {
    handleEditingContent: () => void
}
export function EditTaskContent({handleEditingContent}: TaskContent) {

    const {isOpenDialog, toggleDialog} = useShowButtonEditOrRemove()
    return (
        <Dialog open={isOpenDialog} onOpenChange={toggleDialog}>

            <DialogTrigger asChild onClick={handleEditingContent}>
                <div className="cursor-pointer flex p-1 px-[0.5rem] items-center gap-2 text-sm ">
                <Edit size={17}/>
                Editar
            </div>

            </DialogTrigger>
            <DialogContent className="bg-background ">

            <DialogHeader>
                <DialogTitle className="font-[500]">
                    Aqui voce pode renomear a tarefa, e altera sua prioridade
                </DialogTitle>
            </DialogHeader>

            <EditTaskForm/>
            </DialogContent>
        </Dialog>
    )
}