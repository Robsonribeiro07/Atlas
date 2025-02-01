import { Close, DialogTitle } from "@radix-ui/react-dialog";
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';

import z from 'zod';
import { useNewHabit } from "@/hooks/use-new-habit";
import { useRef } from "react";
import { Button } from "../ui/button";
import { DialogContent, DialogHeader } from "../ui/dialog";

const SchemaNewHabit = z.object({
        Title: z.string().min(2,'Título precisa ter pelo menos 2 caracteres.'),

    })

type schemaNewHabit = z.infer<typeof SchemaNewHabit>

export function NewHabitContent() {


    const {register, handleSubmit, reset} = useForm<schemaNewHabit>({
        resolver: zodResolver(SchemaNewHabit)
    })

    const {handleAddHabit, isPending} = useNewHabit()

    const buttonRef = useRef<HTMLButtonElement | null>(null)

    const onSubmit = async (data: schemaNewHabit) => {

         if(handleAddHabit) {
          const {isSuccess} = handleAddHabit({Title: data.Title})

          if(isSuccess) {
            reset()
            buttonRef.current?.click()
          }
         }

    }

    return (
        <DialogContent className="text-TextColorPrimary h-[28vh] bg-[#0a0a0a]">
            <DialogHeader   >
                <DialogTitle>
                    Adiciona novo habito
                </DialogTitle>
            </DialogHeader>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Estudar ingles, meditar. etc..." className="w-full p-1 rounded-sm bg-transparent border-[2px] focus:border-[green] outline-none transition-all" {...register('Title')}   />

                <div className="w-full flex  p-1   justify-end mt-3 gap-3">
                 <Close asChild>
                 <Button variant={'secondary'} ref={buttonRef}>Cancelar</Button>

                 </Close>
                <Button variant={'default'} type="submit" disabled={isPending} className="disabled:bg-gray-600">Confirmar</Button>
                </div>
                </form>
            </div>

        </DialogContent>
    )
}