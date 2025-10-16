export class Celular {
    marca: string;
    private _modelo: string;
    public readonly _capacidadeMemoriaInterna: number;
    qualidadeCamera: number;
    tipo: string;

    constructor(
    marca: string,
    modelo: string,
    capacidadeMemoriaInterna: number,
    qualidadeCamera: number,
    tipo: string
) {
    this.marca = marca;
    this._modelo = modelo;
    this._capacidadeMemoriaInterna = capacidadeMemoriaInterna;
    this.qualidadeCamera = qualidadeCamera;
    this.tipo = tipo;
}
    public set modelo(modelo: string){
        this._modelo = modelo;
    }

    public get modelo(): string {
        return this._modelo;
    }

    fazerLigacao(){
        console.log(`Fazendo ligação...`);
    }
    receberLigacao(){
        console.log("Recebendo ligação...");
    }
    fotografar(){
        console.log("Fotografando...")
    }
}