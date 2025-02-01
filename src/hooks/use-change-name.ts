import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

export function useChangerName() {  
     
    const {user} = useUser()

    const handleNewName = (name: string) => {
        if(user){
        
            if(user.username?.toLocaleLowerCase() === name.toLocaleLowerCase()) {
                toast.info('Nome não pode ser o mesmo que seu atual')
                return null
            }

          try {

            user.update({
                username: name
            })
            toast.dismiss()
            toast.success('Nome alterado com sucesso')
            return user

          } catch {

            toast.error('Falha ao alterar o nome')
            return {erroMessage: 'Error updating'}
          }
        }
    }


    return { handleNewName }
}