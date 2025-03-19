import { useState } from "react";
import { useVisibility } from "../../../providers/Visibility";
import { Character } from "../../../interface/CharacterCreatorInterfaces"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

export default function CharacterCreator() {
  const { adicionarPersonagem, personagens } = useVisibility();

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState<number>(0);
  const [genero, setGenero] = useState<"feminino" | "masculino">("feminino");
  const [parentesco, setParentesco] = useState<"mae" | "pai" | "">("");
  const [semelhanca, setSemelhanca] = useState<number>(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (personagens.length >= 5) {
      alert("Limite de 5 personagens atingido!");
      return;
    }

  const payload: Character = { nome, sobrenome, idade, genero, parentesco, semelhanca };
    adicionarPersonagem(payload);
    window.postMessage({ name: "Visible", payload }, "*");
    
    console.log(" Personagem criado:", payload);
  };

  return (
    <Card>
      <CardHeader className="flex items-center">
        <CardTitle className="uppercase text-[18px] font-bold">Criador de Personagem</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col items-center gap-1">
        <h2 className="uppercase text-[18px] font-bold">Identidade</h2>
        <Input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <Input placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
        <Input
          placeholder="Idade"
          type="number"
          value={idade}
          onChange={(e) => setIdade(Math.max(0, Number(e.target.value)))}
        />
      </CardContent>

      <CardContent className="flex flex-col items-center gap-1">
        <h2 className="uppercase text-[18px] font-bold">Gênero</h2>
        <div className="flex items-center gap-1">
          <Button onClick={() => setGenero("feminino")} variant={genero === "feminino" ? "default" : "outline"}>
            Feminino
          </Button>
          <Button onClick={() => setGenero("masculino")} variant={genero === "masculino" ? "default" : "outline"}>
            Masculino
          </Button>
        </div>
      </CardContent>

      <CardContent className="flex flex-col items-center gap-1">
        <h2 className="uppercase text-[18px] font-bold">Parentesco</h2>
        <div className="flex items-center gap-1">
          <Button onClick={() => setParentesco("mae")} variant={parentesco === "mae" ? "default" : "outline"}>
            Selecionar mãe
          </Button>
          <Button onClick={() => setParentesco("pai")} variant={parentesco === "pai" ? "default" : "outline"}>
            Selecionar pai
          </Button>
        </div>
      </CardContent>

      <CardContent className="flex flex-col items-center gap-1">
        <h2 className="uppercase text-[18px] font-bold">Semelhança</h2>
        <Slider defaultValue={[semelhanca]} max={100} step={1} onValueChange={(value) => setSemelhanca(value[0])} />
      </CardContent>

      <CardContent className="flex flex-col items-center gap-1">
        <Button onClick={handleSubmit}>Criar Personagem</Button>
      </CardContent>
    </Card>
  );
}
