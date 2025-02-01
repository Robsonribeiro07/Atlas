import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import AvatarProfile from "./avatar";
import Avatar from "react-avatar";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import { ShowDetailsProfile } from "./show-details-profile";
import { useGetList } from "@/hooks/use-get-list";
import { useUser } from "@clerk/nextjs";

export function DropDowmMenuProfile() {

    
    const {List} = useGetList()

    const {user} = useUser()
    return (
        
        <DropdownMenu>
        <DropdownMenuTrigger>
        {List?.image_profile && (
            <AvatarProfile image_profile={List.image_profile}/>

        )}

        {user?.username && !List?.image_profile && (
            <Avatar name={user.username} round color='#77909a' size='40' textSizeRatio={2}/>
        
        )}
        </DropdownMenuTrigger>

        <ShowDetailsProfile/>
        </DropdownMenu>
    )
}