import { useEffect, useState } from "react";
import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CharacterData {
  nome: string;
  sobrenome: string;
  idade: number;
  genero: "feminino" | "masculino";
  parentesco: "mae" | "pai";
  semelhanca: number;
}

export default function CharacterInformation() {
  const [character, setCharacter] = useState<CharacterData | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.name === "Visible") {
        setCharacter(event.data.payload);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Card className="flex flex-col gap-2 p-8">
        <CardHeader>
          <h1 className="uppercase text-[18px] font-bold">
            Informações do personagem
          </h1>
      </CardHeader>
          <Input className="p-4" placeholder="Nome" value={character?.nome || ""} readOnly />
          <Input className="p-4" placeholder="Sobrenome" value={character?.sobrenome || ""} readOnly />
          <Input className="p-4" placeholder="Idade" value={character?.idade?.toString() || ""} readOnly />
          <Input className="p-4" placeholder="Gênero" value={character?.genero || ""} readOnly />
          <Input className="p-4" placeholder="Parentesco" value={character?.parentesco || ""} readOnly />
          <Input className="p-4" placeholder="Semelhança (%)" value={character?.semelhanca?.toString() || ""} readOnly />
        <Button>DELETAR PERSONAGEM</Button>
      </Card>
    </div>
  );
}
