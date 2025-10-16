"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nome, peso, cor, raca) {
        this._nome = nome;
        this._peso = peso;
        this._cor = cor;
        this._raca = raca;
    }
    get nome() {
        return this._nome;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=animal.js.map