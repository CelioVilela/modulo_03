"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ave = void 0;
const animal_1 = require("./animal");
class Ave extends animal_1.Animal {
    constructor(nome, peso, cor, raca, aquatico) {
        super(nome, peso, cor, raca);
        this._aquatico = aquatico;
    }
    voar() {
        console.log(`${this.nome} voando...`);
    }
    botarOvo() {
        console.log(`${this.nome} botando ovo...`);
    }
    emitirSom(som) {
        throw new Error("Método não implementado.");
    }
    locomover(passos) {
        throw new Error("Método não implementado.");
    }
}
exports.Ave = Ave;
//# sourceMappingURL=aves.js.map