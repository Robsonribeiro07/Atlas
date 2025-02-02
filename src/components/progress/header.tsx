import Image from 'next/image'
import FrequencySvg from '../../../public/frenquecy.svg'
export function Header() {
    return (
        <div className="p-3 flex items-center gap-2 font-[500]">
            <p className='w-fit rounded-full bg-grayColor p-2'>
            <Image src={FrequencySvg} alt=''/>
            </p>

            <div className='flex flex-col items-start leading-tight'>
                <p>
                Progresso diário
                </p>
                <p className='font-normal text-sm text-[#a1a1aa]'>
                Sua atividade
                </p>
            </div>
        </div>
        
    )
}