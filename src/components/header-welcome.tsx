"use client"
import Image from 'next/image'
import LogoSvg from '../../public/logo.svg'
import { ModeToggle } from './toggle-theme'
import { DropDowmMenuProfile } from './Profile/drop-dowm-menu-profile'
export function HeaderWelcome() {
    return (
        <header className='w-full justify-between flex items-center py-5'>
            <div className='flex gap-2 items-center'>
                <Image src={LogoSvg} alt='' width={30} height={30}/>
                <p className='text-TextColorPrimary text-md font-mono'>Atlas</p>

            </div>

            <div className='flex gap-3 justify-center items-center'>
                <ModeToggle/>

                
                <DropDowmMenuProfile/>
             </div>
        </header>
    )
}