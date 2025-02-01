import { useNewTask } from "@/hooks/use-new-task"
import { Controller } from "react-hook-form"
import { Select, SelectTrigger, SelectValue } from "../ui/select"
import { SelectPriority } from "./select-priority"
import { Button } from "../ui/button"
import { DialogClose } from "../ui/dialog"

export function FormNewTask() {

    const {handleSubmit, control, register} = useNewTask()

    return (
        
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <div className="w-full flex gap-3">
            <input type="text" className="flex-1  bg-transparent border rounded-md text-start px-2 font-[500] text-sm focus:outline focus:outline-green-500 focus:outline-[2.5px]" placeholder="Pagar conta de luz, etc" {...register('tarefa')}/>

            <Controller control={control} name="prioridade"
             render={({field} ) => {

                const {onChange} = field

                
                return (
                <Select defaultValue="Media" onValueChange={onChange} >
                <SelectTrigger className="w-[40%] relative focus:outline focus:outline-green-500 focus:outline-[2.5px]  " >
                    <p className="absolute top-[-10px] text-[0.7rem] bg-[#0a0a0a]">Selecionar prioridade</p>
                   <SelectValue/>
                </SelectTrigger>

                <SelectPriority/>
            </Select>
                )
             } }/>
        </div>

        <div className="w-full mt-3 flex justify-end gap-3">
            <DialogClose asChild>
            <Button className="bg-transparent border">
                Cancelar
            </Button>
            
            </DialogClose>

            <Button type="submit">
                Confirmar
            </Button>

        </div>
    </form>
    )
}