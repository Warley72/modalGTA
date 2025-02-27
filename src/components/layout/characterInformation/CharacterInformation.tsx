import { Card, CardHeader } from "@/components/ui/card"
import { Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CharacterInformation() {
    return(
        <div className="flex flex-col items-center">
            <Card className="flex flex-col gap-2 p-8">
                <CardHeader>
                    <h1 className="uppercase text-[18px] font-bold">Informaçãoes do personagem</h1>
                </CardHeader>
                    <Input className="p-4" placeholder="nome:" />
                    <Input className="p-4" placeholder="idade:" />
                    <Input className="p-4" placeholder="genero:" />
                    <Input className="p-4" placeholder="banco:" />
                    <Input className="p-4" placeholder="identidade:" />
                    <Input className="p-4" placeholder="telefone:" />
                    <Button>
                        DELETAR PERSONAGEM
                    </Button>
            </Card>
        </div>
    )
}