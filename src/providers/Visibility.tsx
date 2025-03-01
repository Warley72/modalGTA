import React, { createContext, useState, useContext, Context } from "react";
import { postMessage } from "../hooks/postMessage";
import { Character, VisibilityProviderValue } from "../interface/VisibilityInterfaces";

const VisibilityCtx = createContext<VisibilityProviderValue | null>(null);

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [opened, setOpened] = useState(true);
  postMessage("Visible", (payload: { opened: boolean }) => {
    setOpened(payload.opened);
    console.log("Payload recebido:", payload);
  });
  const [personagens, setPersonagens] = useState<Character[]>([]);

  const adicionarPersonagem = (personagem: Character) => {
    if (personagens.length < 5) {
      setPersonagens([...personagens, personagem]);
    }
  };

  const removerPersonagem = (index: number) => {
    const updatedPersonagens = personagens.filter((_, idx) => idx !== index);
    setPersonagens(updatedPersonagens);
  };

  return (
    <VisibilityCtx.Provider value={{ opened, setOpened, personagens, adicionarPersonagem, removerPersonagem }}>
      {children}
    </VisibilityCtx.Provider>
  );
};

export const useVisibility = () =>
  useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>);
