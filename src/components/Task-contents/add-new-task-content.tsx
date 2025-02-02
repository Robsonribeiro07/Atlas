import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { FormNewTask } from "./form-new-task";


export function AddNewTaskContent() {

    
    return (
        
        <DialogContent className="bg-background text-TextColorPrimary w-[30%] h-[30vh] flex flex-col">
            <DialogHeader>
                <DialogTitle className="text-[500]">
                Adicionar tarefa

                </DialogTitle>

                <DialogDescription>
                Adicione uma tarefa para realizar hoje.
                </DialogDescription>
            </DialogHeader>

            <FormNewTask/>



        </DialogContent>
    )
}