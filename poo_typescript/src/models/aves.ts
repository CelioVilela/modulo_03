import { Animal } from "./animal";

export class Ave extends Animal {
  private _aquatico: boolean;

  constructor(
    nome: string,
    peso: number,
    cor: string,
    raca: string,
    aquatico: boolean
  ) {
    super(nome, peso, cor, raca);
    this._aquatico = aquatico;
  }

  public voar(): void {
    console.log(`${this.nome} voando...`);
  }
  public botarOvo(): void {
    console.log(`${this.nome} botando ovo...`);
  }

  emitirSom(som: string): void {
    throw new Error("Método não implementado.");
  }

  public locomover(passos: number): void {
    throw new Error("Método não implementado.");
}
}