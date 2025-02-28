import { createContext, useState, useContext, useEffect, Context } from "react";
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

const VisibilityCtx = createContext<VisibilityProviderValue | null>(null);

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [opened] = useState(true); 
  const [personagens, setPersonagens] = useState<Character[]>([]);

  // Usando useEffect para escutar a mensagem 'Visible', mas não alterando 'opened'
  useEffect(() => {
    // Função que será chamada quando a mensagem 'Visible' for recebida
    const handleVisibleMessage = (event: MessageEvent) => {
      if (event.data?.name === "Visible") {
        // Aqui apenas logamos o payload, mas não alteramos o estado 'opened'
        console.log("Payload recebido:", event.data.payload);
      }
    };

    // Adicionando o event listener para escutar a mensagem
    window.addEventListener("message", handleVisibleMessage);

    // Limpando o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("message", handleVisibleMessage);
    };
  }, []); // O efeito roda uma vez ao montar o componente

  const adicionarPersonagem = (personagem: Character) => {
    if (personagens.length < 5) {
      setPersonagens([...personagens, personagem]);
    }
  };

  return (
    <VisibilityCtx.Provider value={{ opened, setOpened: () => {}, personagens, adicionarPersonagem }}>
      {children} {/* A tela não muda, apenas renderiza os filhos normalmente */}
    </VisibilityCtx.Provider>
  );
};

export const useVisibility = () =>
  useContext<VisibilityProviderValue>(VisibilityCtx as Context<VisibilityProviderValue>);
