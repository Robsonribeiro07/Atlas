import { Plus } from "lucide-react";

export function AddNewHabit() {
    return (
        <div className="border min-w-[10rem] h-8 p-5 rounded-md flex items-center text-TextColorPrimary gap-3 cursor-pointer">
            <Plus size={18}/>
            <p className="text-sm font-semibold">Adiciona Habito</p>

        </div>
    )
}