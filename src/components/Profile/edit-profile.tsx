import { useTheme } from "next-themes";
import CardImage from "./card-image";
import ParticlesCanvas from "../particles-background";
import { SheetContent, SheetDescription, SheetHeader, SheetTitle } from "../ui/sheet";
import Input from "./input";

export function EditProfile() {
    const {theme} = useTheme()
    return (
        <SheetContent className="bg-background text-TextColorPrimary">
            <ParticlesCanvas theme={theme ?? "dark"}/>
            <SheetHeader>
                <SheetTitle className="text-TextColorPrimary">
                Editar Perfil 

                </SheetTitle>

                <SheetDescription>
                Aqui você pode editar seu nome e alterar seu avatar.
                </SheetDescription>
                
            </SheetHeader>


         <div className="top-[10%] h-[80%] w-full flex flex-col items-center  relative justify-between">
            <CardImage/>



            <Input/>
         </div>
            
        </SheetContent>
    )
}