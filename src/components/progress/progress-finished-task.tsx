import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { useGetFinishedTaskMetrics } from '@/hooks/use-get-finished-task-metrics';
import { useTheme } from 'next-themes';
import { ProgressSkeleton } from './progress-skeleton';

export function ProgressFinishedTask() {
   
  const {percetagem, totalFinished} = useGetFinishedTaskMetrics()


  const {theme} = useTheme()
  

  const ConvertePercetagem = percetagem <= 99 ? percetagem.toFixed(2).slice(0, 2) : percetagem.toFixed(2).slice(0, 3)

  const color = theme ? theme === 'dark' ? "#19191a" : "#e4e4e7" : "#19191a"


  return (
    <div className='flex flex-col h-full items-center gap-3 relative'>
    {theme ? (
      <>
      <div style={{ width: 100, height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='relative'>
      <CircularProgressbar
        value={percetagem}
        styles={{
          path: {
            stroke: "#007aff",
            strokeWidth: 5,
            transition: "stroke-dashoffset 0.5s ease 0s",
          },
          trail: {
            stroke: color,
            strokeWidth: 5
          }
        }}
      />

      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col  items-center'>
        <p className='font-[500] text-xl'>{totalFinished}</p>
        <p className='text-[0.7rem] text-[#a1a1aa]'>feita(s)</p>
      </div>
    </div>

    <div className='text-center'>
    <p className='font-[400] text-TextColorPrimary text-sm'>Tarefa</p>
    <p className='text-sm text-[#71717a]'>{ConvertePercetagem}%</p>
    </div>
    </>
    ) : (
      <ProgressSkeleton/>
    )}
    </div>
  );
}
