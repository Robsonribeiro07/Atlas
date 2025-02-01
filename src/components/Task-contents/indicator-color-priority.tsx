
interface IndicatorColor {
    prioridade: "Baixa" | "Media" | "Alta"
}
export function IndicatorColorPriority({prioridade}: IndicatorColor) {



    const color = prioridade === "Alta" ? "bg-[#ef4444]" : prioridade === "Media" ? "bg-[#f59e0b]" : "bg-[#3b82f6]"
    return (
        <p className={`w-3 h-3 ${color} rounded-full`}/>
    )
}