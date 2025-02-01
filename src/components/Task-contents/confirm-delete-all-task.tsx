import { useConfirmDeleteAllTask } from "@/hooks/use-confirm-delete-all-task";
import { Button } from "../ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";

export function ConfirmDeleteAllTask() {

    const {handleConfirDeleteAllTask} = useConfirmDeleteAllTask()
    return (
        <DialogContent className="bg-backgroundGray text-TextColorPrimary w-[30vw]">
            <DialogHeader>
                <DialogTitle>
                    Voce esta preste a excluir todas as suas tarefas
                </DialogTitle>
                <DialogDescription>
                    Esta ação ira remover todas as suas tarefas permanentemente. Continuar?
                </DialogDescription>
            </DialogHeader>

            <div className="flex items-center justify-end gap-2">
                <DialogClose asChild>
                <Button className="bg-transparent border">
                    Cancelar
                </Button>
                </DialogClose>
                
                <Button onClick={handleConfirDeleteAllTask}>
                    Confirmar
                </Button>
            </div>
        </DialogContent>
    )
}