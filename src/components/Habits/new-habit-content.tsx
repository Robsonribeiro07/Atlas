

import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { FormNewHabit } from "./form-new-habit";



export function NewHabitContent() {


   

    return (
        <DialogContent className="text-TextColorPrimary h-[28vh] bg-background">
            <DialogHeader   >
                <DialogTitle>
                    Adiciona novo habito
                </DialogTitle>
                <DialogDescription>
                    Aqui voce pode adiciona seu habito
                </DialogDescription>
            </DialogHeader>

            <div>
                <FormNewHabit/>
              
            </div>

        </DialogContent>
    )
}