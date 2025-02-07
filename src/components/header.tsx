import Image from 'next/image'
import { AddNewHabit } from './Habits/add-new-habit'
import { Dialog, DialogTrigger } from './ui/dialog'
import { DropDowmMenuProfile } from './Profile/drop-dowm-menu-profile'
import { NewHabitContent } from './Habits/new-habit-content'
import { useGetLogoSvg } from '@/hooks/use-get-logo'
export function Header() {

    const {LogoSvg} = useGetLogoSvg()

    return (
        <header className="lg:w-full w-full flex justify-between ">
            <div className='flex gap-3 items-center'>
            <Image src={LogoSvg} alt='logo' width={30} height={30}/>
            <p className=' text-TextColorPrimary font-mono text-2xl font-[700]'>Atlas</p>

            </div>


            <div className='flex items-center gap-3'>
                <Dialog>
                <DialogTrigger>
                <AddNewHabit/>
                </DialogTrigger>

                <NewHabitContent/>
                </Dialog>
                
                <DropDowmMenuProfile/>
            </div>
        </header>
    )
}