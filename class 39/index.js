function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
}

const p1 = new Pessoa ('Guilherme', 'Padial');
const data = new Date();

console.dir(p1);
console.dir(data);
