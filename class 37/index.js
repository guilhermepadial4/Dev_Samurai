function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: false,
        configurable: true,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('O estoque precisa ser um número');
            }
            estoquePrivado = valor;
        }
    })
    }

const p1 = new Produto('Galaxy S23 Ultra', 'R$ 3.000,00', 103);
p1.estoque = 203
console.log(p1.estoque);
