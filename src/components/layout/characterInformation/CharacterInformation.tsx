import { CharacterInformationProps } from "../../../interface/CharacterInformationInterfaces" 

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader } from "@/components/ui/card";
import { useVisibility } from "../../../providers/Visibility";

export default function CharacterInformation({ character, index }: CharacterInformationProps) {
  const { removerPersonagem } = useVisibility();

  const handleDelete = () => {
    removerPersonagem(index);
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="flex flex-col gap-2 p-8">
        <CardHeader>
          <h1 className="uppercase text-[18px] font-bold">Informações do personagem</h1>
        </CardHeader>
        <Input className="p-4" placeholder="Nome" value={character?.nome || ""} readOnly />
        <Input className="p-4" placeholder="Sobrenome" value={character?.sobrenome || ""} readOnly />
        <Input className="p-4" placeholder="Idade" value={character?.idade?.toString() || ""} readOnly />
        <Input className="p-4" placeholder="Gênero" value={character?.genero || ""} readOnly />
        <Input className="p-4" placeholder="Parentesco" value={character?.parentesco || ""} readOnly />
        <Input className="p-4" placeholder="Semelhança (%)" value={character?.semelhanca?.toString() || ""} readOnly />
        <Button onClick={handleDelete}>DELETAR PERSONAGEM</Button>
      </Card>
    </div>
  );
}
