export interface Character {
    nome: string;
    sobrenome: string;
    idade: number;
    genero: "feminino" | "masculino";
    parentesco: "mae" | "pai" | "";
    semelhanca: number;
  }
  
  export interface VisibilityProviderValue {
    opened: boolean;
    setOpened: (opened: boolean) => void;
    personagens: Character[];
    adicionarPersonagem: (personagem: Character) => void;
    removerPersonagem: (index: number) => void;
  }
  