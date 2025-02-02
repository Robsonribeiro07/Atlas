import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useNewHabit } from "./use-new-habit"
import { useRef } from "react"

const SchemaNewHabit = z.object({
    Title: z.string().min(2,'Título precisa ter pelo menos 2 caracteres.'),

})

type schemaNewHabit = z.infer<typeof SchemaNewHabit>
export function useAddNewHabit() {
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

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        reset,
        isPending,
        buttonRef
    }
}