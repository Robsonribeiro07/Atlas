import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";
import { HoverFromButtonDeleteAll } from "./hover-from-button-delete-all";
import { TrashButtonWithDialogConfirm } from "./delete-button-with-dialog";

export function DeleteAllTask() {
    return (
         
        <HoverCard openDelay={100} closeDelay={0}>
        <HoverCardTrigger className="absolute right-5" >
         <TrashButtonWithDialogConfirm/>
        </HoverCardTrigger>

        <HoverFromButtonDeleteAll/>
    </HoverCard>
    )
}