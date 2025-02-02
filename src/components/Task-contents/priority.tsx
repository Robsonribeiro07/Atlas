
interface Priority {
    prioridade: "Alta" | "Media" | "Baixa"
    checked?: boolean
}

export function Priority({prioridade,checked}: Priority) {


    const color  = {
        Alta: checked ? "bg-prioridadeAltaChecked text-prioridadeAltaChecked-foreground" : "bg-prioridadeAlta text-prioridadeAlta-foreground",
        Media: checked ? "bg-prioridadeMediaChecked text-prioridadeMediaChecked-foreground" : "bg-prioridadeMedia text-prioridadeMedia-foreground",
        Baixa: checked ? "bg-prioridadeBaixaChecked text-prioridadeBaixaChecked-foreground" : "bg-prioridadeBaixa text-prioridadeBaixa-foreground"

    }

    return (
        <p className={`w-8 rounded-sm p-1 min-w-fit flex items-center justify-center h-5 ${color[prioridade]} text-[0.7rem] ` }>
            {prioridade}
        </p>
    )
}