import { EditIcon, LogOut } from "lucide-react";
import { Separator } from "../separator";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel } from "../ui/dropdown-menu";
import { useUser } from "@clerk/nextjs";
import { SignOutButton} from '@clerk/nextjs'
import { Sheet, SheetTrigger } from "../ui/sheet";
import { EditProfile } from "./edit-profile";

export function ShowDetailsProfile() {

    const {user}  = useUser()

   

    return (
        <DropdownMenuContent className="text-TextColorPrimary flex flex-col p-1 w-[13rem] ">
            <DropdownMenuLabel className="py-0" >
               <p className="font-[500]">{user?.username}</p>
            </DropdownMenuLabel>


            <DropdownMenuLabel className="py-0 " >
               <p className="text-[0.750rem] font-[500] text-[#767676]">{user?.emailAddresses[0].emailAddress}</p>
            </DropdownMenuLabel>


            <Separator/>

            <DropdownMenuItem className="flex justify-between cursor-pointer">
                <SignOutButton>
               <div className="flex gap-2 items-center ">
               <LogOut size={18}/>
               <p>Sair</p>
               </div>
               </SignOutButton>

                <p className="tracking-wide text-[#7f7f7f] font-[500]">Ctrl + Q</p>
            </DropdownMenuItem>
            <Separator/>

            <Sheet>
                <SheetTrigger>
                    <div className="flex gap-2 px-2 items-center py-2">
                    <EditIcon size={18}/>

                    <p className="text-sm">Editar</p>
                    </div>
                </SheetTrigger>
                
                <EditProfile/>
            </Sheet>
        </DropdownMenuContent>
    )

}