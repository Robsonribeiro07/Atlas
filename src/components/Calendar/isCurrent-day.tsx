interface IsCurrentDay {
    IsDate: Date
}
export function IsCurrentDay({ IsDate}: IsCurrentDay) {


    const currentIsDate = new Date()

    const IscurrentDay = currentIsDate.getDate() === IsDate.getDate() &&
    currentIsDate.getMonth() === IsDate.getMonth() &&
    currentIsDate.getFullYear() === IsDate.getFullYear()


    if(IscurrentDay) {
        return <p className="h-2 w-2 rounded-full bg-[#22c55e] absolute right-[-8px] top-[-7px] animate-pulse"/>
    }
    
}