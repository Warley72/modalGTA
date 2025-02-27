import { Card, CardHeader } from "@/components/ui/card"
import { Input} from "@/components/ui/input"

export default function SelectCharacter() {
    return(
        <div className="flex flex-col items-center">
            <Card className="flex flex-col gap-2 p-8">
                <CardHeader>
                    <h1 className="uppercase text-[18px] font-bold">Selecionar Personagem</h1>
                </CardHeader>
                    <Input className="p-8" placeholder="vazio" />
                    <Input className="p-8" placeholder="vazio" />
                    <Input className="p-8" placeholder="vazio" />
                    <Input className="p-8" placeholder="vazio" />
                    <Input className="p-8" placeholder="vazio" />
            </Card>
        </div>
    )
}