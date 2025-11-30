import { IProjeto } from "./IProjeto";

export interface ITarefa {
  descricao: string;
  tempo: number;
  projeto: IProjeto;
}
