export abstract class Animal {
  private _nome: string;
  private _peso: number;
  private _cor: string;
  private _raca: string;

  constructor(nome: string, peso: number, cor: string, raca: string) {
    this._nome = nome;
    this._peso = peso;
    this._cor = cor;
    this._raca = raca;
  }

  get nome(): string {
    return this._nome;
  }

  // Método abstrato que deve ser implementado pelas subclasses
  abstract locomover(metros: number): void;
}

