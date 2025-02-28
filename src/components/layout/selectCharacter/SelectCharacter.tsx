import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useVisibility } from "../../../providers/Visibility";

export default function SelectCharacter() {
  const { personagens } = useVisibility();

  return (
    <div className="flex flex-col items-center">
      <Card className="flex flex-col gap-2 p-8">
        <CardHeader>
          <h1 className="uppercase text-[18px] font-bold">Selecionar Personagem</h1>
        </CardHeader>
        {Array.from({ length:5 }).map((_, index) => (
          <Input
            key={index}
            className="p-8"
            value={personagens[index] ? personagens[index].nome : ""}
            placeholder="vazio"
            readOnly
          />
        ))}
      </Card>
    </div>
  );
}
