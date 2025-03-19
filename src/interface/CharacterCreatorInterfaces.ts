export interface Character {
  nome: string;
  sobrenome: string;
  idade: number; 
  genero: "feminino" | "masculino";
  parentesco: "mae" | "pai" | "";
  semelhanca: number;
}