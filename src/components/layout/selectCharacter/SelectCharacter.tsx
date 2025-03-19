import { useState } from "react";

import { Card, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useVisibility } from "../../../providers/Visibility";
import { Button } from "@/components/ui/button";

import CharacterInformation from "../characterInformation/CharacterInformation";
import CharacterCreator from "../characterCreator/CharacterCreator";

export default function SelectCharacter() {
  const { personagens } = useVisibility();
  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState<number | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleCharacterClick = (index: number) => {
    setSelectedCharacterIndex(index);
    setIsCreating(false);
  };

  const handleButtonClick = () => {
    if (isSlotEmpty) {
      setIsCreating(true);
    } else if (selectedCharacterIndex !== null) {
       personagens[selectedCharacterIndex]
    }
  };

  const isSlotEmpty = selectedCharacterIndex !== null && !personagens[selectedCharacterIndex];

  const selectedCharacter = selectedCharacterIndex !== null ? personagens[selectedCharacterIndex] : null;

  
  return (
    <div className="flex gap-20 items-center">
      <Card className="flex flex-col gap-2 p-8">
        <CardHeader>
          <h1 className="uppercase text-[18px] font-bold">Selecionar Personagem</h1>
        </CardHeader>
        {Array.from({ length: 5 }).map((_, index) => (
          <Input
            key={index}
            className="p-8"
            value={personagens[index] ? personagens[index].nome : ""}
            placeholder="vazio"
            onClick={() => handleCharacterClick(index)}
            readOnly
          />
        ))}
        <Button onClick={handleButtonClick}>
          {isSlotEmpty ? "Criar" : "Jogar"}
        </Button>
      </Card>

      {isCreating && <CharacterCreator />}

      {selectedCharacter && !isCreating && selectedCharacterIndex !== null && (
        <CharacterInformation 
          character={selectedCharacter} 
          index={selectedCharacterIndex} 
        />
      )}
    </div>
  );
}
