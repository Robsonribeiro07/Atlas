import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { AddNewTaskContent } from "./add-new-task-content";
import { DeleteAllTask } from "./delete-all-task";
import { useStateNewTaskDialog } from "@/store/state-dialog-new-task";

export function AddNewTask() {

    const {isOpen, toggle} = useStateNewTaskDialog()
    return (
        <div className="flex  items-center ml-5 gap-3 h-full relative text-[#94948c] font-[500]">
             <Dialog open={isOpen} onOpenChange={toggle}>
                <DialogTrigger asChild>
                <Button className="flex items-center gap-2 cursor-pointer bg-transparent hover:bg-transparent text-[#94948c] ">
                <Plus size={15}/>

             <p className="text-sm">Adiciona nova tarefa</p>

             </Button>
             </DialogTrigger>

             <AddNewTaskContent/>   
             </Dialog>
              
            <DeleteAllTask/>
           
 
        </div>
    )
}