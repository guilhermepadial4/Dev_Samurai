function Produto(nome, preco) {
    this.nome = nome,
    this.preco = preco
};

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p2 = {
    nome: 'Iphone 15 Plus',
    preco: 11000
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.desconto(50);
console.log(p2);

const p1 = new Produto('Galaxy S23 Ultra', 3500);
