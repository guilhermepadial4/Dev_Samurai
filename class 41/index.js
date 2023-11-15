function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function (percentual) {
    return this.preco = this.preco - (this.preco * percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
    return this.preco = this.preco + (this.preco * percentual / 100);
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};

Camiseta.prototype = Object.create(Produto.prototype);

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;
    this.estoque = estoque;
};

Caneca.prototype = Object.create(Produto.prototype);

const produto = new Produto('Escudo Corinthians', 1910);
const camiseta = new Camiseta('Oversize CBUM', 333, 'preta');
const caneca = new Caneca('Caneca 500ml', 33, 'Porcelana', 53);

console.log(produto);
console.log(camiseta);
console.log(caneca);
