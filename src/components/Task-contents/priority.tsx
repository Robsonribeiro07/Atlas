interface Priority {
    prioridade: "Alta" | "Media" | "Baixa"
    checked?: boolean
}

export function Priority({prioridade,checked}: Priority) {



    const color  = {
        Alta: checked ? "" : "bg-[#39151b] text-[#fb7185]",
        Media: checked ? "" : "bg-[#372c0a] text-[#f4c414]",
        Baixa: checked ? "" : "bg-[#142239] text-[#60a5fa]"

    }

    return (
        <p className={`w-8 rounded-sm p-1 min-w-fit flex items-center justify-center h-5 ${color[prioridade]} text-[0.7rem] ` }>
            {prioridade}
        </p>
    )
}