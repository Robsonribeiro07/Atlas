import { useAddNewHabit } from "@/hooks/use-addd-new-habit";
import { Button } from "../ui/button";
import {DialogClose} from '../ui/dialog'


export function FormNewHabit() {


    const {handleSubmit, buttonRef, isPending, register} = useAddNewHabit()
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Estudar ingles, meditar. etc..." className="w-full p-1 rounded-sm bg-transparent border-[2px] focus:border-[green] outline-none transition-all" {...register('Title')}   />

        <div className="w-full flex  p-1   justify-end mt-3 gap-3">
         <DialogClose asChild  ref={buttonRef}>
         <Button variant={'secondary'}>Cancelar</Button>

         </DialogClose>
        <Button variant={'default'} type="submit" disabled={isPending} className="disabled:bg-gray-600">Confirmar</Button>
        </div>
        </form>
    )
}