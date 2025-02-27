import { Card,CardContent,CardHeader,CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider} from "@/components/ui/slider"

export default function CharacterCreator() {
    return (
        < >
            <Card>
                <CardHeader className="flex items-center">
                    <CardTitle className="uppercase text-[18px] font-bold">criador de personagem</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-1">
                    <h2 className="uppercase text-[18px] font-bold">identidade</h2>
                    <Input placeholder="nome"/>
                    <Input placeholder="sobrenome"/>
                    <Input placeholder="idade"/>
                </CardContent>
                <CardContent className="flex flex-col items-center gap-1">
                    <h2 className="uppercase text-[18px] font-bold">gênero</h2>
                    <div className="flex items-center gap-1">
                        <Button>Feminina</Button>
                        <Button>Masculino</Button>
                    </div>
                </CardContent>
                <CardContent className="flex flex-col items-center gap-1">
                    <h2 className="uppercase text-[18px] font-bold">parentesco</h2>
                    <div className="flex items-center gap-1">
                        <Button>Selecionar mae</Button>
                        <Button>Selecionar pai</Button>
                    </div>
                </CardContent>
                    <CardContent className="flex flex-col items-center gap-1">
                        <Slider defaultValue={[50]} max={100} step={1} />
                    </CardContent>
                <CardContent className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1">
                        <Button>voltar</Button>
                        <Button>01</Button>
                        <Button>Proximo</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}