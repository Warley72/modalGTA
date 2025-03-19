export interface CharacterData {
    nome: string;
    sobrenome: string;
    idade: number;
    genero: "feminino" | "masculino";
    parentesco: "mae" | "pai" | "";
    semelhanca: number;
  }
  
export interface CharacterInformationProps {
    character: CharacterData;
    index: number;
  }