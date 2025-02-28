import { createContext, useState, useContext, Context } from "react";
import { postMessage } from "../hooks/postMessage";

interface Character {
  nome: string;
  sobrenome: string;
  idade: number;
  genero: "feminino" | "masculino";
  parentesco: "mae" | "pai";
  semelhanca: number;
}

interface VisibilityProviderValue {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  personagens: Character[];
  adicionarPersonagem: (personagem: Character) => void;
}
interface VisibilityProviderValue {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

const VisibilityCtx = createContext<VisibilityProviderValue | null>(null);

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [opened, setOpened] = useState(true);
  postMessage("Visible",(payload: { opened: boolean;  }) => {
    setOpened(payload.opened);
    console.log("Payload recebido:", payload);
  }
);
  const [personagens, setPersonagens] = useState<Character[]>([]);

  const adicionarPersonagem = (personagem: Character) => {
    if (personagens.length < 5) {
      setPersonagens([...personagens, personagem]);
    }
  };

  return (
    <VisibilityCtx.Provider value={{ opened, setOpened, personagens, adicionarPersonagem }}>
      {opened && children}
    </VisibilityCtx.Provider>
  );
};

export const useVisibility = () =>
  useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>);
