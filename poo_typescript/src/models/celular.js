"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Celular = void 0;
class Celular {
    constructor(marca, modelo, capacidadeMemoriaInterna, qualidadeCamera, tipo) {
        this.marca = marca;
        this._modelo = modelo;
        this._capacidadeMemoriaInterna = capacidadeMemoriaInterna;
        this.qualidadeCamera = qualidadeCamera;
        this.tipo = tipo;
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    get modelo() {
        return this._modelo;
    }
    fazerLigacao() {
        console.log(`Fazendo ligação...`);
    }
    receberLigacao() {
        console.log("Recebendo ligação...");
    }
    fotografar() {
        console.log("Fotografando...");
    }
}
exports.Celular = Celular;
//# sourceMappingURL=celular.js.map