import { SelectContent, SelectItem } from "../ui/select";
import { IndicatorColorPriority } from "./indicator-color-priority";

export function SelectPriority() {
    return (
        <SelectContent className="">
            <SelectItem value="Alta" className="text-[0.8rem]" >
            <div className="flex flex-row-reverse items-center gap-2">
                    <p>Alta</p>
                    <IndicatorColorPriority prioridade="Alta"/>
                </div>  
            </SelectItem>
            <SelectItem value="Media" className="text-[0.8rem]">
            <div className="flex flex-row-reverse items-center gap-2">
                    <p>Media</p>
                    <IndicatorColorPriority prioridade="Media"/>
                </div>
            </SelectItem>
            <SelectItem value="Baixa" className="text-[0.8rem]">
           
                <div className="flex flex-row-reverse items-center gap-2">
                    <p>Baixa</p>
                    <IndicatorColorPriority prioridade="Baixa"/>
                </div>

            </SelectItem>
        </SelectContent>
    )
}