"use client"
import { Calendar } from "@/components/Calendar/calendar";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Card from "@/components/person-bacground";
import { ProgressContent } from "@/components/progress/progress-content";
import { TaskContents } from "@/components/Task-contents/task-contents";
import SwitchTheme from "@/components/toggle-theme-dashboard";
import { useGetTask } from "@/hooks/use-get-task";

function Dashboard() {
   
    const {} = useGetTask()

    return (
        
            <div className="text-TextColorPrimary min-w-screen lg:w-[65vw] mx-auto mt-5 px-5 pb-3">
            <Header/>
            
            <Calendar/>


            <div className="absolute left-[-10px] top-10 z-[-1]">
                <Card/>
                
            
            </div>
 
            <div className="lg:full w-full mx-auto mt-3 flex flex-col gap-5 lg:flex lg:flex-row lg:gap-0 justify-between px-3">
                <TaskContents/>
                <ProgressContent/> 
            </div>

            <Footer/>

            <SwitchTheme/>
        </div>
        
    )
}
export default Dashboard;