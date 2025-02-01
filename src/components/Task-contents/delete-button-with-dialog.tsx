import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { ConfirmDeleteAllTask } from "./confirm-delete-all-task";
import { useTaskConfirmDeleteAll } from "@/store/state-dialog-confirm-delete";

export function TrashButtonWithDialogConfirm() {

        const {isOpen, toggle} = useTaskConfirmDeleteAll()
    return (
        <Dialog open={isOpen} onOpenChange={toggle}>
            <DialogTrigger asChild>
            <Button  className="bg-transparent hover:bg-transparent w-fit  flex justify-center py-1 px-2">
            <Trash size={15} className=" cursor-pointer"/>
            </Button>

            </DialogTrigger>

            <ConfirmDeleteAllTask/>
        </Dialog>
    )
}