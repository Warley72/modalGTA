import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

interface ModalPayload {
  nome: string;
  sobrenome: string;
  idade: number;
  genero: "feminino" | "masculino";
  parentesco: "mae" | "pai";
  semelhança: number;
}

export default function CharacterCreator() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState<number>(0);
  const [genero, setGenero] = useState<"feminino" | "masculino">("feminino");
  const [parentesco, setParentesco] = useState<"mae" | "pai">("mae");
  const [semelhanca, setSemelhanca] = useState<number>(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload: ModalPayload = {
      nome,
      sobrenome,
      idade,
      genero,
      parentesco,
      semelhança: semelhanca,
    };
    console.log(nome, sobrenome, idade, genero, parentesco, semelhanca)
    console.log("🔹 Enviando para postMessage:", payload);
    window.postMessage({ name: "Visible", payload }, "*");
  };

  return (
    <>
      <Card>
        <CardHeader className="flex items-center">
          <CardTitle className="uppercase text-[18px] font-bold">
            Criador de Personagem
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-1">
          <h2 className="uppercase text-[18px] font-bold">Identidade</h2>
          <Input
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            placeholder="Sobrenome"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
          />
          <Input
            placeholder="Idade"
            type="number"
            value={idade}
            onChange={(e) => setIdade(Number(e.target.value))}
          />
        </CardContent>
        <CardContent className="flex flex-col items-center gap-1">
          <h2 className="uppercase text-[18px] font-bold">Gênero</h2>
          <div className="flex items-center gap-1">
            <Button onClick={() => setGenero("feminino")}>Feminino</Button>
            <Button onClick={() => setGenero("masculino")}>Masculino</Button>
          </div>
        </CardContent>
        <CardContent className="flex flex-col items-center gap-1">
          <h2 className="uppercase text-[18px] font-bold">Parentesco</h2>
          <div className="flex items-center gap-1">
            <Button onClick={() => setParentesco("mae")}>Selecionar mãe</Button>
            <Button onClick={() => setParentesco("pai")}>Selecionar pai</Button>
          </div>
        </CardContent>
        <CardContent className="flex flex-col items-center gap-1">
          <Slider
            defaultValue={[semelhanca]}
            max={100}
            step={1}
            onValueChange={(value) => setSemelhanca(value[0])}
          />
        </CardContent>
        <CardContent className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1">
            <Button>Voltar</Button>
            <Button>01</Button>
            <Button onClick={handleSubmit}>Próximo</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
